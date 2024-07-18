import React from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index'
import { Main } from './main'
import { GamesProvider } from './context/gamesContext'


const root = createRoot(document.getElementById('root')!)
root.render(<GamesProvider><Main /></GamesProvider>)
