@echo off
echo  minified css in dir:
set current_dir=%cd%
echo %current_dir% 
echo.

sass --watch compile.scss:../css/antares.min.css --style compressed