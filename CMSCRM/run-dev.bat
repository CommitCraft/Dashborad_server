@echo off
title 🚀 CMSCRM Full Stack Dev (Backend + Frontend)
color 0A
echo ==================================================
echo       🚀 Starting CMSCRM Development Servers
echo ==================================================
echo.

:: ---- Verify Node.js ----
where node >nul 2>nul
if %errorlevel% neq 0 (
    color 0C
    echo ❌ Node.js not installed. Download from https://nodejs.org/
    pause
    exit /b
)

:: ---- Verify npm ----
where npm >nul 2>nul
if %errorlevel% neq 0 (
    color 0C
    echo ❌ npm not found in PATH.
    pause
    exit /b
)

:: ---- Install concurrently if missing ----
call npm list -g concurrently >nul 2>nul
if %errorlevel% neq 0 (
    color 0E
    echo ⚙️ Installing concurrently globally...
    npm install -g concurrently
)

color 0A
echo ✅ Environment ready.
echo.

:: ---- Define ports ----
set BACKEND_PORT=5000
set FRONTEND_PORT=5173

echo ==================================================
echo 📦 Backend  : http://localhost:%BACKEND_PORT%
echo 💻 Frontend : http://localhost:%FRONTEND_PORT%
echo ==================================================
echo.

:: ---- Run both servers ----
call npx concurrently ^
  --names "BACKEND,FRONTEND" ^
  --prefix-colors "cyan,magenta" ^
  "cd backend && echo [BACKEND] 🚀 Starting CMSCRM Backend on port %BACKEND_PORT%... && npm install && npm run dev" ^
  "cd frontend && echo [FRONTEND] 💻 Starting CMSCRM Frontend (Vite) on port %FRONTEND_PORT%... && npm install && npm run dev"

echo.
echo ==================================================
echo ✅ CMSCRM Backend → http://localhost:%BACKEND_PORT%
echo ✅ CMSCRM Frontend → http://localhost:%FRONTEND_PORT%
echo (Press Ctrl + C to stop servers)
echo ==================================================
pause