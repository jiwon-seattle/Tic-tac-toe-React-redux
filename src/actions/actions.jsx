//actions -> reducers

export const SET_WINNER = 'SET_WINNER'; //module
export const CLICK_CELL = 'CLICK_CELL'; //module 
export const SET_TURN = 'SET_TURN'; //module
export const RESET = 'RESET'; //module

export const clickCell = (rowIndex, columnIndex, turn) => {
  return {
    type: CLICK_CELL,
    rowIndex: rowIndex,
    columnIndex: columnIndex,
    turn : turn
  }
}

export const setWinner = (winner) => {
  return {
    type: SET_WINNER,
    winner: winner
  }
}

export const setTurn = () => {
  return {
    type: SET_TURN
  }
} 

export const reset = () => {
  return {
    type: RESET
  }
}