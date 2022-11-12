import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updatePassword,
    reauthenticateWithCredential,
    EmailAuthProvider,
} from "firebase/auth";
import { auth, db } from "../firebase-config";
import { addDoc, collection, serverTimestamp, getFirestore, doc, setDoc } from "firebase/firestore";

import { setUserState } from "../actions";

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const createUser = ( email, password ) => {
        return createUserWithEmailAndPassword(auth, email, password);
    } 
    const createUserToFirestore = (fullname, email, address, contact, newUser) => {
         const userCollectionRef = collection(db, 'users');
         return addDoc(userCollectionRef, {
           id: newUser.user.uid,
           fullname: fullname,
           email: email,
           address: address,
           contact: contact,
           createdAt: serverTimestamp(),
       });
    } 
    const loginUser = ( email, password ) => {
        return signInWithEmailAndPassword(auth, email, password);
    } 
    const logoutUser = () => { return signOut(auth);} 

    const updateProfile = (password, number,  passwordConfirm, profileId, user) => {
        const reAuthUser = auth.currentUser;
            const cred = EmailAuthProvider.credential(reAuthUser.email, password);
            reauthenticateWithCredential(reAuthUser, cred)
                .then(() => {
                    updatePassword(reAuthUser, passwordConfirm);
                    alert("Password and Contact Updated Successfully");
                    const docRef = doc(db, "users", profileId);
                    const data = {
                        contact: number,
                      };
                    setDoc(docRef, data, { merge:true })
                }).catch((error) => {
                   alert(error.message);
                });
    }
    return (
        <UserContext.Provider value={{
                                        createUser, user, createUserToFirestore, 
                                        loginUser, logoutUser, updateProfile}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext);
}