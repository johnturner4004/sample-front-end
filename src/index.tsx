import App from './App'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDom from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from './redux/reducers/_root.reducer'
import rootSaga from './redux/sagas/_root.saga'

const sagaMiddleware = createSagaMiddleware()

const middlewareList = process.env.NODE_ENV === 'development'
  ? [sagaMiddleware, logger]
  : [sagaMiddleware]

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewareList)
})

sagaMiddleware.run(rootSaga)

const root = ReactDom.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
