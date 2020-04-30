import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../actions/actions';
import Table from './Table';

class TicTacToe extends Component {
  componentDidUpdate(prevProps, prevState){
    const { latestInput, tableData, turn} = this.props;
    const { setWinner, reset, setTurn} = this.props;
    const row = latestInput[0],
    column = latestInput[1]
    
    console.log('check' + this.props.turn)
    

    if(row < 0){
      return;
    }
    let win = false;
    if(tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn && tableData[row][3] === turn){
      win = true;
      
    }
    if(tableData[0][column] === turn && tableData[1][column] === turn && tableData[2][column] === turn && tableData[3][column] === turn){
      win = true;
    }
    if(tableData[0][0] === turn && tableData[1][1] === turn & tableData[2][2] === turn & tableData[3][3] === turn){
      win = true;
    }
    if(tableData[3][0] === turn && tableData[2][1] === turn && tableData[1][2] === turn && tableData[0][3] === turn){
      win = true;
    }

    if(win == true){
      setWinner();
      reset();
    }   else{

      console.log(tableData)
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
  winner: state.winner
})

const mapDispatchToProps = (dispatch) => ({
  setWinner: () => dispatch(action.setWinner()),
  reset: () => dispatch(action.reset()),
  setTurn: () => dispatch(action.setTurn())
});

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);
