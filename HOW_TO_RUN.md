# How to Run Your Portfolio

This is a static HTML/CSS/JavaScript portfolio website. Here are several ways to run it:

## Method 1: Open Directly in Browser (Quickest)

1. Navigate to your portfolio folder
2. Double-click on `index.html`
3. It will open in your default web browser

**Note:** Some features might be limited when opening directly from the file system.

---

## Method 2: Using Python HTTP Server (Recommended)

### Windows:
1. Open Command Prompt or PowerShell in the portfolio folder
2. Run: `python -m http.server 8000`
3. Open browser and go to: `http://localhost:8000`

### Mac/Linux:
1. Open Terminal in the portfolio folder
2. Run: `python3 -m http.server 8000`
3. Open browser and go to: `http://localhost:8000`

**To stop the server:** Press `Ctrl + C`

---

## Method 3: Using Node.js (If you have Node.js installed)

1. Install a simple HTTP server globally:
   ```bash
   npm install -g http-server
   ```

2. Navigate to your portfolio folder in terminal
3. Run: `http-server -p 8000`
4. Open browser and go to: `http://localhost:8000`

---

## Method 4: Using VS Code Live Server Extension

1. Install VS Code (if not already installed)
2. Install the "Live Server" extension in VS Code
3. Open the portfolio folder in VS Code
4. Right-click on `index.html`
5. Select "Open with Live Server"
6. The site will automatically open in your browser

---

## Method 5: Using the Batch File (Windows)

1. Simply double-click `run-server.bat`
2. A server will start automatically
3. Open browser and go to: `http://localhost:8000`

---

## Quick Start (Easiest)

### For Windows:
1. Double-click `run-server.bat`
2. Open browser to `http://localhost:8000`

### For Mac/Linux:
1. Open Terminal in the portfolio folder
2. Run: `chmod +x run-server.sh && ./run-server.sh`
3. Open browser to `http://localhost:8000`

---

## Troubleshooting

### Port 8000 is already in use?
- Change the port number in the command (e.g., `8001`, `8080`)
- Update the URL accordingly

### Python not found?
- Install Python from [python.org](https://www.python.org/downloads/)
- Make sure to check "Add Python to PATH" during installation

### Images not loading?
- Make sure you're using a local server (Method 2-5)
- Check that all image files exist in the `images/` folder

### Scripts not working?
- Open browser Developer Tools (F12)
- Check the Console for any errors
- Make sure you're using a local server, not opening the file directly

---

## Features to Test

Once running, you can test:
- ✅ Loading animation
- ✅ Scroll progress bar
- ✅ Theme toggle (button in header or press 'T' key)
- ✅ Smooth scrolling navigation
- ✅ Mobile menu (resize browser window)
- ✅ Animations and hover effects
- ✅ Project card interactions
- ✅ Tech stack item animations

---

## Deploying Online

To deploy your portfolio online, you can use:
- **GitHub Pages** (Free)
- **Netlify** (Free)
- **Vercel** (Free)
- **Firebase Hosting** (Free tier available)

---

Enjoy your enhanced portfolio! 🚀

