import { put, takeLatest } from '@redux-saga/core/effects'

import axios from 'axios'

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

function * gameSaga (): any {
  yield takeLatest('FETCH_GAME', fetchGame)
}

export default gameSaga
