import { collection, addDoc, getFirestore } from "firebase/firestore"; 
import app from "./firebase.js";

const db = getFirestore(app);

const addBlog = async (id, tag, data) => {
    try {
        const docRef = await addDoc(collection(db, "blogs"), {
            userId: id,
            tag: tag,
            content: data, 
            timestamp: new Date(), 
        });
      
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export { addBlog };
