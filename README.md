
# Tic-Tac-Toe
I solved problems 1 and 3: implemented a basic Tic-Tac-Toe game using React and TypeScript, and extended with a backend server to store game results in a MongoDB database. The project includes Dockerfile for containerization and all necessary configurations for local deployment.

## Problem 1: Basic Tic-Tac-Toe Game Implementation

### Features Implemented:
- **Basic Game Mechanics**: The game allows two players to take turns marking 'X' or 'O' on a 3x3 grid.
- **Winner Determination**: The application determines and announces the winner or a draw based on the game rules.
- **Game Reset**: Users can reset the board to start a new game after a win or draw.
- **Starting Player Selection**: Users can select the starting player at the beginning of the game.

### Components:
- **Main Component**: Manages the overall game state and user interactions, and includes the main layout.
- **ChoosePlayer Component**: Allows users to select the starting player.
- **DisplayBoard Component**: Renders the game board and handles user clicks.
- **Winner Component**: Displays the winner and provides an option to reset the game.
- **PreviousGames Component**: Shows a list of previous game results fetched from the backend.


### Hooks:
- **useTicTacToe**: Custom hook that encapsulates the game logic, including state for the board, current player, winner determination, and game reset functionality.

## Problem 3: Backend Server and Database Integration

### Technologies Used:
- **FastAPI**: For building a robust and scalable backend server.
- **MongoDB**: For storing game results in a NoSQL database.
- **Docker**: For containerizing the application to ensure consistent deployment across different environments.

### Backend Implementation:
#### API Endpoints:
- `GET /api/games`: Fetches all game results from the database.
- `POST /api/games`: Adds a new game result to the database.
- `DELETE /api/games`: Deletes all game results from the database.

#### Server Setup:
- **Virtual Environment**: Create a Python virtual environment and install dependencies from `requirements.txt`.
- **MongoDB**: Host a MongoDB instance locally and provide the connection string in the `.env` file.
- **Running the Server**: Start the FastAPI server by running `main.py` inside the `app` directory. The server will run on `localhost:8000`.

### Notes:
- **Error Handling**: While basic error handling is implemented, more comprehensive error handling could be added for production readiness.
- **Context Usage**: Context API is used to manage global state and API functionality across the application.
- **Database Structure**: The database stores game results simply by recording the winner for each game. Additional features could include storing player names and timestamps.
- **Docker**: A Dockerfile is provided to build both the backend and frontend, facilitating easy setup and deployment.

### Improvements and Considerations:
- **Custom Hooks Optimization**: The `useTicTacToe` hook could be refactored to break down some of the longer functions for better readability and maintainability.
- **Expanded Game Logic**: The game logic for determining the winner is currently hardcoded for a 3x3 grid. If the board size were to be expanded, this logic would need to be adjusted.
- **Security**: Although the `.env` file is included for simplicity, in a real-world application, sensitive information should be securely managed using environment variables and secrets management tools.