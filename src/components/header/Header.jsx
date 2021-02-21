import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLinkContainer,
} from './HeaderContainer'


const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLinkContainer to='/shop'>
          SHOP
        </OptionLinkContainer>
        <OptionLinkContainer to='contact'>
          CONTACT
        </OptionLinkContainer>
        {currentUser ? 
          <OptionLinkContainer as='div' onClick={() => auth.signOut()}>SING OUT</OptionLinkContainer> : 
          <OptionLinkContainer to='/signin'>SIGN IN</OptionLinkContainer>}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps, null)(Header)