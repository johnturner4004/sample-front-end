/* eslint-disable indent */
const gameReducer = (state: [] = [], action: any): [] => {
  switch (action.type) {
    case 'SET_GAME':
      return action.payload
    default:
      return state
  }
}

export default gameReducer
