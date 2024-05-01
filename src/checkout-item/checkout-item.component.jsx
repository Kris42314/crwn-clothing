import React from "react";
import {connect} from 'react-redux';
import { clearItemFormCart, addItem, removeItem } from "../redux/cart/cart.actions";
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem,clearItem,addItem,removeItem}) => {
    const {name,imageUrl,price,quantity} = cartItem;
    return(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt='item' />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
        <button className="button" type='button' onClick={()=>removeItem(cartItem)}>&minus;</button>
           {quantity}
           <button className="button" type='button' onClick={()=>addItem(cartItem)}>+</button>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={()=> clearItem(cartItem)}>
        &#8617;</div>
    </div>
);}

const mapDispatchToProps=dispatch=>({
    clearItem: item=> dispatch(clearItemFormCart(item)),
    addItem: item=> dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps) (CheckoutItem);
