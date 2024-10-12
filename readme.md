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
   ```

4. Run database migrations:
   ```
   npx prisma migrate dev
   ```

## Running the Application

Start the server:
