import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { createStructuredSelector } from 'reselect'
import './cart-icon.scss';
import { selectCartItem } from '../../redux/cart/cart.selector';

const CartIcon = ({ toggleCartHidden,itemCount }) => (
        <div className='cart-icon' onClick={toggleCartHidden}>
         <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
        </div>
)

const mapDispatchToProps = dispatch =>({
        toggleCartHidden : () => dispatch(toggleCartHidden())
})

const mapStateToProps =createStructuredSelector({
        itemCount : selectCartItem
})

export default connect(
        mapStateToProps,
        mapDispatchToProps,
)(CartIcon);