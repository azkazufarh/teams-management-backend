# LoopBack API Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Running the Application](#running-the-application)
6. [API Endpoints](#api-endpoints)
7. [Environment Variables](#environment-variables)
8. [Database Configuration](#database-configuration)
9. [Testing](#testing)
10. [Troubleshooting](#troubleshooting)
11. [Contributing](#contributing)
12. [License](#license)

---

## Introduction
This is a RESTful API built using LoopBack 3. The API provides endpoints for managing teams and members, including CRUD operations and relational queries.

---

## Features
- Manage Teams (Create, Read, Update, Delete).
- Manage Members (Create, Read, Update, Delete).
- One-to-Many relationship between Teams and Members.

---

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (v10.x recommended for LoopBack 3)
- PostgreSQL or another supported database
- NPM or Yarn

---

## Installation
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Running the Application
1. Start the PostgreSQL database and ensure it's accessible.

2. Run the application:
   ```bash
   node .
   ```

3. Access the API Explorer at `http://localhost:3000/explorer`.

---

## API Endpoints
### Base URL: `http://localhost:3000/api`

#### Teams
- **GET** `/teams`: Retrieve all teams.
- **POST** `/teams`: Create a new team.
- **GET** `/teams/{id}`: Retrieve a specific team by ID.
- **PUT** `/teams/{id}`: Update a team by ID.
- **DELETE** `/teams/{id}`: Delete a team by ID.

#### Members
- **GET** `/members`: Retrieve all members.
- **POST** `/members`: Create a new member.
- **GET** `/members/{id}`: Retrieve a specific member by ID.
- **PUT** `/members/{id}`: Update a member by ID.
- **DELETE** `/members/{id}`: Delete a member by ID.

---

## Environment Variables
Create a `.env` file in the root directory and define the following variables:
```env
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=your_database
DB_USER=your_username
DB_PASSWORD=your_password
PORT=3000
```

---

## Database Configuration
Ensure your PostgreSQL database is running and matches the configuration in `server/datasources.json`. Example:
```json
{
  "db": {
    "name": "db",
    "connector": "postgresql",
    "host": "localhost",
    "port": 5432,
    "database": "your_database_name",
    "user": "your_username",
    "password": "your_password"
  }
}
```

Run the following command to migrate the database:
```bash
node ./server/boot/create-tables.js
```

---

## Testing
To test the API:
1. Use [Postman](https://www.postman.com/) or [cURL](https://curl.se/).
2. Example with `curl`:
   ```bash
   curl -X GET http://localhost:3000/api/teams
   ```

---

## Troubleshooting
- **Common Issue**: `relation "public.team" does not exist`.
  - **Solution**: Ensure your database schema is created using `automigrate`.
  
- **Node.js Version Issues**:
  - Use Node.js v10.x for compatibility with LoopBack 3.

---

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

---

## License
This project is licensed under the [MIT License](LICENSE).

---
