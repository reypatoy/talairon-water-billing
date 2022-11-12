import { auth, db } from "../firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';

import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
  } from "firebase/auth";
  

const userProfileReducer = (state = null, action) => {
    switch (action.type) {
        case 'REGISTER':
            createUserWithEmailAndPassword(auth, action.payload.email, action.payload.password)
            .then(async (user) => {
                const userCollectionRef = collection(db, 'users');
                 await addDoc(userCollectionRef, {
                    id: user.user.uid,
                    fullname: action.payload.fullname,
                    email: action.payload.email,
                    address: action.payload.address,
                    contact: action.payload.contact,
                    createdAt: serverTimestamp(),
                });
                state = user;
                window.localStorage.setItem('user', JSON.stringify(user));
            })
            .catch((err) => {
                state = null;
                alert(err.message);
            });
            return state;
        case 'GET_USER_PROFILE':
            signInWithEmailAndPassword(auth, action.payload.email, action.payload.password)
            .then((user) => {
                    state = user;
                    window.localStorage.setItem('user', JSON.stringify(user));
            })
            .catch((error) => {
                state = null;
            })
            return state;
        case 'SET_USER':
            return state =  action.payload;
        case 'LOGOUT':
            auth.signOut();
            window.localStorage.clear();
            state = null;
            return state;
        default:
            return state;
    }
};

export default userProfileReducer;