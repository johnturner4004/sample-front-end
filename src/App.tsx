import React from 'react'
import { useDispatch } from 'react-redux'

export default function App (): JSX.Element {
  const dispatch = useDispatch()

  dispatch({ type: 'FETCH_GAME' })

  return (
    <h1>Hello from React!</h1>
  )
}
