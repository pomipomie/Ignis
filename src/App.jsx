// import { useState } from 'react';
import { Container } from '@chakra-ui/react';
import './App.css';
import authActions from './actions/auth'

function App() {
  // const [count, setCount] = useState(0)
  const {signInEmail,
    setSignInEmail,
    signInPassword,
    setSignInPassword,
    signUpEmail,
    setSignUpEmail,
    signUpPassword,
    setSignUpPassword,handleSignUp} = authActions()

  return (
    <Container>
      HOLA MUNDO
    </Container>
  )
}

export default App
