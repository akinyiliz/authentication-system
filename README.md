# Authentication System

This project is a simple authentication system built using Node.js, Express.js and Mongoose. It provides user registration, login, and authentication features.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Routes](#routes)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Registration: Allows users to create new accounts with unique usernames and email addresses.
- User Login: Authenticates users with their credentials.
- Password Hashing: Safely stores user passwords using bcrypt for security.
- JWT Authentication: Uses JSON Web Tokens for secure authentication.
- Express Middleware: Implements middleware for route protection and user authentication.
- MongoDB Integration: Stores user data in a MongoDB database using Mongoose.

## Requirements

- Node.js and npm: Make sure you have Node.js and npm installed on your machine.
- MongoDB: Set up a MongoDB instance, and have the connection URI ready.

## Installation

1. Clone the repository:

   ```bash
    git clone https://github.com/your-username/authentication-system.git
   ```

2. Navigate to the project directory:

   ```bash
   cd authentication-system
   ```

3. Install depencies:
   Use `yarn install` or `npm install`. Depending on the package manager you prefer.

# Usage

1. Create a `.env` file in the root directory and add the following:

   ```env
   PORT=8000
   MONGODB_URI=your-mongodb-connection-uri
   JWT_SECRET=your-secret-key
   ```

   Replace `your-mongodb-connection-uri` with your actual MongoDB connection URI and `your-secret-key` with a secret key for JWT.

2. Start the application:

   ```bash
   yarn start
   ```

   The server will be running at [http://localhost:8000](http://localhost:8000).

# Configuration

You can customize the application by modifying the configuration in the `.env` file.

- **PORT**: The port on which the server will run.
- **MONGODB_URI**: The connection URI for your MongoDB database.
- **JWT_SECRET**: A secret key for JWT token generation.

# Routes

- **POST /api/users/register**: Register a new user.
- **POST /api/users/login**: Authenticate and log in a user.
- **GET /api/users/profile/:id**: Get the user profile.
- **PUT /api/users/profile/:id**: Update user details.

# Contributing

Feel free to contribute by opening issues, providing feedback, or submitting pull requests.

# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
