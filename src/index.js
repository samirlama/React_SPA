import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//to create a store
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//to comnnect our component with redux store i.e provider
//import the reducer here now which you created

import rootReducer from './reducers/rootReducer';

//defined store by createStore
const store = createStore(rootReducer);

ReactDOM.render(<Provider store = {store}><App /></Provider> , document.getElementById('root'));




