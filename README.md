# PDF Sync Viewer

This project is a real-time PDF synchronization tool that allows an admin to upload and control a PDF file, while simultaneously synchronizing its viewing across multiple clients. It utilizes WebSockets to sync PDF page changes and selections across different viewers.

## Live Demo

You can view the live demo of the front-end here: [Sync PDF Viewer](https://sync-pdf-frontend.vercel.app).

## Technologies Used

### Frontend:
- **React**: A JavaScript library for building user interfaces.
- **Socket.io-client**: Used for real-time, bidirectional communication between the frontend and backend.
- **Tailwind CSS**: A utility-first CSS framework for building modern, responsive web interfaces.
- **pdf.js**: A library used to display and render PDF files in the browser.
- **Vercel**: Used to deploy the frontend.

### Backend:
- **Node.js**: A JavaScript runtime used to build the backend.
- **Express.js**: A web framework for Node.js to handle HTTP requests and routes.
- **Socket.io**: Used to enable real-time communication between the server and the clients.
- **CORS**: Middleware to enable cross-origin requests from the frontend.
- **Render**: Used for deploying the backend server.

## Features
- **Real-time Synchronization**: Admins can upload a PDF and change pages, which are reflected in real-time across all client devices.
- **Admin Control**: Admins can upload a PDF either via file selection or by providing a direct URL.
- **Page Navigation**: Users can flip through PDF pages with next/previous buttons while syncing with the admin's page changes.

## Setup

1. Frontend:
   ```
   git clone <repo-url>
   cd <repo-directory>
   npm install
   npm run dev
   ```
2. Backend:
   ```
   git clone <repo-url>
   cd <repo-directory>
   npm install
   node index.js
   ```
