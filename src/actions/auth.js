import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInAnonymously,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from 'firebase/auth';
import { useState } from 'react';

import { useAuth } from '../providers/AuthProvider';
import {auth} from "../firebase/firebase.config"

const authActions = () => {
  const { setUser, authError, setAuthError } = useAuth();
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const handleSignIn = async (signInMethod, e = {}) => {
    const auth = getAuth();

    try {
      switch (signInMethod) {
        case 'email':
          e.preventDefault();
          await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
          setAuthError('');
          break;

        case 'guest':
          await signInAnonymously(auth);
          setAuthError('');
          break;

        default:
          return;
      }
    } catch (error) {
      setAuthError(error?.code);
      console.error(error);
    }
  };

  const handleSignUp = async (signUpMethod, event = {}) => {
    const auth = getAuth();

    try {
      switch (signUpMethod) {
        case 'email':
          event.preventDefault();
          await createUserWithEmailAndPassword(
            auth,
            signUpEmail,
            signUpPassword
          );
          setAuthError('');
          break;

        case 'guest':
          await signInAnonymously(auth);
          setAuthError('');
          break;

        default:
          return;
      }
    } catch (error) {
      setAuthError(error?.code);
      console.error(error);
    }
  };

  const signout = () => signOut(auth);

  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

  return {
    signInEmail,
    setSignInEmail,
    signInPassword,
    setSignInPassword,
    signUpEmail,
    setSignUpEmail,
    signUpPassword,
    setSignUpPassword,
    authError,
    setAuthError,
    handleSignIn,
    handleSignUp,
    signout,
  };
};

export default authActions;
