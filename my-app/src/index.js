import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../src/components/Home';
import Activity from '../src/components/Activity'
import Wallet from '../src/components/Wallet'
import Market from '../src/components/Market'
import Earn from '../src/components/Earn'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home} />
        <Route path="/Activity" component={Activity} />
        <Route path="/Wallet" component={Wallet} />
        <Route path="/Market" component={Market} />
        <Route path="/Earn" component={Earn} />
        <App/>
    </Switch>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
