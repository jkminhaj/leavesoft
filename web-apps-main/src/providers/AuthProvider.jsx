import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  FacebookAuthProvider,
  sendPasswordResetEmail,
  updatePassword,
} from "firebase/auth";

import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import UseAxiosSecure from "../Hook/UseAxioSecure";
import moment from "moment";

export const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser == "undefined" || storedUser == null
      ? null
      : JSON.parse(storedUser);
  });

  const [loading, setLoading] = useState(true);

  const axiosSecure = UseAxiosSecure();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signInWithFacebook = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };
  const resetPasswordWithEmail = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  const handleSetNewPassword = (newPassword) => {
    setLoading(true);
    const authUser = auth?.currentUser;
    console.log(authUser, "authUser");
    return updatePassword(authUser, newPassword);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const [isAddPackageBtn, setIsAddPackageBtn] = useState(false);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("currentUser", currentUser);
      // setUser(currentUser);
      setLoading(false);

      const getUserRole = async () => {
        try {
          const res = await axiosSecure.get(
            `/users/user_by_email/${currentUser?.email}`
          );

          if (res?.data?.isVerified) {
            localStorage.setItem("user", JSON.stringify(res?.data));
            setUser(res?.data);
          }
        } catch (error) {
          console.error("Error fetching user type:", error);
        }
      };

      if (currentUser) {
        getUserRole();
      }

      if (!currentUser) {
        localStorage.removeItem("user");
        setUser(null);
      }
    });
    return () => {
      unSubscribe();
    };
  }, [axiosSecure]);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signInUser,
    signInWithGoogle,
    signInWithFacebook,
    resetPasswordWithEmail,
    handleSetNewPassword,
    logOut,
    isAddPackageBtn,
    setIsAddPackageBtn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
