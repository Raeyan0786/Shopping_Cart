import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
//import {createStore} from 'redux'
import reducer from './Component/Store/reducer'
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';


const store = createStore(reducer);
// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//       <App />
//     </Router>
//   </Provider>,
//   document.getElementById("root")
// );
 const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
   <React.StrictMode>
     <Provider store={store}>
   <Router>
      
        <App />
      
    </Router>
   </Provider>
   </React.StrictMode>
 );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
