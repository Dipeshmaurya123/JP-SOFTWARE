import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "dipsumaurya-6ad46.firebaseapp.com",
  projectId: "dipsumaurya-6ad46",
  databaseURL: "https://dipsumaurya-6ad46-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);