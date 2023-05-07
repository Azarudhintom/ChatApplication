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
const firebaseConfig = {
  apiKey: "AIzaSyCHuxhuTBpvOgvBQ7Mf0Fag7sab9ipx_FY",
  authDomain: "chatappliaction-f64d3.firebaseapp.com",
  projectId: "chatappliaction-f64d3",
  storageBucket: "chatappliaction-f64d3.appspot.com",
  messagingSenderId: "298516451814",
  appId: "1:298516451814:web:81d22a4c8984910214c627"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()