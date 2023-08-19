import { put, takeLatest } from '@redux-saga/core/effects'

import axios from 'axios'

interface Action {
  type: string
  payload?: any
}

function * fetchGame (): any {
  console.log('Getting game')
  try {
    const response = yield axios.get('/api/game')
    console.log(response)
    yield put({ type: 'SET_GAME', payload: response.data })
  } catch (err) {
    console.error(err)
  }
}

function * insertGame (action: Action): any {
  console.log('Insert a game')
  console.log(action.payload)
}

function * gameSaga (): any {
  yield takeLatest('FETCH_GAME', fetchGame)
  yield takeLatest('INSERT_GAME', insertGame)
}

export default gameSaga
