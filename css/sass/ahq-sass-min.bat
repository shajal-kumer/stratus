@echo off
echo Compiling client.min.css in dir:
set current_dir=%cd%
echo %current_dir% 
echo.

sass --watch compile.scss:../client.min.css --style compressed
