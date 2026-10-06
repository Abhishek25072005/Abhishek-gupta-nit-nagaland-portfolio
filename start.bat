@echo off
echo Starting Abhishek's Portfolio...
cd /d "%~dp0"

echo Checking for Node.js...
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed or not in your PATH.
    echo Please download and install Node.js from https://nodejs.org/
    pause
    exit /b
)

echo Installing dependencies (this might take a minute)...
call npm install

echo Starting development server...
echo The portfolio will open automatically once the server is ready.
start http://localhost:5173
call npm run dev

pause
