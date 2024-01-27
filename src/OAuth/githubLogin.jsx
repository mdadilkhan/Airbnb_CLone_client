import { GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { URL } from "../../config";

const handleGithubLogin = () => {
  alert("github")
  const provider = new GithubAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      console.log("credntial", credential);
      const token = credential.accessToken;
      console.log("token", token);

      // The signed-in user info.
      const user = result.user;
      console.log("user>>", user);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
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
