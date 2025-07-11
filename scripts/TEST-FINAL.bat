@echo off
echo Testing final implementation...
echo.

echo Building CSS-based environment...
cd /d %~dp0..\develoments\css-based
call npm run build
if %errorlevel% neq 0 (
    echo CSS-based build failed!
    pause
    exit /b 1
)

echo.
echo Building Tailwind-based environment...
cd /d %~dp0..\develoments\tailwind-based
call npm run build
if %errorlevel% neq 0 (
    echo Tailwind-based build failed!
    pause
    exit /b 1
)

echo.
echo Building main package...
cd /d %~dp0..
call npm run build
if %errorlevel% neq 0 (
    echo Main package build failed!
    pause
    exit /b 1
)

echo.
echo All builds completed successfully!
echo.
echo Starting development servers...
call %~dp0LAUNCH-BOTH.bat
