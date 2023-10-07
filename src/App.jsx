// import { useState } from 'react';
import { Container, Heading } from '@chakra-ui/react';
import authActions from './actions/auth';
import RegisterForm from './components/RegisterForm';
import { Button } from '@chakra-ui/button';
import LoginForm from './components/LoginForm';
import { Flex } from '@chakra-ui/layout';

function App() {
  // const [count, setCount] = useState(0)
  const {signout} = authActions()

  return (
    <Container
      h="100vh"
      w="100vw"
      overflowY="auto"
      overflowX="hidden"
      perspective="10px"
    >
      <Heading>
      HOLA MUNDO
      </Heading>
      <Flex gap="4" mt="8">
        <RegisterForm/>
        <LoginForm/>
        <Button onClick={signout}>Cerrar Sesion</Button>
      </Flex>
    </Container>
  )
}

export default App
