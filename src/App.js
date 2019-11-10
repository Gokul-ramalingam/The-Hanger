import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage';
import Shop from './pages/Shop/Shop'
import Header from '../src/components/header/header'

function App() {
  return (
    <div>
    <Header />
     <Route exact path="/" component={Homepage}/>
     <Route exact path="/shop" component={Shop}/>
    </div>
  );
}

export default App;
