import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB7jTwiQtmTIoGymVRgJ7_8eipynTkhi5w",
  authDomain: "pcl-project-4d6ac.firebaseapp.com",
  databaseURL: "https://pcl-project-4d6ac-default-rtdb.firebaseio.com",
  projectId: "pcl-project-4d6ac",
  storageBucket: "pcl-project-4d6ac.appspot.com",
  messagingSenderId: "249216920887",
  appId: "1:249216920887:web:eb8745cc439e8fcac5beb2",
  measurementId: "G-BLFMTT0HW5"
};

const app = initializeApp(firebaseConfig);

export default firebaseConfig;