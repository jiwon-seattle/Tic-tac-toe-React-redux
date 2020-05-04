// reducers 
// manage statuses

import * as actions from '../actions/actions';

const initialState = {
  winner : '',
  turn : 'O',
  tableData: [
    ['', '', '', ''], 
    ['', '', '', ''], 
    ['', '', '', ''], 
    ['', '', '', ''],
  ],
  latestInput: [-1, -1]
}

const reducer = (state=initialState, action)=> {
  console.log("=== DEBUG: Current state")
  console.log(state);
  switch(action.type){
    case actions.CLICK_CELL:
      const tableData = [...state.tableData];
      console.log("=== DEBUG: Table data details ===")
      console.log(tableData);
      console.log("=== DEBUG: action details ===")
      console.log(action)
      tableData[action.rowIndex] = [...tableData[action.rowIndex]];
      tableData[action.rowIndex][action.columnIndex] = action.turn;
      return {
        ...state,
        tableData,
        turn1: action.turn,
        latestInput: [action.rowIndex, action.columnIndex]
      }
    case actions.SET_WINNER:
      console.log('set winnr', state.turn);
      return {
        ...state,
        winner: 'Winner is ' + state.turn
      }
    case actions.SET_TURN:
      console.log('set' + state.turn);
      return {
        ...state,
        turn: state.turn ==='O' ? 'X' : 'O'
      };
    case actions.RESET:
      return {
        ...state,
        turn: 'O',
        tableData: [
          ['', '', '', ''], 
          ['', '', '', ''], 
          ['', '', '', ''], 
          ['', '', '', ''],
        ],
        latestInput: [-1, -1]
      }
    default:
      return state;
  }
}

export default reducer