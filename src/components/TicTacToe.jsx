import React, {useEffect, useReducer, useCallback} from 'react';
//when dealing with an asynchronous, use the useEffect
import Table from './Table';

const initialState = {
  winner: '',
  turn: 'O',
  tableData: [
    ['', '', '', ''], 
    ['', '', '', ''], 
    ['', '', '', ''], 
    ['', '', '', '']],
  latestOutput: [-1, -1]
}

export const SET_WINNER = 'SET_WINNER'; //module
export const CLICK_CELL = 'CLICK_CELL'; //module 
export const SET_TURN = 'SET_TURN'; //module
export const RESET = 'RESET'; //module

//reducer translates action and convert it to real action 
const reducer = (state, action) => {
  switch(action.type){
    case SET_WINNER:
      return {
        //state.winner = action.winner // never do this
        //we always have to make a new object change the changed values
        ...state, // shallow cloning, immutability
        winner: action.winner
      }
    case CLICK_CELL:
      const tableData = [...state.tableData] // cloning ex-table 
      tableData[action.row] = [...tableData[action.row]] // study immer library!
      //tableData[action.cell] = [...tableData[action]]
      tableData[action.row][action.cell] = state.turn
      return {
        ...state,
        tableData,
        latestOutput: [action.row, action.cell]
      }
    case SET_TURN: {
      return {
        ...state,
        turn: state.turn === 'O' ? 'X' : 'O'
      }
    }
    case RESET: {
      return {
        ...state,
        turn: 'O',
        tableData: [
          ['', '', '', ''], 
          ['', '', '', ''], 
          ['', '', '', ''], 
          ['', '', '', '']],
        latestOutput: [-1, -1]
      }
    }
    default:
      return state;
  }
}
const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // functions in componenent should use callback
  const onClickTable = useCallback(() => {
    dispatch({ type: SET_WINNER, winner: 'O'})
  }, [])
  // const [winnder, setWinner] = useState('');
  // const [turn, setTurn] = useState('O');
  // const [tableData, setTableData] =useState[['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']]
  
  useEffect( () => {
    const [row, cell] = state.latestOutput;
    if(row < 0){
      return;
    }
    let win = false;
    if(state.tableData[row][0] === state.turn && state.tableData[row][1] === state.turn && state.tableData[row][2] === state.turn && state.tableData[row][3] === state.turn ){
      win = true;
    }
    if(state.tableData[0][cell] === state.turn && state.tableData[1][cell] === state.turn && state.tableData[2][cell] === state.turn && state.tableData[3][cell] === state.turn){
      win = true;
    }
    console.log(win, row, cell, state.tableData)
    if(state.tableData[0][0] === state.turn && state.tableData[1][1] === state.turn && state.tableData[2][2] === state.turn && state.tableData[3][3] === state.turn){
      win = true;
    }
    if(state.tableData[0][3] === state.turn && state.tableData[1][2] === state.turn && state.tableData[2][2] === state.turn && state.tableData[3][0] === state.turn){
      win = true;
    }
    if(win){
      dispatch({type : SET_WINNER, winner : state.turn});
    } else {
      let all = true; // if all are occupied, it means draw
      state.tableData.forEach((row) => { // draw check
        row.forEach((cell) => {
          if (!cell){
            all= false;
          }
        })
      })
      if (all){
        
      }
      else{
      dispatch({type: SET_TURN})
      }
    }
  }, [state.latestOutput]) // when table data changes, use the useEffect

  return (
  <>
    <Table onClick={onClickTable} tableData = {state.tableData} dispatch = {dispatch} />
    {state.winner} wins!
  </>
  )
};

export default TicTacToe;