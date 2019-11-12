import React,{ Component } from 'react'

import './signIn.scss'

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
        <div>
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
        <input name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
        <label>Email</label>
        <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
        <label>Password</label>
        <button name="submitButton" type="submit">Submit</button>
        </form>
        </div>
    )
}

}

export default SignIn;