import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDkz9T7MivF0AvqiFAxXBrg4yaQHhapxo0",
  authDomain: "jennifer-padnick.firebaseapp.com",
  projectId: "jennifer-padnick",
  storageBucket: "jennifer-padnick.firebasestorage.app",
  messagingSenderId: "562453934337",
  appId: "1:562453934337:web:5a172aedd0edc70c1f6b00"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);