/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { app } from "../pages/Layout/firebase/firebase.config";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {



    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const auth = getAuth(app)

    const createUser = (email, password) => { 
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updateUser = (name, photoURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        });
    }
    // google signIn

    const gProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, gProvider)
    }
    const fProvider = new FacebookAuthProvider()
    const facebookSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, fProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current User:', currentUser)
            //get and set token
            // if (currentUser) {
            //     axios.post('http://localhost/jwt', { email: currentUser.email })
            //         .then(data => {
            //             console.log(data.data);
            //             localStorage.setItem('access_token', data.data.token)

            //         })
            //     setLoading(false)

            // }
            // else {
            //     localStorage.removeItem('access_token')
            //     setLoading(false)

            // }



        });


        return () => {
            return unsubscribe;

        }
    }
        , [auth])
        const [isDarkMode, setIsDarkMode] = useState(false);
        const toggleTheme = () => {
            setIsDarkMode(prevMode => !prevMode);
            // Optionally, you can store the theme preference in localStorage or a global state management solution like Redux
          };

    const authInfo = {

        user, loading, createUser, signIn, logOut, updateUser, googleSignIn, facebookSignIn, isDarkMode, toggleTheme

    }
    return (
        <AuthContext.Provider value={authInfo}>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;