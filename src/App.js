import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


import './App.css';

import CheckOutPage from './checkout/checkout.component';
import Header from './components/header/header.component';
import Homepage from './homepage/homepage.component';
import ShopPage from './shop/shop.component';
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { connect } from 'react-redux';
// import {auth, createUserProfileDocument} from './firebase/fire-base.utils';
import { setCurrentUser } from './redux/user/user.actions';


function App() {
  return (
    <div>
    <Header />

    <Switch>
     <Route exact path='/' component={Homepage} />
     <Route path='/shop' component={ShopPage} /> 
      <Route exact path='/checkout' component={CheckOutPage} />
     <Route exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>)} />
     </Switch>
    </div>
  );
}

const mapStateToProps=({user})=>({
  currentUser: user.currentUser
});
const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps )(App);
