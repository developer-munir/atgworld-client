import React, { createContext } from "react";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(app);
const AuthProvider = ({ children }) => {
  const userInfo = {};
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
