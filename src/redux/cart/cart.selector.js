import { createSelector } from 'reselect'

const selectCart = state => state.cart;


export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItem
)


export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)


export const selectCartItem = createSelector(
    [selectCartItems],
    cartItem => cartItem.reduce((a,b)=>a+b.quantity,0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItem => cartItem.reduce((a,b)=>a+b.quantity * b.price,0)
)