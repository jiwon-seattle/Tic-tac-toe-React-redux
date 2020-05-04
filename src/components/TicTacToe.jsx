import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../actions/actions';
import Table from './Table';

class TicTacToe extends Component {
  componentDidUpdate(prevProps, prevState){
    const { latestInput, tableData, turn1} = this.props;
    const { setWinner, reset, setTurn} = this.props;
    const row = latestInput[0],
    column = latestInput[1]
    console.log("=== DEBUG: TicTacToe details ===")
    console.log(this)
    console.log("=== DEBUG: latest input")
    console.log(latestInput)
    console.log("turn: " + turn1)

    if(row < 0){
      return;
    }
    let win = false;
    if(tableData[row][0] === turn1 && tableData[row][1] === turn1 && tableData[row][2] === turn1 && tableData[row][3] === turn1){
      win = true;
      
    }
    if(tableData[0][column] === turn1 && tableData[1][column] === turn1 && tableData[2][column] === turn1 && tableData[3][column] === turn1){
      win = true;
    }
    if(tableData[0][0] === turn1 && tableData[1][1] === turn1 & tableData[2][2] === turn1 & tableData[3][3] === turn1){
      win = true;
    }
    if(tableData[3][0] === turn1 && tableData[2][1] === turn1 && tableData[1][2] === turn1 && tableData[0][3] === turn1){
      win = true;
    }

    if(win == true)
    {
      console.log("Winner is: " + turn1)
      setWinner();
      reset();
    }   
    else
    {
      setTurn();  
      
    }
    
    
    let all = false;
    if (all){
      reset();
    } else {
      let all = true;
      tableData.forEach((row) => {row.forEach((column) => { if (column === ''){all = false}
    })
  })
}


  }


render() {
  const { tableData, winner } = this.props;
  return (
    <>
      <Table tableData={tableData}/>
      <p>winner is {winner}</p>
    </>
  )
}
}

const mapStateToProps = (state) => ({
  tableData: state.tableData,
  latestInput: state.latestInput,
  winner: state.winner,
  turn: state.turn,
})

const mapDispatchToProps = (dispatch) => ({
  setWinner: () => dispatch(action.setWinner()),
  reset: () => dispatch(action.reset()),
  setTurn: () => dispatch(action.setTurn())
});

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);
