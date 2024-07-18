from dotenv import load_dotenv
load_dotenv()

import motor.motor_asyncio
import os
from typing import Any, List, Dict
from models import Game

CONNECTION_STRING = os.environ.get("CONNECTION_STRING")
database_name = "tic_tac_toe"

class Mongo_Database:
    def __init__(self, uri: str, database_name: str):
        self.client = motor.motor_asyncio.AsyncIOMotorClient(
            uri,
        )
        self.database = self.client[database_name]

    async def find(self, collection: str) -> List[Any]:
        result = await self.database[collection].find().sort("_id", 1).to_list(length=None)
        return result
    
    async def insert_one(self, collection: str, model) -> Dict[Any, Any]:
        values = model.model_dump(by_alias=True, exclude=["id"])
        result = await self.database[collection].insert_one(values)
        return {"inserted_id": str(result.inserted_id)}
    
    async def delete_many(self, collection: str):
        result = await self.database[collection].delete_many({})
        print(result)
        return {"deleted_count": result.deleted_count}


db = Mongo_Database(
    uri=CONNECTION_STRING, 
    database_name=database_name,
)

#dont have much time for this
async def find_games():
    return await db.find(collection="games")
    
async def insert_new_game(winner: str) -> (None | str):
    return await db.insert_one(
        collection="games",
        model=Game(winner=winner)
    )

async def delete_all_games():
    return await db.delete_many(collection="games")

