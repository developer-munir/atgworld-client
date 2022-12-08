import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import { getAuth, signInWithPopup, onAuthStateChanged } from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
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
  const userInfo = { googleLogin, user };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
