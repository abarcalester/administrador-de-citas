import {
    mascotaInput,
    propietarioInput,
    telefonoInput,
    fechaInput,
    horaInput,
    sintomasInput,
    formulario
} from './selectores.js'

import Citas from './clases/citas.js'
import Interfaz from './clases/interfaz.js'

export const administradorCitas = new Citas()
export const interfaz = new Interfaz()

export const objGeneral = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
} 

let editando = false

// Completar el objeto de la cita con los datos del formulario usuario.
export function datosCita (e) {
    objGeneral[e.target.id] = e.target.value
}
// Realizar validación de formulario con los datos completos y enviar al arreglo.
export function crearCitas (e) {
    e.preventDefault()
    if (mascotaInput.value === '' || propietarioInput.value === '' || telefonoInput.value === '' || fechaInput.value === '' || horaInput.value === '' || sintomasInput.value === '') {
        interfaz.mostrarAvisos('Debes completar todos los campos.', 'algo')
        return
    }
    
    if (editando) {
        administradorCitas.editarCita(objGeneral)
        interfaz.mostrarCita(administradorCitas)

        formulario.querySelector('button[type="submit"]').textContent = 'Crear cita'
        editando = false
    } else {
        objGeneral.id = Date.now()
        administradorCitas.nuevaCita({...objGeneral})
    }

    interfaz.mostrarCita(administradorCitas)
    formulario.reset()
    formatearObjetoGeneral(objGeneral)
}

function formatearObjetoGeneral (objGeneral) {
    objGeneral.mascota = '',
    objGeneral.propietario = '',
    objGeneral.telefono = '',
    objGeneral.fecha = '',
    objGeneral.hora = '',
    objGeneral.sintomas = ''
}

export function modificarCita (cita) {
    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita

    mascotaInput.value = mascota
    propietarioInput.value = propietario
    telefonoInput.value = telefono
    fechaInput.value = fecha
    horaInput.value = hora
    sintomasInput.value = sintomas

    objGeneral.mascota = mascota
    objGeneral.propietario = propietario
    objGeneral.telefono = telefono
    objGeneral.fecha = fecha
    objGeneral.hora = hora
    objGeneral.sintomas = sintomas
    objGeneral.id = id
    
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar cambios'

    editando = true
}

export function sincronizarLocalStorage (citas) {
    localStorage.setItem('LocalCitas', JSON.stringify(citas))
}

