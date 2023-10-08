import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks"
import { Input } from "@chakra-ui/input";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/modal"
import authActions from '../../actions/auth';
import { Text } from "@chakra-ui/layout";
import { HeaderButton } from "../HeaderButton";


const RegisterForm = () =>{
  const {isOpen,onOpen,onClose} = useDisclosure();
  const {
    signUpEmail,
    setSignUpEmail,
    signUpPassword,
    setSignUpPassword,
    authError,
    handleSignUp
  } = authActions()

  return(
    <>
      <HeaderButton
          onClick={onOpen}
          title="Sign Up"
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>SIGN UP</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                onChange={(e)=> setSignUpEmail(e.target.value)}
                value={signUpEmail}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e)=> setSignUpPassword(e.target.value)}
                value={signUpPassword}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter display="flex" flexDirection="column" gap="2" mt="4">
            <Button colorScheme="blue" w="60%" onClick={(e)=> {
              handleSignUp("email")
              onClose()
            }}>Sign Up</Button>
            <Text>or</Text>
            <Button w="60%" onClick={()=>{
              handleSignUp("guest")
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

export default RegisterForm