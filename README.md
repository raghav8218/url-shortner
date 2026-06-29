URL Shortener
A simple and lightweight URL shortening service built using Node.js, Express, and MongoDB.

Features
Shortens any valid URL into a unique short ID (like abc123xy)

Redirects short URLs to the original destination

Tracks visit history (timestamps)

Built with modular routes, controllers, and models

Tech Stack
Backend: Node.js + Express

Database: MongoDB + Mongoose

ID Generator: nanoid

Setup Instructions
Clone the repo

bash
Copy
Edit
git clone https://github.com/raghav8218/url-shortner.git
cd url-shortener
Install dependencies

bash
Copy
Edit
npm install
Start MongoDB locally

Ensure MongoDB is running on mongodb://localhost:27017/short-url.

Start the server

bash
Copy
Edit
node index.js
Server runs on

arduino
Copy
Edit
http://localhost:3001
📬 API Endpoints
1. POST /url/
Create a short URL.

Request Body:

Content-Type: application/json or x-www-form-urlencoded

json
Copy
Edit
{ "url": "https://example.com" }
Response:

json
Copy
Edit
{ "id": "abc123xy" }
2. GET /url/:shortid
Redirects to the original URL.

Example:

bash
Copy
Edit
GET /url/abc123xy → redirects to https://example.com
Project Structure
bash
Copy
Edit
.
├── controllers/
│   └── url.js        # Route handlers
├── models/
│   └── url.js        # Mongoose schema
├── routes/
│   └── url.js        # API routes
├── connect.js        # MongoDB connection
├── index.js          # Main server

Example
Request:
bash
Copy
Edit
curl -X POST http://localhost:3001/url \
  -H "Content-Type: application/json" \
  -d '{"url": "https://google.com"}'
Response:
json
Copy
Edit
{ "id": "b7h9sd2k" }
