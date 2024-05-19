import React from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import SignUpForm from "../../components/sign-up/sign-up-form.component";


const SignIn = () => {
  const logGoogleUSer = async ()=>{
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return(
    <div>
      <h1>Sign In Page</h1>  
      <button onClick={logGoogleUSer}>Sign in with Google Popup</button>
      <SignUpForm/>
    </div>
    
  )
}
export default SignIn;