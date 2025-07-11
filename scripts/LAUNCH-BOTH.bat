@echo off
echo Starting both development environments...
echo.

echo Starting CSS-based environment on port 5173...
start "CSS-based Dev Server" cmd /k "cd /d %~dp0..\develoments\css-based && npm run dev"

timeout /t 3 /nobreak >nul

echo Starting Tailwind-based environment on port 5174...
start "Tailwind-based Dev Server" cmd /k "cd /d %~dp0..\develoments\tailwind-based && npm run dev -- --port 5174"

echo.
echo Both development servers are starting...
echo CSS-based:    http://localhost:5173
echo Tailwind-based: http://localhost:5174
echo.
echo Press any key to exit...
pause >nul
