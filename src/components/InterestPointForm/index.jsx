import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks"
import { Input } from "@chakra-ui/input";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/modal"
import { useState } from "react";
import interestPointActions from "../../actions/insterestPoint";
import { useToast } from "@chakra-ui/toast";


const InterestPointForm = () =>{
  const {isOpen,onOpen,onClose} = useDisclosure();
  const {addInterestPoint} = interestPointActions()
  const toast = useToast()

  const [label,setLabel] = useState("")
  const [lat,setLat] = useState("")
  const [lng,setLng] = useState("")
  const [radius,setRadius] = useState("")
  

  

  const handleAddInterestPoint = async()=>{

    if(label == "") return
    if(isNaN(lat) || isNaN(lng) || isNaN(radius)) return

    try{
      const interestPoint = {
        label:label,
        lat:lat,
        lng:lng,
        radius:radius
      }
      await addInterestPoint(interestPoint)
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
      <Button onClick={onOpen}>
        Set interest point
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Label</FormLabel>
              <Input
                type="text"
                onChange={(e)=> setLabel(e.target.value)}
                value={label}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Latitude</FormLabel>
              <Input
                type="number"
                onChange={(e)=> setLat(parseFloat(e.target.value) || "")}
                value={lat === "0" ? "" : lat}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Longitude</FormLabel>
              <Input
                type="number"
                onChange={(e)=> setLng(parseFloat(e.target.value) || "")}
                value={lng === "0" ? "" : lng}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Radius</FormLabel>
              <Input
                type="number"
                onChange={(e)=> setRadius(parseFloat(e.target.value) || "")}
                value={radius === "0" ? "" : radius}
              />
            </FormControl>
            
          </ModalBody>

          <ModalFooter display="flex" flexDirection="column" gap="2" mt="4">
            <Button colorScheme="blue" w="60%" onClick={handleAddInterestPoint}>Set point</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </>
  )
}

export default InterestPointForm