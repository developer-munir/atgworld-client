import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import {
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  // sign up new users
  const signUpNewUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign in with email password
  const signInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // log out user
  const logOutUser = () => {
    setLoader(true);
    return signOut(auth);
  };
  // facebook login
  const facebookLogin = (provider) => {
    setLoader(true);
    return signInWithPopup(auth);
  };
  // google login
  const googleLogin = (Provider) => {
    setLoader(true);
    return signInWithPopup(auth, Provider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => unsubscribe();
  }, []);
  const userInfo = {
    googleLogin,
    user,
    signUpNewUser,
    signInUser,
    logOutUser,
    facebookLogin,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
