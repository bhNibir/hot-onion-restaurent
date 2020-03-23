import React from 'react';
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../../firebase.config';

firebase.initializeApp(firebaseConfig);

const useAuth = () => {
    return (
        <div>
            
        </div>
    );
};

export default useAuth;