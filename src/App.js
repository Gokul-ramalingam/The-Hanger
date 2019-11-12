import React,{ Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage';
import Shop from './pages/Shop/Shop'
import Header from '../src/components/header/header'
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp'
import { auth } from './firebase/firebase.utils'
class App extends Component{

  constructor(){
    super()
    this.state = {
       currentUser : null
    }
  }
 unsubsccribeFromAuth = null;
  componentDidMount(){
    this.unsubsccribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({
        currentUser: user
      })
      console.log(user);
    })
    
  }

  componentWillUnmount(){
     this.unsubsccribeFromAuth();
  }

  render(){
  return (
    <div>
    <Header currentUser={this.state.currentUser} /> 
     <Route exact path="/" component={Homepage}/>
     <Route exact path="/shop" component={Shop}/>
     <Route exact path="/signin" component={SignInAndSignUp}/>
    </div>
  );
}
}

export default App;
