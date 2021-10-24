import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAInWXzEI9B1j7IB-Cm_pamw4lFcFSXgdg",
    authDomain: "fir-react-e28ea.firebaseapp.com",
    projectId: "fir-react-e28ea",
    storageBucket: "fir-react-e28ea.appspot.com",
    messagingSenderId: "592851212305",
    appId: "1:592851212305:web:c8bc065a3faf85a4f779b0"
  };


  const app = initializeApp(firebaseConfig);

  export default app;