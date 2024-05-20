import { initializeApp } from 'firebase/app';
import { 
  getAuth,
  signInWithRedirect, 
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';

import{
  getFirestore,
  doc,
  getDoc,
  setDoc
}from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDDrNB_vvJ11SjTOumxRIlVGseF-Cz7V-I",
  authDomain: "sorire-clothing-db.firebaseapp.com",
  projectId: "sorire-clothing-db",
  storageBucket: "sorire-clothing-db.appspot.com",
  messagingSenderId: "108531082225",
  appId: "1:108531082225:web:1fc4c32c5e632844459a50"
};


const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({  
  prompt: "select_account",
});

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider); 
export const signInWithGoogleRedirect = ()=> signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,additionalInformation = {}) =>{
 if(!userAuth) return;

 const userDocRef = doc(db, 'users', userAuth.uid);

 const userSnapshot = await getDoc(userDocRef);
 
 if(!userSnapshot.exists()){
  const { displayName, email } = userAuth;
  const createdAt = new Date();
  
  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
      ...additionalInformation,
    });
  } catch(error){
    console.log('error creating the user', error.message);
  }
 }


 return userDocRef;
};


export const createAuthUserWithEmailAndPassword = async(email,password)=>{
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthWithEmailAndPassword = async(email,password)=>{
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};