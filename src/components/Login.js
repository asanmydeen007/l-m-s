import React, { Component } from "react";
import firebase from "firebase";
// import 'firebase/compat/auth'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// import { Button } from "react-bootstrap";
// import * as firebaseui from "firebase/firebaseui";
import { Link } from "react-router-dom";
import './login.css'
firebase.initializeApp({
  apiKey: "AIzaSyDbvXrg9YuneqpUKLftMfl548M5AYsVKqk",
  authDomain: "learning-management-syst-6f585.firebaseapp.com",
});
class Login extends Component {
  state = { isSignedIn: false };

  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccess: () => false,
    },
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
    });
  };

  render() {
    return (
      <div >
        {this.state.isSignedIn ? (
          <div class='profile'>
          <span>
           {/* <h4> <Link to='/home'>Home Page</Link></h4> */}
            {/* <div>Signed In!</div> */}
            <h4><strong>{firebase.auth().currentUser.displayName}</strong></h4>
            <img class = 'img__profile' src={firebase.auth().currentUser.photoURL} alt ='profile'/>
            <h5>{firebase.auth().currentUser.email}</h5>
            <button
              class="btn btn-secondary sign-o"
              onClick={() => firebase.auth().signOut()}
            >
              Sign Out!
            </button><br></br>
            <Link to='/home'><button class='btn btn-success'>Home Page</button></Link>
          </span>
          </div>
        ) : (<div class='wrapper'>
          <div class='slakj'>
            <h2 class='eluthu'>Welcome to my E-Learning Website</h2>
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
          </div><div class = 'box'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div></div>
          // <div>Not Signed In</div>
        )}
         
    </div>

      
    );
  }
}

export default Login;
