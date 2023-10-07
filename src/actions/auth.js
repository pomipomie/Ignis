import axios from "axios";

async function withEmailAndPassword(){
  try{
    const response = axios.post("");
  } catch(e){
    throw e;
  }
}

async function anonimous(){
  try{
    const response = axios.post("");

  }catch(e){
    throw e;
  }
}

const AuthActions = {
  withEmailAndPassword,
  anonimous,
};

export default AuthActions;