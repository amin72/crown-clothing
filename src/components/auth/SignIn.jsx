import React, { Component } from 'react'

import './SignIn.scss'
import FormInput from '../form-input/FormInput'
import Button from '../custom-button/Button'


class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('handle submit!')
        console.log(`email:: ${this.state.email}`)
        console.log(`password:: ${this.state.password}`)
        this.setState({
            email: '',
            password: ''
        })
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
                    <Button type="submit">Sign In</Button>
                </form>
            </div>
        )
    }
}

export default SignIn