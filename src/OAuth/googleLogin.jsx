import {GoogleAuthProvider, signInWithPopup,getAuth } from 'firebase/auth'
import { app } from '../firebase';
import { URL } from '../../config';
import axios from 'axios';
import toast from 'react-hot-toast';

  const handleGoogleLogin=async()=>{
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      console.log(result);
      const data={
        email:result.user.email,
        name:result.user.displayName
      }
      console.log(result.user.displayName,result.user.email,result.user.photoURL);
      axios.post(`${URL}/googleSignin`,data).then((res)=>{
        if(res.status===200){
          window.location.reload();
          console.log(res.data);
          toast.success("Login successful")
        }
       
      }).catch((error)=>{
        console.log(error);
      })
    } catch (error) {
      console.log("Could not login wit google",error);
    }
  }


export default handleGoogleLogin