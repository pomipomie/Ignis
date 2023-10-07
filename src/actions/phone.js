import { useToast } from "@chakra-ui/toast";
import { addDoc, doc,setDoc,collection, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config.Js";
import { useAuth } from "../providers/AuthProvider";

const phoneActions = ()=>{
  const toast = useToast()
  const {user} = useAuth()
  const addPhone = async (phoneNumber)=>{

    try{

      if(!user?.uid) throw "no user id"
      await setDoc(doc(db,"phones",user.uid),{
        phone: phoneNumber
      })
      toast({
        title: 'Phone created.',
        description: "Done",
        status: 'success',
        duration: 9000,
        isClosable: true,

      })
    }catch(e){
      throw (e)
    }
  }
  return { addPhone }
}

export default phoneActions