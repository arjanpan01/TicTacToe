
# Tic-Tac-Toe
I solved problems 1 and 3, I was running out of time so I took some shortcuts for error handling on my server side route.
I used FastAPI and MonogoDB and wrote the Dockerfile for the server, the CORS policy is only for localhost:3001
For simplicity I included everything in the github repo, even the .env file (there is nothing sensitive on it).

## Server Setup
Create a python virtual environment & install requirements.txt
Host a mongodb db locally, input the connection string in the .env file
Run main.py inside the app directory.
As mentioned, your client needs to be on localhost:3001.
The server will run on localhost:8000.

## Notes
Could've definitely wrote the useTicTacToe hook better, some functions are longer than I would've liked in there.
I ended up using context to wrap the app for API functionality.
The storage in the db is very simple, it just stores the winner for each game. Users can choose a starting player and delete all entries in the db if they wish.