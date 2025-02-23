
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth/cordova";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBGSB2Dprq9b9FUmpFHyCvis8MPb0Fcq-M",
  authDomain: "improve-8f258.firebaseapp.com",
  projectId: "improve-8f258",
  storageBucket: "improve-8f258.firebasestorage.app",
  messagingSenderId: "934765112945",
  appId: "1:934765112945:web:fc7a86657195c9234a75d0"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password) ;
        const user = res.user;
        await addDoc(collection(db,"user"),{
          uid: user.uid,
          name,
          authProvider: "local",
          email,
        });
      }catch(error){
          console.log(error);
          toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}
const login = async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}
const logout = ()=>{
  signOut(auth);
}

export {auth, db, login, signup, logout};