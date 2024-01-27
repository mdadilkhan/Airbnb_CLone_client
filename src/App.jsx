import Navbar from "./components/Navbar";
import RegisterModal from "./components/RegisterModal";
import LoginModal from "./components/LoginModal";
import ToasterProvider from "./providers/ToasterProvider";
import axios from "axios";
import { URL } from "../config";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getUserDetialsStart,
  getUserDetialsSuccess,
  getUSerDetialsFailure,
} from "./redux/slices/userDetailsSlice";

// bewlow line is the most important thing when u store token in httponly:true secure:true other wise axios will include cokkie in every response
axios.defaults.withCredentials = true;

const App = () => {
  const dispatch = useDispatch();
  const getUserDetails = () => {
    axios
      .get(`${URL}/getUserDetials`)
      .then((res) => {
        // setUser(res.data.data);
        dispatch(getUserDetialsStart());
        console.log(res.data.data);
        if (res.status === 200) {
          dispatch(getUserDetialsSuccess(res.data.data));
        }
      })
      .catch((error) => {
        dispatch(getUSerDetialsFailure(error));
        console.log(error);
      });
  };

  useEffect(() => {
    getUserDetails();
  });

  return (
    <>
      <ToasterProvider />
      <RegisterModal />
      <LoginModal />
      <Navbar />
    </>
  );
};

export default App;
