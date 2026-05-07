# 🚀 Fierce's Backend: Architecture & Setup Guide

This document serves as the master reference guide for configuring a modern, scalable, and secure Node.js/Express.js backend. It outlines the exact architecture, dependencies, and logical steps used to set up this project from scratch, serving as a blueprint for future growth.

## 🛠️ Tech Stack & Core Libraries
* **Runtime:** Node.js (Modern ES Modules)
* **Framework:** Express.js
* **Database:** MongoDB Atlas & Mongoose (ORM)
* **Authentication:** JSON Web Tokens (JWT) & Bcrypt
* **File Handling:** Multer & Cloudinary
* **Utilities:** CORS, Cookie-Parser, Mongoose-Aggregate-Paginate-V2

## 📁 Project Structure Explained
A clean folder structure is critical for maintainability. Here is the architecture of the `src` directory and what belongs where:

* **`controllers/`**: The core logic. Functions that handle incoming requests, process data, and send responses.
* **`db/`**: Database connection setup and configuration files.
* **`middlewares/`**: Functions that intercept requests before they reach the controller (e.g., Auth checks, Multer file uploads).
* **`models/`**: Mongoose schemas defining how data is structured in MongoDB (e.g., Users, Videos).
* **`routes/`**: Definitions of API endpoints (URLs) and mapping them to their specific controllers.
* **`utils/`**: Reusable helper functions, custom error classes, and standardized response wrappers.
* **`app.js`**: The Express application setup, applying global middlewares (CORS, body parsers).
* **`index.js`**: The main entry point that connects to the database and starts the server listening on a port.
* **`constants.js`**: Application-wide constant variables (like the database name).

---

## ⚙️ Configuration & Setup Journey

### Phase 1: Initialization & Dev Environment
* **`npm init`**: Initialized the Node package manager to generate the `package.json` file.
* **ES Modules**: Set `"type": "module"` in `package.json` to allow modern `import/export` syntax instead of legacy `require()`.
* **Nodemon**: Installed as a dev-dependency to automatically restart the server upon file changes during development.
* **Prettier**: Installed to maintain consistent code formatting across the entire project.
* **`.gitignore`**: Configured to ensure sensitive files (`.env`) and massive folders (`node_modules`) are never pushed to version control.

### Phase 2: Database & Core Server
* **MongoDB Atlas**: Created a cloud cluster to host our database.
* **Mongoose**: Installed to model our application data and interact with MongoDB efficiently.
* **Dotenv**: Configured to securely load environment variables (like API keys, DB URIs, and Secrets) from the `.env` file into `process.env`.
* **Express Setup**: Instantiated the Express server in `app.js` and established the database connection in `index.js` before telling the app to listen.

### Phase 3: Security & Middleware Utilities
* **CORS (Cross-Origin Resource Sharing)**: Configured to strictly control which frontend domains are permitted to request data from this API, preventing unauthorized access.
* **Cookie-Parser**: Added to safely parse incoming HTTP cookies and set secure, HTTP-only cookies in the user's browser (vital for token storage).
* **Standardized Responses**: Created custom `ApiError` and `ApiResponse` classes inside the `utils/` folder to guarantee that every API response (success or failure) follows the exact same predictable JSON format for frontend developers.

### Phase 4: Data Modeling & Features
* **Schemas**: Created `user.model.js` and `video.model.js` to strictly define the shapes, validations, and rules for these database entities.
* **Pagination**: Integrated `mongoose-aggregate-paginate-v2` into the video model. This is crucial for performance, allowing the API to return database records in small chunks (e.g., 10 at a time) rather than crashing the app by loading thousands of records at once.

### Phase 5: Authentication Strategy
* **Bcrypt**: Used inside Mongoose `pre('save')` hooks to automatically hash and salt user passwords before they are saved to the database. We also attached a custom method to compare incoming passwords with the hashed versions during login.
* **JWT (JSON Web Tokens)**: Created custom schema methods to generate both an `AccessToken` (short-lived, required for accessing protected API routes) and a `RefreshToken` (long-lived, stored securely in the database and cookies to fetch new access tokens without requiring the user to re-log in).

### Phase 6: File Upload Pipeline
* **Multer**: Configured as a middleware to intercept `multipart/form-data` requests and temporarily save uploaded files (like user avatars or large videos) locally on the server.
* **Cloudinary**: Integrated the SDK to take the local files saved by Multer, push them to a robust cloud storage environment, return a public, shareable URL, and automatically delete the local temporary file from the server to save space.

---
*This documentation will be continually updated as the project scales and introduces new features.*