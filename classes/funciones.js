import Citas from "./classes/Citas";
import UI from "./classes/InterfazUsuario";
import {mascotaInput, 
    propietarioInput, 
    razaInput, 
    telefonoInput,
    horaInput,
    sintomasInput, 
    formulario} from './selectores.js';

const ui = new UI();
const administrarCitas = new Citas();

let editando;

// Objeto Principal
const citaObj = {
    mascota: '',
    raza: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

// Agregar los datos al objeto
export function datosCitas(e){
    citaObj[e.target.name] = e.target.value;
}

export function nuevaCita(e){
    e.preventDefault();

    const {mascota,raza,propietario,telefono,fecha,hora,sintomas} = citaObj;

    if(mascota === '' || raza === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === ''){
        ui.imprimirAlerta('Todos los campos son obligatorios','error');

        return;
    }

    if(editando){
        ui.imprimirAlerta('Actualizando...');

        setTimeout(() => {
            alert('La cita se ha actualizado correctamente');
        }, 4000);

        administrarCitas.editarCita({...citaObj});

        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';
        contenedorCitas.style.display = 'block';
        titulo.style.display = 'block';
        titulo.innerHTML = 'Administra tus Citas'

        editando = false;


    } else {
        // Generar Id para el objeto cita
        citaObj.id = Date.now();

        administrarCitas.agregarCita({...citaObj});

        ui.imprimirAlerta('Agregando...');

        setTimeout(() => {
            alert("La cita se ha agregado correctamente")
        }, 4000);
    }

    

    reiniciarObjeto();

    formulario.reset();

    // Mostrar HTML
    ui.imprimirCitas(administrarCitas);
}

export function reiniciarObjeto(){
    citaObj.mascota = '';
    citaObj.raza = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';    
}

export function eliminarCita(id){
    // Eliminar Cita
    administrarCitas.eliminarCita(id);

    // Mensaje en Pantalla
    ui.imprimirAlerta('Eliminando...');

    setTimeout(() => {
        alert('La cita se ha eliminado correctamente');
    }, 4000);

    // Refrescar las citas
    ui.imprimirCitas(administrarCitas);
}

// Cargar modo edicion
export function cargarEdicion(cita){
    const {mascota,raza,propietario,telefono,fecha,hora,sintomas, id} = cita;

    //Llenar inputs
    mascotaInput.value = mascota;
    razaInput.value = raza;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    // Llenar el objeto
    citaObj.mascota = mascota;
    citaObj.raza = raza;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;


    // Cambiar el texto del boton Agregar cita
    formulario.querySelector('button[type="submit"]').textContent = 'Confirmar Cambios';
    contenedorCitas.style.display = 'none';
    titulo.innerHTML = 'Modifica la Cita...';

    editando = true;

}