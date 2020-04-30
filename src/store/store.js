import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/reducers';
import thunk from 'redux-thunk';

const create= () => {
  return createStore(
    reducer,
    applyMiddleware(thunk),
    
  );
}

export default create;