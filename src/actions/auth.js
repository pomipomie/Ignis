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
import {auth} from "../firebase/firebase.config.js"
import { useToast } from '@chakra-ui/toast';

const authActions = () => {
  const { setUser, authError, setAuthError } = useAuth();
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const toast = useToast()

  const handleSignIn = async (signInMethod) => {
    const auth = getAuth();

    try {
      switch (signInMethod) {
        case 'email':
          await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
          break;

        case 'guest':
          await signInAnonymously(auth);
          break;
        default:
          return;
      }
    } catch (error) {
      throw error
    }
  };

  const handleSignUp = async (signUpMethod) => {
    const auth = getAuth();

    try {
      switch (signUpMethod) {
        case 'email':
          await createUserWithEmailAndPassword(
            auth,
            signUpEmail,
            signUpPassword
          );
          break;

        case 'guest':
          await signInAnonymously(auth);
          break;

        default:
          return;
      }
    } catch (error) {
      throw error
    }
  };

  const signout = () => signOut(auth).then(()=>{
    toast({
      title: 'Done',
      description: "Log out success",
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  });

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  });

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
