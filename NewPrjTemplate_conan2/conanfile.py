import os
from conan import ConanFile, tools


class NewPrjConan(ConanFile):
    name = "NewPrj"
    generators = "CMakeDeps", "CMakeToolchain"
    # generators = "cmake_multi", "cmake_find_package_multi"
    settings = "os", "compiler", "build_type", "arch"
    default_options = {"*:shared": False}

    def requirements(self):
        self.requires("nlohmann_json/3.11.3")
