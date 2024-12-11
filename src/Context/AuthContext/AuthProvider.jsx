
import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.config';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loadin, setLoading] = useState(true)


    //create user with email and password
    const createUserWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        setLoading(true)
        signOut(auth)
    }


    useEffect(() => {
        const unsubcriber = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser);

        })
        return () => {
            unsubcriber()
        }
    }, [])

    const authValue = {
        createUserWithEmail,
        signInUser,
        signOutUser,
        user,
    }
    return (
        <AuthContext.Provider value={authValue}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;