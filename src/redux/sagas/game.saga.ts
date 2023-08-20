import { put, takeLatest } from '@redux-saga/core/effects'

import axios from 'axios'

interface Action {
  type: string
  payload?: any
}

interface Game {
  id: number
  name: string
  date: string
}

function * fetchGame (): any {
  try {
    const response = yield axios.get('/api/game')
    yield put({ type: 'SET_GAME', payload: response.data })
  } catch (err) {
    console.error(err)
  }
}

function * insertGame (action: Action): any {
  try {
    yield axios.post('/api/game', action.payload)
    yield put({ type: 'FETCH_GAME' })
  } catch (err) {
    console.error(err)
  }
}

function * editGame (action: Action): any {
  const game: Game = action.payload
  try {
    yield axios.put(`/api/game/${game.id}`, game)
    yield put({ type: 'FETCH_GAME' })
  } catch (err) {
    console.error(err)
  }
}

function * gameSaga (): any {
  yield takeLatest('FETCH_GAME', fetchGame)
  yield takeLatest('INSERT_GAME', insertGame)
  yield takeLatest('EDIT_GAME', editGame)
}

export default gameSaga
