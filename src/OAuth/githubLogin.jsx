import { GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { URL } from "../../config";
import axios from "axios";
import toast from "react-hot-toast";

const handleGithubLogin = () => {
  const provider = new GithubAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      console.log("credntial", credential);
      const token = credential.accessToken;
      console.log("token", token);
      const data={
        email:result.user.email,
        name:result.user.displayName
      }
      console.log(result.user.displayName,result.user.email,result.user.photoURL);
      axios.post(`${URL}/githubSignin`,data).then((res)=>{
        if(res.status===200){
          window.location.reload();
          console.log(res.data);
          toast.success("Login successful")
        }
      }).catch((error)=>{
        console.log(error);
      })
    })
    .catch((error) => {
      // Handle Errors here.

      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      console.log("credential>>>",credential);
      // ...
    });
};

export default handleGithubLogin;
