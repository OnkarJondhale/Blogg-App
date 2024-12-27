import { collection, getDocs, getFirestore } from "firebase/firestore"; 
import app from "./firebase.js";

const db = getFirestore(app);

const getAllBlogs = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogs = [];
        querySnapshot.forEach((doc) => {
            blogs.push(doc.data());
        });
        return blogs;
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

export { getAllBlogs }
