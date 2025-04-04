# HealthC

## Project Overview
HealthC is a healthcare management system that helps users manage their medical reports, find nearby doctors, and access an AI-powered healthcare assistant. This project simplifies healthcare management by integrating smart technology and real-time doctor location tracking.

## Features
- **Manage Medical Reports:** Upload and store your medical reports securely.
- **Find Nearby Doctors:** Locate doctors near your location based on availability.
- **AI Healthcare Assistant:** Get AI-driven healthcare suggestions and assistance.

## Project Structure
This repository consists of two main components:
1. **Client** - The frontend application.
2. **Server** - The backend API.

## Setup Instructions

### Prerequisites
- Node.js (for running the client and server)
- MongoDB (for database storage)
- Git (for cloning the repository)

### Installation Steps

1. **Clone the Repository**
   ```sh
   git clone https://github.com/fazilsaifi04/HeatlhC.git
   cd HeatlhC
   ```

2. **Setup the Client**
   ```sh
   cd client
   npm install
   npm start
   ```
   The client runs on `http://localhost:3000` by default.

3. **Setup the Server**
   ```sh
   cd ../server
   npm install
   ```

4. **Configure Environment Variables**
   - Create a `.env` file inside the `server` directory.
   - Add the following content:
     ```env
     MONGODB_URI=your_mongodb_connection_string
     PORT=3000
     ```

5. **Run the Server**
   ```sh
   npm start
   ```
   The backend API will start on `http://localhost:4000`.

## Usage
Once both the client and server are running, you can:
- Sign up and manage your medical reports.
- Search for nearby doctors.
- Get healthcare recommendations using the AI assistant.

## Contributing
Feel free to contribute by creating pull requests. Make sure to follow the coding guidelines and best practices.

## License
This project is open-source and available under the MIT License.

---
Happy coding! 🚀

