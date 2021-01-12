import React from 'react'
import { connect } from 'react-redux'

import Button from '../custom-button/Button'
import CartItem from '../cart-item/CartItem'
import './CartDropdown.scss'
import { selectCartItems } from '../../redux/cart/cart.reselect'


const CartDropdown = ({ cartItems }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps, null)(CartDropdown)
