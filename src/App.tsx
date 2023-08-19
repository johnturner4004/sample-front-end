/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { type ReactElement, useEffect, useState, type ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './styles.css'
import moment from 'moment'

import GameInfo from './GameInfo'

export default function App (): ReactElement {
  interface Game {
    id?: number | undefined
    name: string
    date_added: string
  }

  const [newName, setNewName] = useState('')
  const [newDate, setNewDate] = useState('')
  const [showForm, setShowForm] = useState(false)

  const gameList: Game[] = useSelector((store: any) => store.gameReducer)
  const dispatch = useDispatch()

  const handleClick = (): void => {
    setShowForm(!showForm)
  }

  const handleSubmit = (): void => {
    const dateAdded: string = moment(newDate).format()
    const newGame: Game = {
      name: newName,
      date_added: dateAdded
    }
    dispatch({ type: 'INSERT_GAME', payload: newGame })
  }

  const handleNameChange = (e: ChangeEvent): void => {
    setNewName((e.target as HTMLTextAreaElement).value)
  }

  const handleDateChange = (e: ChangeEvent): void => {
    setNewDate((e.target as HTMLTextAreaElement).value)
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_GAME' })
  }, [])

  return (
    <>
      <div className='game-header'>
        <h1>Game Collection</h1>
        <button onClick={(): void => { handleClick() }}>{showForm ? 'Cancel New Game' : 'New Game'}</button>
      </div>
      { showForm
        ? <div className='game-new'>
          <h2>New Game Info</h2>
          <label>Name: </label>
          <input type="text" value={newName} onChange={(e): void => { handleNameChange(e) }} />
          <label> Date: </label>
          <input type="text" value={newDate} onChange={(e): void => { handleDateChange(e) }} />&nbsp;
          <button onClick={(): void => { handleSubmit() }}>Submit</button>
        </div>
        : ''}
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
