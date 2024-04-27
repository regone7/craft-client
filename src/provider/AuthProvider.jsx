import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext=createContext(null)
const googleprovider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const creatUser = (email, password) => {
        
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUsers = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        
        return signInWithPopup(auth, googleprovider)
    }
    const githubLogin = () => {
        
        return signInWithPopup(auth, githubprovider)
    }
    const signOutUser = () => {
        
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser);
            console.log('observarbing ', currentuser)
            
        })
        return () => {
            unSubscriber()
        }
    }, [])
    const authinfo = {
        user,
        creatUser,
        signInUsers,
        googleLogin,
        githubLogin,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authinfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;