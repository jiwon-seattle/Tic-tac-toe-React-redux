import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import create './store';
import { hot } from 'react-hot-loader/root';
import TicTacToe from './components/TicTacToe'

const Hot = hot(TicTacToe);
ReactDOM.render(
    <Hot />,
  document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
