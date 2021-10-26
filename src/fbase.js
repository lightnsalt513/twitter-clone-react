import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider, 
  signInWithPopup, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore, 
  collection, 
  onSnapshot, 
  query, 
  orderBy, 
  doc,
  addDoc,
  deleteDoc, 
  updateDoc } from "firebase/firestore";
import { 
  getStorage, 
  ref, 
  deleteObject,
  uploadString,
  getDownloadURL } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore();
const storage = getStorage(firebaseApp);

export {
  firebaseApp,
  auth,
  db,
  storage,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
}

export {
  collection, 
  onSnapshot, 
  query, 
  orderBy,
  doc,
  addDoc,
  deleteDoc, 
  updateDoc
}

export {
  ref, 
  deleteObject,
  uploadString,
  getDownloadURL,
}