import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Game } from '../types';

interface GamesContextType {
    games: Game[];
    loading: boolean;
    error: string | null;
    addGame: (winner: string) => void;
    deleteAllGames: () => void;
}

const GamesContext = createContext<GamesContextType | undefined>(undefined);

const GamesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const endpoint = 'http://localhost:8000/api/games'; // endpoint for all except method get, post and delete

    const fetchGames = async () => {
        setLoading(true);
        try {
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setGames(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const addGame = async (winner: string) => {
        setLoading(true);
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ winner }),
            });
            if (!response.ok) {
                throw new Error('Failed to add game');
            }
            await fetchGames(); // refresh the game list
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const deleteAllGames = async () => {
        setLoading(true);
        try {
            const response = await fetch(endpoint, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete games');
            }
            setGames([]); // clear the game list
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGames();
    }, []);

    return (
        <GamesContext.Provider value={{ games, loading, error, addGame, deleteAllGames }}>
            {children}
        </GamesContext.Provider>
    );
};

const useGames = () => {
    const context = useContext(GamesContext);
    if (context === undefined) {
        throw new Error('useGames must be used within a GamesProvider');
    }
    return context;
};
  
export { GamesProvider, useGames };