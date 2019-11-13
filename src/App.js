import React,{ Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage';
import Shop from './pages/Shop/Shop'
import Header from '../src/components/header/header'
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
class App extends Component{

  constructor(){
    super()
    this.state = {
       currentUser : null
    }
  }
 unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
           
         if(userAuth)   {
           const userRef = await createUserProfileDocument(userAuth);

           userRef.onSnapshot(snapShot =>{
             this.setState({
               currentUser:{
               id : snapShot.id,
               ...snapShot.data()
               }
             })
           })
         }
         else{
         this.setState({currentUser:userAuth})  
         }
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
