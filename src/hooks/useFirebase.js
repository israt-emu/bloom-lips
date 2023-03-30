import initializeAuth from "../firebase/initialize-firebase";
import {GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile} from "firebase/auth";
import {useEffect, useState} from "react";

initializeAuth();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState();
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  //sign in with google
  const googleSignIn = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        setError("");
        saveUser(result.user.email, result.user.displayName, "PUT");
        const redirect_uri = location.state?.from || "/dashboard";
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
        const newUser = {email, displayName: name};
        setUser(newUser);
        updateInfo(name);
        saveUser(email, name, "POST");
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
        const redirect_uri = location.state?.from || "/dashboard";
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
  //save or update user to database
  const saveUser = (email, displayName, method) => {
    const user = {email, displayName};
    fetch("https://bloom-lips-server.onrender.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.upsertedId || data.insertedId) {
          alert("User Created Successfully");
        } else if (data.matchedCount) {
          alert("User Updated Successfully");
        }
      });
  };
  //check admin
  useEffect(() => {
    setAdminLoading(true);
    fetch(`https://bloom-lips-server.onrender.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin))
      .finally(() => setAdminLoading(false));
  }, [user?.email]);
  return {
    user,
    error,
    admin,
    adminLoading,
    googleSignIn,
    registration,
    loginWithEmailPass,
    logOut,
    isLoading,
  };
};
export default useFirebase;
