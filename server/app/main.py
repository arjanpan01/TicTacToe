from dotenv import load_dotenv
load_dotenv()
from fastapi import FastAPI
from routers import game_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3001"],  # Allows requests from localhost:3001
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods
    allow_headers=["*"],  # Allows all headers
)

app.include_router(game_router, prefix="/api")

import uvicorn
if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)