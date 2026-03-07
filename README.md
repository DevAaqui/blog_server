# Blog Server

Personal blog & portfolio REST API built with Express.js, Sequelize, and MySQL.

## Features

- **Admin Authentication** — JWT-based login, only admin can create/edit content
- **Profile Management** — Bio, social links, availability status, resume URL
- **Experience & Education** — CRUD for resume sections with ordering
- **Skills** — Categorized skills with proficiency levels
- **Projects** — Portfolio projects with tech stack, live/GitHub links
- **Blog Posts** — Full blog with drafts, slugs, tags, read time, pagination
- **File Uploads** — Image and PDF uploads for blog covers, resume, etc.

## Tech Stack

- Node.js + Express.js
- MySQL + Sequelize ORM
- JWT Authentication
- Multer (file uploads)

## Setup

### 1. Prerequisites

- Node.js >= 18
- MySQL server running

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment

Copy `.env.example` to `.env` and update with your MySQL credentials:

```bash
cp .env.example .env
```

Edit the `.env` file — at minimum set `DB_PASSWORD` and `JWT_SECRET`.

### 4. Create the database

```sql
CREATE DATABASE blog_server;
```

### 5. Seed the admin user

This creates all tables and inserts the initial admin user:

```bash
npm run seed
```

### 6. Start the server

```bash
# Development (with hot reload)
npm run dev

# Production
npm start
```

Server runs at `http://localhost:5000`

## API Endpoints

### Public (no auth required)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| GET | `/api/profile` | Get profile info |
| GET | `/api/experiences` | List all experiences |
| GET | `/api/educations` | List all educations |
| GET | `/api/skills` | List all skills |
| GET | `/api/projects` | List all projects |
| GET | `/api/blogs/published` | List published blogs |
| GET | `/api/blogs/published/:slug` | Get blog by slug |

### Admin (Bearer token required)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | Login |
| GET | `/api/auth/me` | Get current admin |
| PUT | `/api/auth/password` | Update password |
| PUT | `/api/profile` | Update profile |
| POST | `/api/experiences` | Add experience |
| PUT | `/api/experiences/:id` | Update experience |
| DELETE | `/api/experiences/:id` | Delete experience |
| POST | `/api/educations` | Add education |
| PUT | `/api/educations/:id` | Update education |
| DELETE | `/api/educations/:id` | Delete education |
| POST | `/api/skills` | Add skill |
| PUT | `/api/skills/:id` | Update skill |
| DELETE | `/api/skills/:id` | Delete skill |
| POST | `/api/projects` | Add project |
| PUT | `/api/projects/:id` | Update project |
| DELETE | `/api/projects/:id` | Delete project |
| GET | `/api/blogs` | List all blogs (inc. drafts) |
| GET | `/api/blogs/:id` | Get blog by ID |
| POST | `/api/blogs` | Create blog |
| PUT | `/api/blogs/:id` | Update blog |
| DELETE | `/api/blogs/:id` | Delete blog |
| POST | `/api/upload` | Upload file |
