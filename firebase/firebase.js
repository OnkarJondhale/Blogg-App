import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBw2Hm0AGnVRfcXc9C9HmBZQ4kwNhYQcoQ",
  authDomain: "blogg-app-1bdf0.firebaseapp.com",
  projectId: "blogg-app-1bdf0",
  storageBucket: "blogg-app-1bdf0.firebasestorage.app",
  messagingSenderId: "778817674530",
  appId: "1:778817674530:web:668074d5c2f147b66f197b"
};

const app = initializeApp(firebaseConfig);

export default app;