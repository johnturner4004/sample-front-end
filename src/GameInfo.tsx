import React, { useState, type ReactElement } from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'

interface Game {
  id?: number | undefined
  name: string
  date_added: string
}

export default function GameInfo (game: Game): ReactElement {
  const dispatch = useDispatch()

  const [editMode, setEditMode] = useState(false)
  const [name, setName] = useState(game.name)
  const [date, setDate] = useState(game.date_added)
  const [deleteMode, setDeleteMode] = useState(false)

  const handleSubmit = (): void => {
    const dateAdded = moment(date).format()
    const gameEdit: Game = {
      id: game.id,
      name,
      date_added: dateAdded
    }
    setEditMode(!editMode)
    dispatch({ type: 'EDIT_GAME', payload: gameEdit })
  }

  const handleCancel = (): void => {
    setName(game.name)
    setDate(game.date_added)
    setEditMode(!editMode)
  }

  const handleDelete = (): void => {
    dispatch({ type: 'DELETE_GAME', payload: game })
  }

  return (
    <>
      {
        editMode
          ? <>
            <input value={name} onChange={(e): void => { setName(e.target.value) }} />
            <input value={date} onChange={(e): void => { setDate(e.target.value) }} />
            <div className='game-edit-buttons'>
              <button onClick={((): void => { handleSubmit() })}>Submit</button>
              <button onClick={((): void => { handleCancel() })}>Cancel</button>
            </div>
          </>
          : <>
            <div className='game-header'>
              <h2>{game.name}</h2>
              <div className='game-header__buttons'>
                {
                  deleteMode
                    ? <>
                      <p>Are you sure you want to delete?</p>
                      <button onClick={(() => { handleDelete() })}>Yes</button>
                      <button onClick={(() => { setDeleteMode(!deleteMode) })}>No</button>
                    </>
                    : <>
                      <button onClick={((): void => { setEditMode(!editMode) })}>Edit</button>
                      <button onClick={(() => { setDeleteMode(!deleteMode) })}>Delete</button>
                    </>
                }
              </div>
            </div>
            <p className='game-date'>{moment(game.date_added).format('MMMM Do YYYY')}</p>
          </>
      }
    </>
  )
}
