//alert('hola')

import { guardarUsuario, getUsuarios} from './firebase.js'

// window.addEventListener('DOMContentLoaded', async () => {
// //    let conectarUsuarios = await getUsuarios();

// //    conectarUsuarios.forEach(doc => {
// //     console.log(doc.data());
// //    });

// });

let registrarUsuario = document.getElementById('registrarUsuario');

registrarUsuario.addEventListener('submit', (e) => {
    e.preventDefault();
   
    let nombre = registrarUsuario['nombreUsuario'].value;
    let correo = registrarUsuario['correoUsuario'].value;
    let clave = registrarUsuario['claveUsuario'].value;

  

    guardarUsuario(nombre, correo, clave);

    //location = 'login.html'
});

















//   firebase.initializeApp(firebaseConfig);
//   let carlosdb = firebase.database().ref('carlos');

// let dia = document.getElementById('dia');
// let mes = document.getElementById('mes');
// let year = document.getElementById('year');
// let semana = document.getElementById('semana');

// function cargarBody() {
//     let date = new Date();
//     let myMes = date.toLocaleString('default', { month: 'long'});
//     let myDate = date.getDate();
//     let years = date.getFullYear();
//     let dias = date.toLocaleString('default', { weekday: 'long'});

 
//     dia.innerText = myDate;
//     mes.innerText = myMes;
//     year.innerText = years;
//     semana.innerText = dias;
// }



// registrarUsuario.addEventListener('submit', e => {
//     e.preventDefault();

//     let nombreUsuario = registrarUsuario['nombreUsuario'].value;
//     let correoUsuario = registrarUsuario['correoUsuario'].value;
//     let claveUsuario = registrarUsuario['claveUsuario'].value;

//     //console.log(nombreUsuario, correoUsuario, claveUsuario);

//     registrarUsuario.reset();

//     auth.crearUsuario(correoUsuario, claveUsuario).then((cred) => {
//         return db.collection('users').doc(cred.user.uid).set({
//             Nombre: nombreUsuario,
//             Correo: correoUsuario,
//             Clave: claveUsuario
//         }).then(() => {
//             console.log('Success');
//             location = "tareas/login.html";
//         }).catch(err => {
//             console.log(err.message);
//             //Faltan datos x hacer en esta parte
//         }).catch(err => {
//             console.log(err.message);
//             //Faltan datos x hacer en esta parte
//         })
//     })
   
// })






