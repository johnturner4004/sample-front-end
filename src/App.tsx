import React, { type ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
      {
        gameList.length > 0
          ? gameList.map((game: Game) => {
            return (
              <div key={game.id}>
                <GameInfo {...game} />
              </div>
            )
          })
          : ''
      }
    </>
  )
}
