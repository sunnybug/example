cmake_minimum_required(VERSION 3.19)
Include(FetchContent)

SET(CMAKE_EXPORT_COMPILE_COMMANDS ON)
if (NOT DEFINED CMAKE_TOOLCHAIN_FILE)
	set(CMAKE_TOOLCHAIN_FILE ${CMAKE_BINARY_DIR}/conan_toolchain.cmake)
endif()

# remove last end of "/"
string(REGEX REPLACE "/$" "" CURRENT_FOLDER_ABSOLUTE ${CMAKE_CURRENT_SOURCE_DIR})
# get current relative dir name and set target name
string(REGEX REPLACE ".*/(.*)" "\\1" CURRENT_FOLDER ${CURRENT_FOLDER_ABSOLUTE})

set(MyPrj ${CURRENT_FOLDER})
PROJECT(${MyPrj})
set(CMAKE_CXX_STANDARD 23)
set(CMAKE_C_STANDARD 11)
SET(CMAKE_SUPPRESS_REGENERATION 1)
set_property(GLOBAL PROPERTY USE_FOLDERS ON)
SET(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/bin )

if ("${CMAKE_CXX_COMPILER_ID}" STREQUAL "MSVC")
	# Ignore warnings about missing pdb
	set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} /ignore:4099")
	set(CMAKE_SHARED_LINKER_FLAGS "${CMAKE_SHARED_LINKER_FLAGS} /ignore:4099")
	set(CMAKE_STATIC_LINKER_FLAGS "${CMAKE_STATIC_LINKER_FLAGS} /ignore:4099")
	string(APPEND CMAKE_CXX_FLAGS " /Zc:__cplusplus")
endif()

######################
# 管理的文件
file(GLOB_RECURSE head 
	${CMAKE_CURRENT_SOURCE_DIR}/src/**.h 
	${CMAKE_CURRENT_SOURCE_DIR}/CMakeLists.txt
	${CMAKE_CURRENT_SOURCE_DIR}/conanfile.py)
file(GLOB_RECURSE src 
	${CMAKE_CURRENT_SOURCE_DIR}/src/**.cpp 
	${CMAKE_CURRENT_SOURCE_DIR}/src/**.c)
set(all_files ${head} ${src})
add_executable(${MyPrj} ${all_files})

# include目录
target_include_directories(${MyPrj}
	PRIVATE
		${CMAKE_CURRENT_SOURCE_DIR}/src
	)

find_package(nlohmann_json REQUIRED)
target_link_libraries(${MyPrj}
	PUBLIC
		nlohmann_json::nlohmann_json
	 )

if ("${CMAKE_CXX_COMPILER_ID}" STREQUAL "MSVC")
	 # 减小文件
	 # set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} /NODEFAULTLIB")
	 set(CMAKE_CXX_FLAGS_RELEASE "${CMAKE_CXX_FLAGS_RELEASE} /Ox /Ob2 /Oi /Ot /GL")
	 set(CMAKE_SHARED_LINKER_FLAGS "${CMAKE_SHARED_LINKER_FLAGS} /DEBUG:NONE /OPT:REF /OPT:ICF")
	 set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} /DEBUG:NONE /OPT:REF /OPT:ICF")
	 set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} /GR-")
	 set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} /Zc:strictStrings- /Zc:inline- /permissive-")
 endif()

target_precompile_headers(${MyPrj} PRIVATE
"$<$<COMPILE_LANGUAGE:CXX>:${CMAKE_CURRENT_SOURCE_DIR}/src/stdafx.h>"
)