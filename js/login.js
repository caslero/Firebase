
import { getUsuarios} from './firebase.js'

let entrarSistema = document.getElementById('entrarSistema');
let conectarUsuarios = await getUsuarios();


let datosErrados = document.getElementById('datosErrados');

entrarSistema.addEventListener('submit', asa);

function asa(e) {
    e.preventDefault();

   
    let correo = entrarSistema['entrarCorreo'].value;
    let clave = entrarSistema['entrarClave'].value;
    //console.log(correo, clave);
    let uCorrecto = '';
    let cCorrecto = '';
    let nCorrecto = '';

    conectarUsuarios.forEach(doc => {

        uCorrecto = doc.data().correo;
        cCorrecto = doc.data().clave;
        nCorrecto = doc.data().nombre;
       
        if (correo ===  uCorrecto  && clave === cCorrecto  ) {
            //console.log('Bienvenido: ' + doc.data().nombre);
            location = "usuarios.html";
                 
            datosErrados.classList.add('hidden');       
            
        } else {
            datosErrados.innerHTML = 'Datos Errados'
            setTimeout(() => {
                //window.location.href = "../usuarios/login.html";
                datosErrados.innerHTML = ''   
            }, 3000);
        }
    });
    getUsuarios(correo, clave);

}


