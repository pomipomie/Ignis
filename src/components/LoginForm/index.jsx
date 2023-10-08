import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks"
import { Input } from "@chakra-ui/input";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/modal"
import authActions from '../../actions/auth';
import { Text } from "@chakra-ui/layout";
import { HeaderButton } from "../HeaderButton";
import { useToast } from "@chakra-ui/toast";
import { useAuth } from "../../providers/AuthProvider";


const LoginForm = () =>{
  const {isOpen,onOpen,onClose} = useDisclosure();
  const {
    signInEmail,
    setSignInEmail,
    signInPassword,
    setSignInPassword,
    handleSignIn
  } = authActions()
  const toast = useToast()
  const {user} = useAuth()

  const handleError = (message)=>{
    return toast({
      title: 'Error.',
      description: message,
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
  }

  const handleClose = ()=>{
    setSignInEmail("")
    setSignInPassword("")
    onClose()
  }

  const handleLogin = async (type)=>{

    if(type === "email"){
      if(signInEmail === "") return 
      if(signInPassword === "") return 
    }

    try{
      await handleSignIn(type)
      toast({
        title: 'Done',
        description: "Login success",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      handleClose()
    }catch(e){
      handleError(e?.message)
    }
  }

  return(
    <>
      <HeaderButton
          isHidden={user}
          onClick={onOpen}
          title="Login"
      />
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>LOGIN</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                onChange={(e)=> setSignInEmail(e.target.value)}
                value={signInEmail}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e)=> setSignInPassword(e.target.value)}
                value={signInPassword}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter display="flex" flexDirection="column" gap="2" mt="4">
            <Button colorScheme="blue" w="60%" onClick={()=> handleLogin("email")}>Login</Button>
            <Text>or</Text>
            <Button w="60%" onClick={()=> handleLogin("guest")}>
              continue as a guest
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </>
  )
}

export default LoginForm