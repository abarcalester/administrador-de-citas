import {contenedorCitas, formulario} from '../selectores.js'
import {administradorCitas, modificarCita} from '../funciones.js'

class Interfaz {
    mostrarAvisos(mensaje, tipo) {
        const contenedorAvisos = document.querySelector('#contenido');

        const divAviso = document.createElement('div');
        divAviso.classList.add('col-12', 'alert', 'text-center')
        divAviso.textContent = mensaje

        if (tipo) {
            divAviso.classList.add('alert-danger')
        } else {
            divAviso.classList.add('alert-success')
        }
        contenedorAvisos.insertBefore(divAviso, document.querySelector('.agregar-cita'))
        setTimeout(() => divAviso.remove(),4000)

    }

    limpiarCitas() {
        while(contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild)
        }
    }

    mostrarCita(objCita) {
        const {citas} = objCita
        this.limpiarCitas()
        citas.forEach(cita => {
            const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita

            const divCita = document.createElement('div');
            divCita.dataset.id = id
            divCita.classList.add('cita')

            const mascotaTitulo = document.createElement('h2');
            mascotaTitulo.classList.add('card-title')
            mascotaTitulo.textContent = mascota

            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `
            <span class="font-weight-bolder">Propietario:</span> ${propietario}
            `

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `
            <span class="font-weight-bolder">Telefono:</span> ${telefono}
            `

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `
            <span class="font-weight-bolder">Fecha:</span> ${fecha}
            `
            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `
            <span class="font-weight-bolder">Hora:</span> ${hora}
            `
            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `
            <span class="font-weight-bolder">Sintomas:</span> ${sintomas}
            `

            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn','btn-danger')
            btnEliminar.textContent = 'Eliminar X'
            btnEliminar.onclick = () => {
                administradorCitas.eliminarCita(id)
            }

            const btnModificar = document.createElement('button');
            btnModificar.classList.add('btn', 'btn-info', 'ml-2')
            btnModificar.textContent = 'Modificar'
            btnModificar.onclick = () => {
                modificarCita(cita)
            }

            divCita.appendChild(mascotaTitulo)
            divCita.appendChild(propietarioParrafo)
            divCita.appendChild(telefonoParrafo)
            divCita.appendChild(fechaParrafo)
            divCita.appendChild(horaParrafo)
            divCita.appendChild(sintomasParrafo)

            divCita.appendChild(btnEliminar)
            divCita.appendChild(btnModificar)
            
            contenedorCitas.appendChild(divCita)
        });
    }

}


export default Interfaz;
