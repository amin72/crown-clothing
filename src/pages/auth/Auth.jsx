import React from 'react'

import './Auth.scss'
import SignIn from '../../components/auth/SignIn'
import SignUp from '../../components/auth/SignUp'


const Auth = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Auth