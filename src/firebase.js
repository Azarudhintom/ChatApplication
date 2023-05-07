// import { initializeApp } from "firebase/app";
// 
// const firebaseConfig = {
//   apiKey: "AIzaSyApQ5P1lZIf-UqAymbaJAGNM8EWnxh3CAM",
//   authDomain: "chat-application-c5788.firebaseapp.com",
//   projectId: "chat-application-c5788",
//   storageBucket: "chat-application-c5788.appspot.com",
//   messagingSenderId: "994221682360",
//   appId: "1:994221682360:web:642b558d2e27c5d5b48e4d"
// };

// export const app = initializeApp(firebaseConfig);


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW96ED_9s1AbmZEPq2uEbA-Kro1OVSUTU",
  authDomain: "chatappliaction-ef7dc.firebaseapp.com",
  projectId: "chatappliaction-ef7dc",
  storageBucket: "chatappliaction-ef7dc.appspot.com",
  messagingSenderId: "56979650114",
  appId: "1:56979650114:web:41820609d3258ff54cdfdb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()