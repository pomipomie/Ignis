import { useState } from 'react';
import { Heading } from '@chakra-ui/react';
import authActions from './actions/auth';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import { Flex } from '@chakra-ui/layout';
import phoneActions from './actions/phone';
import PhoneForm from './components/PhoneForm';
import InterestPointForm from './components/InterestPointForm';
import { HeaderButton } from './components/HeaderButton';

function App() {
  const {signout} = authActions();
  const {addPhone} = phoneActions();

  const [scrollPosition, setScrollPosition] = useState(0);

  let scrollableElement = document.body;

  scrollableElement.addEventListener('wheel', checkScrollDirection);

  function checkScrollDirection(event) {
    // console.log(event.deltaY)
    if (event.deltaY > 0) {
      scrollPosition >= 100 ? setScrollPosition(100) : setScrollPosition(scrollPosition+1)
    }
    else {
      scrollPosition <= 0 ? setScrollPosition(0) : setScrollPosition(scrollPosition-1)
    }
    // console.log(scrollPosition)
  }

  return (
    <Flex
      h="100vh"
      w="100vw"
      overflow="hidden"
      padding={0}
      margin={0}
      flexDirection="column"
      alignItems="center"
      id='container'
    >
      <Flex 
        id='header'
        height={`${100-scrollPosition*10}vh`}
        minH="10vh"
        maxH="100vh"
        overflow="hidden"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          color={'blue.100'}
          paddingY="2vh"
        >
          IGNIS APP
        </Heading>
      </Flex>
      <Flex 
        as='nav'
        wrap="wrap"
        justifyContent="center"
      >
        <RegisterForm/>
          <LoginForm/>
          <HeaderButton
             onClick={signout}
             title="Log out"
          />
        <PhoneForm/>
        <InterestPointForm/>
      </Flex>
    </Flex>
  )
}

export default App
