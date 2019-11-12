import React,{ Component } from 'react'
import FormInput from '../form-input/form-input'

import './signIn.scss'
import CustomButton from '../custom-button/custom-button'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends Component
{
constructor()
{
    super()
    this.state = {
        email : '',
        password:''
    }
}

handleChange = (e) =>{
const {value , name} = e.target
this.setState({
    [name] : value
})
}

handleSubmit = (e) =>{
    e.preventDefault();
    this.setState({
        email : '',
        password:''
    })
}

render(){
    return(
        <div className='signIn'>
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
        <FormInput name="email" type="email" label="Email" value={this.state.email} handleChange={this.handleChange}/>
        <FormInput name="password" type="password" label="Password" value={this.state.password} handleChange={this.handleChange}/>
        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton onClick={signInWithGoogle}>Sign In With Google</CustomButton>
        </form>
        </div>
    )
}

}

export default SignIn;