import { useToast } from "@chakra-ui/toast";
import { doc,setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import { useAuth } from "../providers/AuthProvider";

const phoneActions = ()=>{
  const toast = useToast()
  const {user} = useAuth()
  const addPhone = async (phoneNumber)=>{

    try{

      if(!user?.uid) throw "Login Required"
      await setDoc(doc(db,"phones",user.uid),{
        phone: phoneNumber
      })
      toast({
        title: 'Done',
        description: "Phone created",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }catch(e){
      throw e
    }
  }
  return { addPhone }
}

export default phoneActions