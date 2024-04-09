import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';


import Header from './components/header/header.component';
import Homepage from './homepage/homepage.component';
import ShopPage from './shop/shop.component';


function App() {
  return (
    <div>
    <Header />
  
    <Switch>
     <Route exact path='/' component={Homepage} />
     <Route path='/shop' component={ShopPage} />
     </Switch>
    </div>
  );
}

export default App;
