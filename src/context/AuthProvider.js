import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const { user, setUser } = useState(null);
    const { loading, setLoading } = useState(true)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe();
    }, [])

    const value = { createUser, signIn, user, loading }
    return (
        <div>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;