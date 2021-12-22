import os
from conans import ConanFile, tools, CMake
from conans.errors import ConanException


class NewPrjConan(ConanFile):
    name = "NewPrj"
    generators = "cmake_multi"
    # generators = "cmake_multi", "cmake_find_package_multi"
    settings = "os", "compiler", "build_type", "arch"
    default_options = {
        "*:shared": True,
        "boost:shared": False,
        "boost:zstd": False,
    }

    def requirements(self):
        self.requires("boost/1.77.0")

    def imports(self):
        strDst = "../../bin/" + str(self.settings.build_type)
        self.copy("*.so", dst=strDst, src="bin")
        self.copy("*.dll", dst=strDst, src="bin")
        self.copy("*.pdb", dst=strDst, src="bin")
        self.copy("protoc.exe", dst=strDst, src="bin")
