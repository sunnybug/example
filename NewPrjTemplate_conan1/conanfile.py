import os
from conans import ConanFile, tools, CMake
from conans.errors import ConanException


class NewPrjConan(ConanFile):
    name = "NewPrj"
    generators = "cmake_multi"
    # generators = "cmake_multi", "cmake_find_package_multi"
    settings = "os", "compiler", "build_type", "arch"
    default_options = {
        "*:shared": True,  # True：让Common的import()能知道有哪些动态库
        "catch2:with_main": False,
        "boost:shared": False,
        "boost:zstd": False,
        "boost:without_test": True,
        "boost:without_context": True,
        "boost:without_contract": True,
        "boost:without_coroutine": True,
        "boost:without_fiber": True,
        "boost:without_graph": True,
        "boost:without_graph_parallel": True,
        "boost:without_iostreams": True,
        "boost:without_json": True,
        "boost:without_log": True,
        "boost:without_math": True,
        "boost:without_mpi": True,
        "boost:without_nowide": True,
        "boost:without_program_options": True,
        "boost:without_python": True,
        "boost:without_random": True,
        "boost:without_regex": True,
        "boost:without_serialization": True,
        "boost:without_stacktrace": True,
        "boost:without_test": True,
        "boost:without_timer": True,
        "boost:without_type_erasure": True,
        "boost:without_url": True,
        "boost:without_wave": True,

        # 静态库编译有问题
        "libnghttp2:shared": True,
        "*:with_snappy": False,

        # lite mongoc
        "mongo-c-driver:with_snappy": False,
        "mongo-c-driver:with_zstd": False,
        "mongo-c-driver:with_icu": False,

        # grpc
        "grpc:csharp_plugin": False,
        "grpc:node_plugin": False,
        "grpc:objective_c_plugin": False,
        "grpc:php_plugin": False,
        "grpc:python_plugin": False,
        "grpc:ruby_plugin": False,

        # "boost:addr2line_location": "D:\\tools\\cygwin\\bin\\addr2line.exe"
    }

    def requirements(self):
        self.requires("boost/1.81.0")

    def imports(self):
        strDst = "../../bin/" + str(self.settings.build_type)
        self.copy("*.so", dst=strDst, src="bin")
        self.copy("*.dll", dst=strDst, src="bin")
        self.copy("*.pdb", dst=strDst, src="bin")
        self.copy("protoc.exe", dst=strDst, src="bin")
