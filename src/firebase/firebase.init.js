

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlrvKpgkVNm8bpTID-S7x9NYguihVCetU",
  authDomain: "coffee-store-app-c586b.firebaseapp.com",
  projectId: "coffee-store-app-c586b",
  storageBucket: "coffee-store-app-c586b.firebasestorage.app",
  messagingSenderId: "178555163837",
  appId: "1:178555163837:web:f8b5deab9f49feb97353d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);