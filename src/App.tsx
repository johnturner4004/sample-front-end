import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function App (): JSX.Element {
  const gameList = useSelector((store: any) => store.gameReducer)
  const dispatch = useDispatch()
  console.log('gameList:', gameList)

  useEffect(() => {
    dispatch({ type: 'FETCH_GAME' })
  }, [])

  return (
    <h1>Hello from React!</h1>
  )
}
