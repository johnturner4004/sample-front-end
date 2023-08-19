import { put, takeLatest } from '@redux-saga/core/effects'

import axios from 'axios'

interface Action {
  type: string
  payload?: any
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

function * gameSaga (): any {
  yield takeLatest('FETCH_GAME', fetchGame)
  yield takeLatest('INSERT_GAME', insertGame)
}

export default gameSaga
