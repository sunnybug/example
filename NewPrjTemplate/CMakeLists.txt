cmake_minimum_required(VERSION 3.19)
Include(FetchContent)

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
string(APPEND CMAKE_CXX_FLAGS " /Zc:__cplusplus")

######################
#conan
SET(CONAN_DISABLE_CHECK_COMPILER ON)
execute_process(COMMAND conan install ${CMAKE_CURRENT_SOURCE_DIR} -if ${CMAKE_BINARY_DIR} -s build_type=Debug --build=missing RESULT_VARIABLE ret)
if(ret EQUAL "1")
    message( FATAL_ERROR "conan install debug fail")
endif()

execute_process(COMMAND conan install ${CMAKE_CURRENT_SOURCE_DIR} -if ${CMAKE_BINARY_DIR} -s build_type=Release --build=missing RESULT_VARIABLE ret)
if(ret EQUAL "1")
    message( FATAL_ERROR "conan install debug fail")
endif()

include(${CMAKE_BINARY_DIR}/conanbuildinfo_multi.cmake)
conan_basic_setup(TARGETS KEEP_RPATHS)

######################
# 管理的文件
file(GLOB_RECURSE head 
	${CMAKE_CURRENT_SOURCE_DIR}/src/**.h 
	${CMAKE_CURRENT_SOURCE_DIR}/CMakeLists.txt
	${CMAKE_CURRENT_SOURCE_DIR}/conanfile.txt 
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

target_link_libraries(${MyPrj}
	PUBLIC
		CONAN_PKG::boost
	 )

target_precompile_headers(${MyPrj} PRIVATE
"$<$<COMPILE_LANGUAGE:CXX>:${CMAKE_CURRENT_SOURCE_DIR}/src/stdafx.h>"
)