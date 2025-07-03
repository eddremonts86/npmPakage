@echo off
echo 🚀 Publishing Schilling Widgets System to NPM
echo ==============================================

REM Check if package.json exists
if not exist "package.json" (
    echo ❌ Error: package.json not found. Make sure you're in the package directory.
    pause
    exit /b 1
)

REM Check npm authentication
echo 📋 Checking npm authentication...
npm whoami >nul 2>&1
if %errorlevel% neq 0 (
    echo ⚠️  You need to login to npm first.
    echo    Run: npm login
    pause
    exit /b 1
)

echo ✅ NPM authentication verified

REM Build the package
echo 🔧 Building package...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed
    pause
    exit /b 1
)

echo ✅ Package built successfully

REM Run tests (if available)
echo 🧪 Running tests...
call npm test --passWithNoTests

REM Publish the package
echo 📦 Publishing to NPM...
call npm publish
if %errorlevel% neq 0 (
    echo ❌ Publishing failed
    pause
    exit /b 1
)

echo.
echo 🎉 SUCCESS! Package published to NPM
echo    You can now install it with:
echo    npm install @schilling-apps/schilling-widgets-system
echo.
echo 📋 Next steps:
echo    1. Check the package on: https://www.npmjs.com/package/@schilling-apps/schilling-widgets-system
echo    2. Share the demo project with your team
echo    3. Update documentation if needed

pause
