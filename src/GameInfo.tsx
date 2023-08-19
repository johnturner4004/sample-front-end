import React, { type ReactElement } from 'react'
import moment from 'moment'

interface Game {
  id?: number | undefined
  name: string
  date_added: string
}

export default function GameInfo (game: Game): ReactElement {
  return (
    <>
      <h2>{game.name}</h2>
      <p className='game-date'>{moment(game.date_added).format('MMMM Do YYYY')}</p>
    </>
  )
}
