import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updatePassword,
    reauthenticateWithCredential,
    EmailAuthProvider,
} from "firebase/auth";
import { auth, db } from "../firebase-config";
import { addDoc, collection, serverTimestamp, getFirestore, doc, setDoc } from "firebase/firestore";

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
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
    const createCustomerToFirestore = (fullname, email, address, contact, newUser) => {
        const userCollectionRef = collection(db, 'customers');
        return addDoc(userCollectionRef, {
          id: newUser.user.uid,
          fullname: fullname,
          email: email,
          address: address,
          contact: contact,
          approve: false,
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
    const updateCustomerProfile = (password, number,  passwordConfirm, profileId, user) => {
        const reAuthUser = auth.currentUser;
            const cred = EmailAuthProvider.credential(reAuthUser.email, password);
            reauthenticateWithCredential(reAuthUser, cred)
                .then(() => {
                    updatePassword(reAuthUser, passwordConfirm);
                    alert("Password and Contact Updated Successfully");
                    const docRef = doc(db, "customers", profileId);
                    const data = {
                        contact: number,
                      };
                    setDoc(docRef, data, { merge:true })
                }).catch((error) => {
                   alert(error.message);
                });
    }

    const approveCustomer = (id) => {
            const docRef = doc(db, "customers", id);
            const data = {
                approve: true,
                };
            setDoc(docRef, data, { merge:true })
    }
    const saveCustomerBill = (id, addCustomerBill, selectedDate, meterReading) => {
            const docRef = doc(db, "customers", id);
            const data = {
                bill: addCustomerBill,
                dueDate: selectedDate,
                meterReading: meterReading,
                };
            setDoc(docRef, data, { merge:true })
    }
    return (
        <UserContext.Provider value={{
                                        createUser, createUserToFirestore, 
                                        loginUser, logoutUser, updateProfile,
                                        createCustomerToFirestore, updateCustomerProfile,
                                        approveCustomer, saveCustomerBill}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext);
}