import {interfaz, administradorCitas, sincronizarLocalStorage} from '../funciones.js'



class Citas {
    constructor() {
        this.citas = JSON.parse(localStorage.getItem('LocalCitas')) || []
    }
    nuevaCita(objCita) {
        if (this.citas.length < 2) {
            this.citas = [...this.citas, objCita]
            interfaz.mostrarAvisos('Se ha creado la cita.')  
            sincronizarLocalStorage(this.citas)
            
            return
        } else {
            interfaz.mostrarAvisos('Máximo de citas creadas. Limite de 2', 'algo') 
        }
    }
    eliminarCita(id) {
        this.citas = this.citas.filter(cita => cita.id !== id)
        interfaz.mostrarCita(administradorCitas)
        sincronizarLocalStorage(this.citas)
    }
    editarCita(objGeneral) {
        this.citas = this.citas.map(cita => cita.id === objGeneral.id ? objGeneral : cita)
        interfaz.mostrarAvisos('Se ha modificado la cita.',) 
        sincronizarLocalStorage(this.citas)
    }
    
}

export default Citas;