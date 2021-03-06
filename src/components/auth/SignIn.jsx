import React, { Component } from 'react'

import './SignIn.scss'
import FormInput from '../form-input/FormInput'
import Button from '../custom-button/Button'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'


class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch(error) {
            console.log(error)
        }
    }

    handleChange = (e) => {
        const {value, name} = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const { email, password } = this.state

        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                    />
                    <div className='buttons'>
                        <Button type="submit">Sign In</Button>
                        <Button
                            onClick={signInWithGoogle}
                            type='button'
                            isGoogleSignIn
                        >Sign in with Google</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn