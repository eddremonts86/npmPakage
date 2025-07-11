@echo off
echo 🧪 Testing Final Implementation - Both Environments
echo ==================================================

echo.
echo 📦 Building main package...
cd /d "c:\Users\eduar\OneDrive\Escritorio\npmPakage"
call npm run build
if %ERRORLEVEL% neq 0 (
    echo ❌ Main package build failed
    pause
    exit /b 1
)
echo ✅ Main package build successful

echo.
echo 🔨 Building CSS-based environment...
cd /d "c:\Users\eduar\OneDrive\Escritorio\npmPakage\develoments\css-based"
call npm run build
if %ERRORLEVEL% neq 0 (
    echo ❌ CSS-based build failed
    pause
    exit /b 1
)
echo ✅ CSS-based build successful

echo.
echo 🔨 Building Tailwind-based environment...
cd /d "c:\Users\eduar\OneDrive\Escritorio\npmPakage\develoments\tailwind-based"
call npm run build
if %ERRORLEVEL% neq 0 (
    echo ❌ Tailwind-based build failed
    pause
    exit /b 1
)
echo ✅ Tailwind-based build successful

echo.
echo 🚀 Starting both development servers...
echo CSS-based will run on http://localhost:5173
echo Tailwind-based will run on http://localhost:5174
echo.
echo Press Ctrl+C to stop both servers
echo.

REM Start CSS-based environment
cd /d "c:\Users\eduar\OneDrive\Escritorio\npmPakage\develoments\css-based"
start "CSS-Based Dev Server" cmd /k "npm run dev"

REM Wait a moment for the first server to start
timeout /t 3 /nobreak > nul

REM Start Tailwind-based environment
cd /d "c:\Users\eduar\OneDrive\Escritorio\npmPakage\develoments\tailwind-based"
start "Tailwind-Based Dev Server" cmd /k "npm run dev -- --port 5174"

echo.
echo ✅ Both servers started successfully!
echo 🌐 CSS-based: http://localhost:5173
echo 🌐 Tailwind-based: http://localhost:5174
echo.
echo 📋 Compare both environments:
echo    - Visual appearance should be identical
echo    - Dialog functionality should work perfectly in both
echo    - Theme switching should work in both
echo    - All components should render the same way
echo.
pause
