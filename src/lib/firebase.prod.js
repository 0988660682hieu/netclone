import Firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";

//import { seedDatabase } from "../seed";

// config here
const config = {
  apiKey: "AIzaSyBbU78QY_l8fzZklay7mr3iHVNWZenqeT4",
  authDomain: "netflix-d1d06.firebaseapp.com",
  projectId: "netflix-d1d06",
  storageBucket: "netflix-d1d06.appspot.com",
  messagingSenderId: "73183003620",
  appId: "1:73183003620:web:8308bc09673120f5617df1",
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
