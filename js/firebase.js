// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js"

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyD1FccOQV7HZ-X7sW-dOVMZCxXtQG_mD6U",

  authDomain: "carlosdb-f4722.firebaseapp.com",

  projectId: "carlosdb-f4722",

  storageBucket: "carlosdb-f4722.appspot.com",

  messagingSenderId: "777391262124",

  appId: "1:777391262124:web:fcca075229fbe1a2055209"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


let db = getFirestore();

export let guardarUsuario = (nombre, correo, clave) => 
   
    addDoc(collection(db, 'usuarios'), {nombre, correo, clave});

export let getUsuarios = () => getDocs(collection(db, 'usuarios'))



export let guardarTareas = (nombre) => 
   
    addDoc(collection(db, 'Tareas'), {nombre});

export let getTareas = () => getDocs(collection(db, 'Tareas'))