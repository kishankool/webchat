# WebChat - MERN Stack Chatting Web Application

Welcome to the WebChat project! This is a real-time chatting web application built using the MERN (MongoDB, Express, React, Node.js) stack. The app allows users to create accounts, join chat rooms, and engage in real-time conversations with other users. The application is hosted on Render for easy access and deployment.

## Project Files

- `public`: This directory contains the front-end code of the application built using React.
- `server`: This directory contains the back-end code of the application built using Node.js and Express.
- `README.md`: The documentation file you are currently reading.

## Deployment

The ChatWebApp is hosted on Render. You can access the application by visiting [(https://webchat-by-kishan.onrender.com/)].

## Features

- **User Authentication:** Users can create accounts, log in, and log out. User passwords are securely hashed before being stored in the database.

- **Real-Time Messaging:** Users can join different chat rooms and send messages in real-time. Messages are instantly displayed to all participants in the same chat room.

- **Responsive Design:** The user interface is designed to work seamlessly on both desktop and mobile devices.

## Technologies Used

- **MongoDB:** The application uses MongoDB as the database to store user information, chat rooms, and messages.

- **Express:** Express.js is used to build the server-side application, handle API requests, and manage routes.

- **React:** The front-end is built using React, providing a dynamic and interactive user interface.

- **Node.js:** Node.js is used to run the server and handle server-side logic.

- **Socket.IO:** Socket.IO enables real-time, bidirectional communication between clients and the server, making instant messaging possible.

## Local Development

If you want to set up the project locally for development purposes, follow these steps:

1. Clone the repository: `git clone https://github.com/kishankool/webchat.git`
2. Install dependencies for both the client and server:
   - For the client, navigate to the `public` directory and run `npm install`.
   - For the server, navigate to the `server` directory and run `npm install`.
3. Set up environment variables:
   - In the `server` directory, create a `.env` file and set the required environment variables, such as your MongoDB connection string and other configuration settings.
4. Run the development server:
   - In the `public` directory, run `npm start` to start the React development server.
   - In the `server` directory, run `npm start` to start the Node.js server.
5. Access the application in your browser at `http://localhost:3000`.

## Contributing

If you'd like to contribute to the development of WebChat, feel free to fork this repository, make your changes, and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
