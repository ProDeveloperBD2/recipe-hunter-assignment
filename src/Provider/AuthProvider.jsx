import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    const auth = getAuth(app);
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userProfileUpdate = (user, name, photo) => {
        setLoader(true)
        return updateProfile(user, name, photo)
    }
    const emailVarification = (user) => {
        setLoader(true)
        return sendEmailVerification(user)
    }
    const resetProfilePassword = (email) => {
        setLoader(true)
        return sendPasswordResetEmail(auth, email)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, loggedUser => {
            console.log('user', loggedUser);
            setUser(loggedUser)
            setLoader(false)
        });
        return () => {
            return unsubscriber()
        }
    }, [])
    const authInfo = { createUser, signInUser, userProfileUpdate, emailVarification, resetProfilePassword, user,logOut,loader };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;