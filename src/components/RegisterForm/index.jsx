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

const RegisterForm = () =>{
  const {isOpen,onOpen,onClose} = useDisclosure();
  const toast = useToast()
  const {user} = useAuth()

  const {
    signUpEmail,
    setSignUpEmail,
    signUpPassword,
    setSignUpPassword,
    handleSignUp
  } = authActions()
  
  const handleError = (message)=>{
    return toast({
      title: 'Error.',
      description: message,
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
  }

  const handleRegister = async (type)=>{

    if(type === "email"){
      if(signUpEmail == "") return 
      if(signUpPassword == "") return 
    }

    try{
      await handleSignUp(type)
      toast({
        title: 'Done',
        description: "Signup success",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      onClose();
      setSignUpEmail("")
      setSignUpPassword("")
    }catch(e){
      handleError(e?.message)
    }
  }

  return(
    <>
      <HeaderButton
          isHidden={user}
          onClick={onOpen}
          title="Sign Up"
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>SIGN UP</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                onChange={(e)=> setSignUpEmail(e.target.value)}
                value={signUpEmail}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e)=> setSignUpPassword(e.target.value)}
                value={signUpPassword}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter display="flex" flexDirection="column" gap="2" mt="4">
            <Button colorScheme="blue" w="60%" onClick={()=> handleRegister("email")}>Sign Up</Button>
            <Text>or</Text>
            <Button w="60%" onClick={()=> handleRegister("guest")}>
              continue as a guest
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </>
  )
}

export default RegisterForm