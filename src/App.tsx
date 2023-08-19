import React, { type ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './styles.css'

import GameInfo from './GameInfo'

export default function App (): ReactElement {
  interface Game {
    id: number
    name: string
    date_added: string
  }

  const gameList: Game[] = useSelector((store: any) => store.gameReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'FETCH_GAME' })
  }, [])

  return (
    <>
      <h1>Game Collection</h1>
      <div className='game-list'>
        {
          gameList.length > 0
            ? gameList.map((game: Game) => {
              return (
                <div className='game-info' key={game.id}>
                  <GameInfo {...game} />
                </div>
              )
            })
            : ''
        }
      </div>
    </>
  )
}
