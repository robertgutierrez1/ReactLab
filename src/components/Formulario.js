import React, { Fragment, useState } from "react";
import uuid from 'uuid/v4';

const Formulario = () => {
    // Crear State de citas

    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, actualizarError] = useState(false)

    // funcion que se ejecuta cada que el usuario escribe en un input

    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    const { mascota, propietario, fecha, hora, sintomas } = cita;

    // funcion que se ejecuta al hacer clic en el boton

    const submitCita = e => {
        e.preventDefault();
        
        // Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            console.log('Tienes que llenar todos los campos');
            actualizarError(true);
            return;
        }
            // ELiminar el mensaje previous
        actualizarError (false);
        
        // Asignar un ID
        cita.id = uuid;
        console.log(cita)

        // Crear la cita

        // Reiniciar el form
    }

    return (
    <Fragment>
      <h2>Crear Cita</h2>
        { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
        
      <form
        onSubmit={submitCita}
      >
          <label>Nombre Mascota</label>
          <input
            type="text"
            name="mascota"
            className="u-full-width"
            placeholder="Nombre Mascota"
            onChange={actualizarState}
            value={mascota}
          />

          <label>Nombre Dueño</label>
          <input
            type="text"
            name="propietario"
            className="u-full-width"
            placeholder="Nombre Dueño de la Mascota"
            onChange={actualizarState}
            value={propietario}
          />

          <label>Fecha</label>
          <input
            type="date"
            name="fecha"
            className="u-full-width"
            onChange={actualizarState}
            value={fecha}
          />
          
          <label>Hora</label>
          <input
            type="time"
            name="hora"
            className="u-full-width"
            onChange={actualizarState}
            value={hora}
          />

          <label>Síntomas</label>
          <textarea
            className="u-full-width"
            name="sintomas"
            onChange={actualizarState}
            value={sintomas}
          ></textarea>

          <button
            type = "submit"
            className="u-full-width button-primary"
          >Agregar Cita</button>
      </form>    
    </Fragment>
  );
};

export default Formulario;
