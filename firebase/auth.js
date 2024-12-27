import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore"; 
import {  signInWithEmailAndPassword } from "firebase/auth";

import  app  from "./firebase.js";

const auth = getAuth(app);
const db = getFirestore(app); 

const createUser = (email, password, username) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
        console.log("user created");
        const docRef = await addDoc(collection(db, "users"), {
            username: username,
            userId: userCredential.user.uid,
            blog : [],
            comment : [],
            community : [],
            wayOfLogin : 2
        });
    })
    .catch((error) => {
        console.log(error.message);
    });
}

const loginUser = (email,password) => {
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log("User logged in");
  })
  .catch((error) => {
    console.log(error.message);
  });
}

export { createUser , loginUser };
