# Calisthenics Builder
## Table of Contents
- [Overview](#Overview)
- [Features](#Features)
- [Tech Stack](#Tech-Stack)
- [Project Structure](#Project-Structures)
- [Installation and Setup](#Installation-and-Setup)
- [Deployment](#Deployment)
- [Contributing](#Contributing)
- [Credits and License](#Credits-and-License)
## Overview
Calisthenics Builder is a web application designed to help people explore and stay updated on calisthenics workout trends. It offers the latest news on workout techniques, training tips, and fitness updates, sourced from popular news sources via NewsAPI. Built with a frontend in React and a backend using Express.js, the app provides an efficient, dynamic, and responsive experience.

## Features

* Workout News Feed: Stay informed with the latest updates and articles on calisthenics and fitness.
* User-Friendly Interface: Simple and intuitive navigation for easy browsing.
* API Integration: Powered by NewsAPI for real-time news updates.

## Tech Stack
* JavaScript: Main programming language.
* React: Frontend framework, ensuring a dynamic and responsive UI.
* Express.js: Backend framework, handling server-side requests and API calls.
* NewsAPI: Provides the latest fitness news and trends.

## Project Structure
* Frontend: Built with React, located in the frontEnd folder.
* Backend: Created with Express.js, located in the backEnd folder. Hosted on Vercel for ease of access.

## Installation and Setup

1. Clone the Repository

   ```bash
   git clone https://github.com/yourusername/calisthenics-builder.git
   cd calisthenics-builder
   ```

2. Install Dependiences 

    ```bash
    cd frontEnd
    npm install
    ```

    ```bash
    cd ../backEnd
    npm install
    ```
3. Setup Enviroment Variables

    In the frontEnd folder, create a .env file with the following: 

    ```bash
    REACT_APP_BACKEND_URL=http://localhost:5000
    ```

    In the backEnd folder, create a .env file with the following: 

    ```bash
    REACT_APP_NEWS_API_KEY=your_api_key
    ```
4. Run the application 

    ```bash
    cd backEnd
    npm start

    cd ../frontEnd
    npm start
    ```
## Deployment
The backend is hosted on Vercel at https://calisthenics-builder-backend.vercel.app/api/news. The frontend is also deployed on Vercel.

## Contributing
Feel free to open issues and pull requests. For significant changes, please open an issue first to discuss your idea.

## Credits and License
Author: [Daniel Lam](https://github.com/Lamd11)
This project is licensed under the MIT License. See the LICENSE file for more information.
