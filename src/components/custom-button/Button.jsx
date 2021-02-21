import React from 'react'
import { CustonButtonContainer } from './ButtonStyles'


const Button = ({ children, ...props }) => {
    return (
        <CustonButtonContainer {...props}>
            {children}
        </CustonButtonContainer>
    )
}

export default Button