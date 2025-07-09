# Insta App Clone

A web application that replicates core features of Instagram, built with React, Vite, and Firebase.

## Features

*   User Authentication (Signup, Login, Logout) with Firebase.
*   Google Authentication.
*   User Profiles with profile picture, posts, followers, and following.
*   Edit Profile functionality.
*   Create, view, like, and comment on posts.
*   Image previews when creating posts.
*   A feed displaying posts from followed users.
*   Suggested users to follow.
*   Search for users.
*   Real-time updates for likes and comments.
*   Responsive design with Chakra UI.

## Technologies Used

*   React
*   Vite
*   Firebase (Authentication, Firestore, Storage)
*   Chakra UI
*   React Router DOM
*   Zustand (State Management)
*   React Firebase Hooks
*   React Icons

## Setup and Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd insta-app-clone
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Set up Firebase:
    *   Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/).
    *   Enable Authentication (Email/Password and Google).
    *   Set up Firestore database.
    *   Set up Firebase Storage.
    *   Obtain your Firebase configuration (apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, measurementId).
    *   Create a `.env` file in the root of the project and add your Firebase credentials, prefixed with `VITE_FIREBASE_`. For example:
        ```env
        VITE_FIREBASE_API_KEY=your_api_key
        VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
        VITE_FIREBASE_PROJECT_ID=your_project_id
        VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
        VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
        VITE_FIREBASE_APP_ID=your_app_id
        VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
        ```

## Running the Application

```bash
npm run dev
```

This will start the development server, typically at `http://localhost:5173`.

## Building for Production

```bash
npm run build
```

This command bundles the application for production into the `dist` folder.

## Linting

```bash
npm run lint
```

This command runs ESLint to check for code quality and style issues.
