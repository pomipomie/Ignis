import { useToast } from "@chakra-ui/toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase.config.Js";
import { useAuth } from "../providers/AuthProvider";


const interestPointActions = ()=>{

  const toast = useToast()
  const {user} = useAuth()

  const addInterestPoint = async (payload)=>{
    try{

      if(!user?.uid) throw "Login Required"
      await addDoc(collection(db,"interestPoints"),{...payload,userId:user.uid})
      toast({
        title: 'Done',
        description: "Point created",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }catch(e){
      throw e
    }
  }

  return {addInterestPoint}
}

export default interestPointActions