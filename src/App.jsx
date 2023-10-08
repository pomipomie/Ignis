import { useState } from 'react';
import { Heading } from '@chakra-ui/react';
import authActions from './actions/auth';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import { Flex } from '@chakra-ui/layout';
import PhoneForm from './components/PhoneForm';
import InterestPointForm from './components/InterestPointForm';
import { HeaderButton } from './components/HeaderButton';
import { Dashboard } from './components/Dashboard';
import { useAuth } from './providers/AuthProvider';

function App() {
  const {signout} = authActions();
  const {user} = useAuth()

  const [scrollPosition, setScrollPosition] = useState(0);
  const [showDashboard, setShowDashboard] = useState(false);

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
        minH="max-content"
        maxH="100vh"
        overflow="hidden"
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Heading
          color={'purple.100'}
          paddingY="2vh"
          fontFamily="'Tektur', monospace"
          fontSize='2em'
        >
          IGNIS
        </Heading>
        <Flex 
          as='nav'
          wrap="wrap"
          justifyContent="center"
          paddingX="1vw"
          paddingTop={2}
          paddingBottom={4}
          gap={2}
        >
          <RegisterForm/>
          <LoginForm/>
          <HeaderButton
            onClick={signout}
            title="Log out"
            isHidden={!user}
          />
          <PhoneForm/>
          <InterestPointForm/>
          <HeaderButton
            onClick={() => setShowDashboard(!showDashboard)}
            title={showDashboard ? "Back Home" : "Dashboard"}
            isHidden={!user}
          />
        </Flex>
      </Flex>
      <Flex maxH={"60%"}>
        { !showDashboard && <Flex>Project description goes here</Flex>}
        { showDashboard && <Dashboard/>}
      </Flex>
    </Flex>
  )
}

export default App
