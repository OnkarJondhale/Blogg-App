import { getAuth } from "firebase/auth";
import  app  from "./firebase.js";

const auth = getAuth(app);

const getCurrentUser = ()=>
{
    const user = auth.currentUser;

    if (user) {
        // console.log("User is signed in:");
        // console.log("UID:", user.uid);
        // console.log("Email:", user.email);
        return { id : user.uid , email : user.email};
    } else {
    // console.log("No user is signed in.");
    return null;
    }
}


export {getCurrentUser}