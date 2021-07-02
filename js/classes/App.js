import { datosCitas, nuevaCita} from '../funciones.js';
import {mascotaInput, 
    propietarioInput, 
    razaInput, 
    telefonoInput,
    fechaInput,    
    horaInput,
    sintomasInput, 
    formulario} from '../selectores.js';

class App {
    constructor(){
        mascotaInput.addEventListener('input',datosCitas);
        razaInput.addEventListener('input',datosCitas);
        propietarioInput.addEventListener('input',datosCitas);
        telefonoInput.addEventListener('input',datosCitas);
        fechaInput.addEventListener('input',datosCitas);
        horaInput.addEventListener('input',datosCitas);
        sintomasInput.addEventListener('input',datosCitas);

        formulario.addEventListener('submit',nuevaCita);
    }
}

export default App;
