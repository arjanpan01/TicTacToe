from pydantic import BaseModel, Field

class Game(BaseModel):
    winner: str = Field(...)