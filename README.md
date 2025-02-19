# nasa-webpage-Ananya

## Overview
**Main Web** is a landing page that provides users with easy access to two exciting space exploration apps built using NASA's Open APIs.

- **Web1 (APOD App)**: Displays the Astronomy Picture of the Day (APOD) from NASA, showcasing beautiful images and detailed descriptions.
- **Web2 (NASA Image & Video Library)**: Allows users to search and view images and videos from NASA’s extensive library.

This **Main Web** project serves as a simple React frontend that links to **Web1** and **Web2**. It is deployed on **Vercel** and provides a seamless navigation experience between both applications.

---

## Features
- **Interactive Landing Page**: A clean and simple design to direct users to **Web1** (APOD App) and **Web2** (NASA Image & Video Library).
- **Easy Navigation**: Clear links and buttons to quickly access both space exploration applications.

---

## Tech Stack
- **Frontend**: React.js
- **Deployment**: Vercel (for the Main Web), Heroku (for Web1 and Web2)

---

## Live Demo

You can access the live versions of the apps here:

- **Main Web (Landing Page)**: [Main Web on Vercel](https://nasa-webpage-ananya.vercel.app)
- **Web1 (APOD)**:
  - **Frontend**: [APOD Frontend on Vercel](https://vercel.com/ananya-krishnamurthy-nayakas-projects/nasa-frontend-apod)
  - **Backend**: [APOD Backend on Heroku](https://dashboard.heroku.com/apps/nasa-backend-ananya)
- **Web2 (NASA Image & Video Library)**:
  - **Frontend**: [NASA Image & Video Frontend on Vercel](https://vercel.com/ananya-krishnamurthy-nayakas-projects/vercel_ananya_nasa)
  - **Backend**: [NASA Image & Video Backend on Heroku](https://dashboard.heroku.com/apps/nasa-api-media)

---

## GitHub Repositories

- **Main Web (Frontend)**: [Main Web GitHub Repository](https://github.com/Ananyanayaka/nasa-webpage-Ananya)
- **Web1 (APOD App)**:
  - **Frontend**: [APOD Frontend GitHub Repository](https://github.com/Ananyanayaka/nasa-FRONTEND-APOD)
  - **Backend**: [APOD Backend GitHub Repository](https://github.com/Ananyanayaka/nasa-app-Backend-APOD)
- **Web2 (NASA Image & Video Library)**:
  - **Frontend**: [NASA Image & Video Frontend GitHub Repository](https://github.com/Ananyanayaka/-Vercel_NASA_frontend)
  - **Backend**: [NASA Image & Video Backend GitHub Repository](https://github.com/Ananyanayaka/Heroku_server_node)

---

## Getting Started

### Prerequisites
- Node.js installed (version 14 or higher recommended)
- npm or yarn as your package manager

### Installation

1. Clone the repository:

    ```bash
    git clone <repo-url>
    cd <repo-directory>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the app locally:

    ```bash
    npm start
    ```

    Your app should now be live on `http://localhost:3000`.

---

## How to Use

- **Main Web**: Visit the homepage where you’ll find two clickable links:
  - **APOD (Web1)** – Takes you to the app displaying the Astronomy Picture of the Day (APOD).
  - **NASA Image & Video Library (Web2)** – Takes you to the app where you can search NASA’s image and video library.

---

## File Structure

```
/main-web
  ├── /src
    ├── /components   # React components for the landing page
    ├── /assets       # Images and other static files (if any)
    ├── App.js        # Main React app file that includes links to Web1 and Web2
    └── index.js      # Entry point for the React app
  ├── package.json    # Project metadata and dependencies
```

---

## Acknowledgements
- Thanks to NASA for providing the Open APIs!
- React.js for being an excellent frontend framework.
- Vercel and Heroku for making deployment easy.

---


