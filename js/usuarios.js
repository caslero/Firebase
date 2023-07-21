//alert('hola')

import { guardarTareas, getTareas} from './firebase.js'
let tar = '';

   




let agregarTarea = document.getElementById('agregarTarea');

agregarTarea.addEventListener('submit', (e) => {
    e.preventDefault();
   
    let nombre = agregarTarea['input'].value;
    guardarTareas(nombre);   
});

window.addEventListener('DOMContentLoaded', async () => {
    let mostrarT = await getTareas();
    
    mostrarT.forEach(doc => {
     console.log(doc.data());
     tar = tar + `${doc.data().nombre}<br>`;
    });
    document.getElementById('mostrarTareas').innerHTML = `${tar}`;
    
});



let salirSistema = document.getElementById('salirSistema');

salirSistema.addEventListener('click', logout);




function logout() {    
    history.forward()
    window.location.href = "index.html";
}











    //console.log(conectarUsuarios);

// conectarUsuarios.forEach(doc => {
//     //console.log(doc.data().nombre);
//     console.log(conectarUsuarios);
//     //console.log('Bienvenido: ' + doc.data().nombre);
//     let usuarioAct = document.getElementById('usuarioAct');
//     usuarioAct.innerHTML = doc.data().nombre;
// });

 



