import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  //SAE (DO NOT USE THIS FOR TESTING - ONLY DEPLOYEMENT)
  apiKey: "AIzaSyAw99i_BGoXy4tM-tyM-zpFRXH6uZhHD0U",
  authDomain: "autokriti-ambassadors-2022.firebaseapp.com",
  projectId: "autokriti-ambassadors-2022",
  storageBucket: "autokriti-ambassadors-2022.appspot.com",
  messagingSenderId: "1064644738570",
  appId: "1:1064644738570:web:fc0e1fe0cdbd62e5c829f3"

  //Kritika
  // apiKey: "AIzaSyAfJTGsx3HsGeJlkIeSTf_VsrlgEw2pfrY",
  // authDomain: "sae-website-127b1.firebaseapp.com",
  // projectId: "sae-website-127b1",
  // storageBucket: "sae-website-127b1.appspot.com",
  // messagingSenderId: "636129718123",
  // appId: "1:636129718123:web:555343dd6f0255ecbe262e",
  // measurementId: "G-BHECE0F8CX"

  // SAE TESTER
  //  apiKey: "AIzaSyAfGWoUlOwoP5PHuRy4FP9Ic1w1YxY2uFA",
  //  authDomain: "saenitkkrforms.firebaseapp.com",
  //  projectId: "saenitkkrforms",
  //  storageBucket: "saenitkkrforms.appspot.com",
  //  messagingSenderId: "248727434698",
  //  appId: "1:248727434698:web:0f5498ae740f9ff9738b33",
  //  measurementId: "G-PXQ86P5ZPQ"

  //Arnav
  // apiKey: "AIzaSyAfGWoUlOwoP5PHuRy4FP9Ic1w1YxY2uFA",
  // authDomain: "saenitkkrforms.firebaseapp.com",
  // projectId: "saenitkkrforms",
  // storageBucket: "saenitkkrforms.appspot.com",
  // messagingSenderId: "248727434698",
  // appId: "1:248727434698:web:0f5498ae740f9ff9738b33",
  // measurementId: "G-PXQ86P5ZPQ"
};


//SECOND & THIRD DATABASE TESTING CODE
// const secondaryAppConfig = {
//   apiKey: "AIzaSyB4Jc4WaodayF72BuXcQCLAkA9lgv_hmT0",
//   authDomain: "sae-task.firebaseapp.com",
//   projectId: "sae-task",
//   storageBucket: "sae-task.appspot.com",
//   messagingSenderId: "512382391053",
//   appId: "1:512382391053:web:8418ffe15ed0715cfd1644",
//   measurementId: "G-RK7TYZL6VQ"
// }
// const terAppConfig = {
//   apiKey: "AIzaSyAfJTGsx3HsGeJlkIeSTf_VsrlgEw2pfrY",
//    authDomain: "sae-website-127b1.firebaseapp.com",
//    projectId: "sae-website-127b1",
//    storageBucket: "sae-website-127b1.appspot.com",
//    messagingSenderId: "636129718123",
//    appId: "1:636129718123:web:555343dd6f0255ecbe262e",
//    measurementId: "G-BHECE0F8CX"
// }

const firebaseApp = initializeApp(firebaseConfig);
// const secondaryApp = initializeApp(secondaryAppConfig, "secondary");
// const thirdApp = initializeApp(terAppConfig, "ternary");

const db = getFirestore(firebaseApp);
// const db1 = getFirestore(secondaryApp);
// const db2 = getFirestore(thirdApp);

export default db;
// export {db1, db2};

