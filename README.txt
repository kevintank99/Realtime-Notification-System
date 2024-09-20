You are tasked with building a real-time notification system for a small social media application. The application needs to notify users when someone they follow posts a new message. The notifications should be pushed in real-time to the users who are currently online.

Requirements:

Backend Server:

Use Node.js to set up a backend server.
Use WebSocket (ws: library) for real-time communication.
Use Express.js for handling HTTP requests.
Implement a simple user authentication system (username/password).
Store user information and their followers in a database of your choice (e.g., MongoDB, PostgreSQL, MySQL, Redis, etc.).
Allow users to log in and log out.
Track which users are currently online.
When a user posts a new message, notify all their followers who are online in real-time.
Database Schema:

Users: id, username, password
Followers: user_id, follower_id
Messages: id, user_id, content, timestamp
API Endpoints:

POST /login - Authenticate a user.
POST /logout - Log out a user.
POST /message - Post a new message (authenticated users only).
GET /followers/
- Get followers of a user.
Real-Time Features:

Use WebSocket to notify users in real-time.
When a user posts a new message, send a notification to all their followers who are currently online.
Additional Details:

Authentication: Implement a simple token-based authentication. You can use JWT or any other method you're comfortable with.
Security: Ensure the system is secure, with proper handling of authentication and authorization.
Scalability: Think about how you can scale this system. What changes would be necessary to support thousands of users?
Instructions:

Set up a Node.js project from scratch.
Implement the authentication system.
Design the database schema and set up the database using any database of your choice.
Implement the required API endpoints.
Implement the real-time notification system using WebSocket.
Write clean, maintainable code and add comments where necessary.
Consider edge cases and error handling.
Provide a README file with instructions on how to run the project.