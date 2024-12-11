
import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.config';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loadin, setLoading] = useState(true)


    //create user with email and password
    const createUserWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unsubcriber = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)

        })
        return () => {
            unsubcriber()
        }
    }, [])

    const authValue = {
        createUserWithEmail,
    }
    return (
        <AuthContext.Provider value={authValue}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;