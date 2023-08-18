import { all } from 'redux-saga/effects'
import gameSaga from './game.saga'

export default function * rootSaga (): any {
  yield all([
    gameSaga()
  ])
}
