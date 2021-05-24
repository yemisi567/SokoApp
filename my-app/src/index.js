import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../src/components/Home';
import Buy from './components/Buy'
import Wallet from '../src/components/Wallet'
import Deal from './components/Deal'
import More from './components/More'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home} />
        <Route path="/Buy" component={Buy} />
        <Route path="/Deal" component={Deal} />
        <Route path="/Wallet" component={Wallet} />
        <Route path="/More" component={More} />
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
