import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks"
import { Input } from "@chakra-ui/input";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/modal"
import phoneActions from "../../actions/phone";
import { useState } from "react";
import { useToast } from "@chakra-ui/toast";


const PhoneForm = () =>{
  const {isOpen,onOpen,onClose} = useDisclosure();
  const {
    addPhone
  } = phoneActions()

  const [phone,setPhone] = useState("")
  const toast = useToast()

  const handleAddPhone = async ()=>{
    if(phone[0] !== "+"){
      return toast({
        title: 'Error.',
          description: "Phone number invalid",
          status: 'error',
          duration: 9000,
          isClosable: true,
      })
    }
    try{
      await addPhone(phone.replace(" ",""))
      setPhone("")
      onClose()
    }catch(e){
      toast({
        title: 'Error.',
          description: e,
          status: 'error',
          duration: 9000,
          isClosable: true,
      })
    }
  }

  return(
    <>
      <Button onClick={onOpen} mt="8">
        Set Phone
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader></ModalHeader>
          <ModalBody>
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input
                placeholder="+1 XXXXXXXXXX"
                type="text"
                onChange={(e)=> setPhone(e.target.value.trimStart().replace(/[a-zA-Z]/g,"").replace(/\s+/g, " "))}
                value={phone}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter display="flex" flexDirection="column" gap="2" mt="4">
            <Button colorScheme="blue" w="60%" onClick={(e)=> handleAddPhone()}>Set Phone</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </>
  )
}

export default PhoneForm
