import React from 'react'
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button'
import CartItem from '../cart-item/cart-item'
import { createStructuredSelector } from 'reselect'
import './cart-dropdown.scss'
import { withRouter } from 'react-router-dom'
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.action'

const CartDropdown = ({ cartItem,history,dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItem.length?
        cartItem.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))
      :
      <span className='empty-message'>Your cart is empty</span>
    }
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout')
      dispatch(toggleCartHidden())
    }}>
      GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItem : selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));