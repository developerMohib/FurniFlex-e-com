import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import Proptypes from "prop-types";
import auth from "../Firebase/Firebase.config";

export const AuthCustomContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // sign up
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

   // update Profile
   const updateProfileUser = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  // email password login
  const loginWithEmailPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google sign in
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

   // log out
   const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // user on change
  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscriber();
  }, []);

  const userInfo = {createUser,user, loading,updateProfileUser,loginWithEmailPass, loginWithGoogle, logOut};
  return (
    <AuthCustomContext.Provider value={userInfo}>
      {children}
    </AuthCustomContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: Proptypes.node,
};
export default AuthProvider;
