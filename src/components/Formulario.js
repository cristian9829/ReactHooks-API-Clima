import React, {useState} from 'react';

const Formulario = (props) =>{
  
  //State del componente
  //Busqueda  = State
  //guardarBusqueda = this.setState
  const [busqueda, guardarBusqueda ] = useState({
    ciudad : '',
    pais : ''
  })
 
  const hamndleChange = e =>{
    //Cambiar el state
    guardarBusqueda({
      ...busqueda,
      [e.target.name] : e.target.value
    })

  }

  const consultarClima = e =>{
    e.preventDefault();
    
    //Pasar hacia el componente principal del usuario 
    props.datosConsulta(busqueda)
  }

  return(
    <form 
    onSubmit = {consultarClima}
    >
      <div className="input-field col s12">
        <input 
          type="text"
          name="ciudad" 
          id="ciudad"
          onChange={hamndleChange}
        />
        <label htmlFor="ciudad">Ciudad</label>
      </div>

      <div className="input-field col s12">
        <select onChange={hamndleChange} name="pais">
          <option value="">Selecciona un pais</option>
          <option value="CO">Colombia</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">Mexico</option> 
          <option value="ARG">Argentina</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Peru</option>
        </select>
      </div>

      <div className="input-field col s12">
        <input 
          type="submit" 
          className="waved-effect waves-light btn-large btn-block yellow accent-4"
          value="Buscar Clima" 
        />

      </div>
    </form>
  ) 
}

export default Formulario;