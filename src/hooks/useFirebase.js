import initializeAuth from "../firebase/initialize-firebase";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuth();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  //sign in with google
  const googleSignIn = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        setError("");
        const redirect_uri = location.state?.from || "/home";
        history.push(redirect_uri);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
  };
  //registration with email pass
  const registration = (name, email, pass, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        updateInfo(name);
        history.push("/home");
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
  };
  //login with email pass
  const loginWithEmailPass = (email, pass, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        setUser(result.user);
        setError("");
        const redirect_uri = location.state?.from || "/home";
        history.push(redirect_uri);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
  };
  //log out
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
  };
  //profile update
  const updateInfo = (name) => {
    setIsLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //state changed
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        // ...
      }
      setIsLoading(false);
    });
  }, []);
  return {
    user,
    error,
    googleSignIn,
    registration,
    loginWithEmailPass,
    logOut,
    isLoading,
  };
};
export default useFirebase;
