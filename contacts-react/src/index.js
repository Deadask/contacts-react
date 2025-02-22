import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter as Router} from 'react-router-dom';

//redux dependencies
import { Provider} from 'react-redux';
import contactReducer from './redux/reducers/contactReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';

const store = createStore(contactReducer, composeWithDevTools())
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>    
  </Provider>
);

