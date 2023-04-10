import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import {useNavigate} from 'react-router-dom';
import { auth, googleAuthProvider } from "../../firebase/config";
import { updateUserProfile, authSignOut, authStateChange  } from "./authReducer";
// import { useEffect, useState } from "react";

export const authSingUpUser =

  ({ login, email, password }) =>
  async (dispatch, getState) => {
    const navigate = useNavigate()
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, {
        displayName: login,
        email: email,
      });
      const { uid, displayName ,accessToken} = auth.currentUser;

      dispatch(
        updateUserProfile({
          userId: uid,
          nickName: displayName,
          email,
    token:accessToken,
        })
      );
      navigate('/profile', {replace: true})
   
    } catch (error) {
      if (error) {
        alert("Opps, please try again");
      }
      console.log(error);
      console.log(error.message);
    }
  };








export const authSingInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    console.log(email, password);
    const navigate = useNavigate()
    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate('/profile', {replace: true})
    } catch (error) {
      if (error) {
        console.log("No such user found, please try again");
        alert("No such user found, please try again");
      }
      console.log(error);
      console.log(error.message);
    }
  };

export const authSingOutUser = () => async (dispatch, getState) => {
  console.log("logOut user");
  await signOut(auth);
  dispatch(authSignOut());

};

export const authStateChangeUser = () => async (dispatch, getState) => {
  onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (user) {
      dispatch(
        updateUserProfile({
          userId: user.uid,
          nickName: user.displayName,
          // email: user.email,
        })
      );
      dispatch(authStateChange({ stateChange: true }));
    } else {
    }
  });
};

export const authSignInGoogle = () => async () => {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsub =  auth.onAuthStateChanged((maybeUser) => {
  //     if (maybeUser != null) {
  //       return setUser(maybeUser);
  //     }
  try {
    await signInWithPopup(auth, googleAuthProvider);
    // redirect('/Profile')
  } catch (error) {
    console.log(error);
  }
  //   });
  //   return unsub
  // }, [auth]);
  // return user !=null? console.log(user): console.log('!user')
};
