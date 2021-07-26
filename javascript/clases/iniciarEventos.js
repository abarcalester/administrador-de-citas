import {mascotaInput,
    propietarioInput,
    telefonoInput,
    fechaInput,
    horaInput,
    sintomasInput,
    formulario
} from '../selectores.js'

import {datosCita, crearCitas, administradorCitas, interfaz} from '../funciones.js'

class Eventos {
    constructor() {
        mascotaInput.addEventListener('input', datosCita)
        propietarioInput.addEventListener('input', datosCita)
        telefonoInput.addEventListener('input', datosCita)
        fechaInput.addEventListener('input', datosCita)
        horaInput.addEventListener('input', datosCita)
        sintomasInput.addEventListener('input', datosCita)
        
        formulario.addEventListener('submit', crearCitas)

        document.addEventListener('DOMContentLoaded', () => {
            interfaz.mostrarCita(administradorCitas)
        })
    }
}

export default Eventos;