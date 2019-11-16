import { createSelector } from 'reselect'

const selectCart = state => state.cart;


export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItem
)

export const selectCartItem = createSelector(
    [selectCartItems],
    cartItem => cartItem.reduce((a,b)=>a+b.quantity,0)
)