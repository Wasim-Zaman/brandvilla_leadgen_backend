# Poster Management API

This project is a RESTful API for managing posters and categories. It's built with Node.js, Express, and Prisma ORM, using MySQL as the database.

## Features

- CRUD operations for Categories and Posters
- Image upload for Posters
- Authentication and Authorization (Admin-only routes)
- Swagger API documentation

## Prerequisites

- Node.js (v14 or later)
- MySQL database
- npm or yarn

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:

   ```
   DATABASE_URL="mysql://username:password@localhost:3306/database_name"
   ADMIN_EMAIL="admin@example.com"
   ADMIN_PASSWORD="your_secure_password"
   ```

4. Run database migrations:
   ```
   npx prisma migrate dev
   ```

## Running the Application

Start the server:

```
npm start
```

The API will be available at `http://localhost:<PORT>`.

## API Documentation

Swagger documentation is available at `/api-docs` when the server is running.

## API Endpoints

### Admin

- `POST /api/admin/login`: Admin login

### Categories

### Swagger Documentation

The API is documented using Swagger. Here's an example of the Category documentation:

## Authentication

Protected routes require a valid JWT token in the Authorization header:

## File Upload

Poster images are uploaded using the `multermate` middleware. The maximum file size is 5MB, and only image files are allowed.

## Database Schema

The project uses three main models:

1. Admin
2. Category
3. Poster

For detailed schema information, refer to the Prisma schema file:

## Project Structure

- `controllers/`: Contains the logic for handling requests and responses
- `routes/`: Defines the API routes
- `middleware/`: Custom middleware functions (e.g., authentication)
- `utils/`: Utility functions and helpers
- `docs/swagger/`: Swagger documentation files
- `prisma/`: Prisma schema and migrations

## Key Components

### Poster Controller

The Poster Controller handles all poster-related operations:

### Category Controller

The Category Controller manages category-related operations:

### Admin Controller

The Admin Controller handles admin creation and login:
