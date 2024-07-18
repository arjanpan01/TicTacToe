from fastapi import APIRouter, HTTPException
from models import Game
from db import insert_new_game, delete_all_games, find_games
from typing import List

game_router = APIRouter()

@game_router.post("/games", response_model=str)
async def create_game(game: Game) -> str:
    try:
        inserted_id = await insert_new_game(game.winner)
        
        if inserted_id:
            return str(inserted_id)
        else:
            raise HTTPException(status_code=500, detail="Failed to insert the game")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@game_router.delete("/games")
async def delete_games() -> str:
    try:
        delete_result = await delete_all_games()
        if delete_result["deleted_count"] > 0:
            return "All games deleted successfully"
        else:
            return "No games found to delete"
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@game_router.get("/games", response_model=List[Game])
async def get_all_games() -> List[Game]:
    try:
        games = await find_games()
        return games
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
