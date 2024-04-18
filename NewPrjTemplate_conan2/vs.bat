 
del "temp\build\CMakeCache.txt"
conan install . -of build  -s build_type=Release --build=missing
cmake -S ./ -B "build" -G"Visual Studio 17 2022"
pause


