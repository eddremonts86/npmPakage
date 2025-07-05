@echo off
echo 🚀 Starting CSS-in-JS Demo Server...
echo.

REM Clean up any previous instances
taskkill /f /im node.exe 2>nul

REM Start Vite dev server
echo 📱 Opening CSS-in-JS demo...
npx vite --open --port 3001 css-in-js-demo.html

echo.
echo ✅ Demo server started!
echo 🌐 Open: http://localhost:3001/css-in-js-demo.html
pause
