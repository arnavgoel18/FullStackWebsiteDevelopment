import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: "AIzaSyAw99i_BGoXy4tM-tyM-zpFRXH6uZhHD0U",
  // authDomain: "autokriti-ambassadors-2022.firebaseapp.com",
  // projectId: "autokriti-ambassadors-2022",
  // storageBucket: "autokriti-ambassadors-2022.appspot.com",
  // messagingSenderId: "1064644738570",
  // appId: "1:1064644738570:web:fc0e1fe0cdbd62e5c829f3",

  apiKey: "AIzaSyAfJTGsx3HsGeJlkIeSTf_VsrlgEw2pfrY",
  authDomain: "sae-website-127b1.firebaseapp.com",
  projectId: "sae-website-127b1",
  storageBucket: "sae-website-127b1.appspot.com",
  messagingSenderId: "636129718123",
  appId: "1:636129718123:web:555343dd6f0255ecbe262e",
  measurementId: "G-BHECE0F8CX"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;
