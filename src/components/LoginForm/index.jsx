import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks"
import { Input } from "@chakra-ui/input";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/modal"
import authActions from '../../actions/auth';
import { Text } from "@chakra-ui/layout";


const LoginForm = () =>{
  const {isOpen,onOpen,onClose} = useDisclosure();
  const {
    signInEmail,
    setSignInEmail,
    signInPassword,
    setSignInPassword,
    authError,
    handleSignIn
  } = authActions()

  return(
    <>
      <Button onClick={onOpen}>
        Login
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>LOGIN</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                onChange={(e)=> setSignInEmail(e.target.value)}
                value={signInEmail}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e)=> setSignInPassword(e.target.value)}
                value={signInPassword}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter display="flex" flexDirection="column" gap="2" mt="4">
            <Button colorScheme="blue" w="60%" onClick={(e)=> {
              handleSignIn("email")
              onClose()
            }}>Login</Button>
            <Text>or</Text>
            <Button w="60%" onClick={()=>{
              handleSignIn("guest")
              onClose()
            }}>
              continue as a guest
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </>
  )
}

export default LoginForm