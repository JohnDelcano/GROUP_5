import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSRrlZZK-2gr97FkYx9kVkMfwPdyuVOOA",
    authDomain: "fir-integration-react.firebaseapp.com",
    projectId: "fir-integration-react",
    storageBucket: "fir-integration-react.appspot.com",
    messagingSenderId: "902088203044",
    appId: "1:902088203044:web:a268055ea9e2b05bbf31b1",
    measurementId: "G-3BVJJ3GEWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, { 
    persistence: getReactNativePersistence(ReactNativeAsyncStorage) 
});

export { app, auth };
