import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {ReactComponent as Logo} from "../assets/4.3 crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import './header.styles.scss';

const Header= ({currentUser,hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />        
        </Link>
       
    <div className="searchbar">
    <form action="result">
    <input type="text" name="search"/>
    &nbsp; &nbsp;
    <button className="button">Search</button>
    </form>

    </div>
    <div className="options">
        <Link className="option" to='/shop'>
        Shop
        </Link>
        <Link className="option" to='/shop'>
        Contact
        </Link>
        <CartIcon/>
    </div>
    {hidden ? null : <CartDropDown/>}
  
    </div>
    
);
const mapStateToProps=({user :{currentUser}, cart:{hidden}}) =>({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);