import React from 'react';

const Formulario = () =>{

  const hamndleChange = e =>{
    //Cambiar el state
  }

  return(
    <form>
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
          <option valie="CO">Colombia</option>
          <option valie="US">Estados Unidos</option>
          <option valie="MX">Mexico</option> 
          <option valie="ARG">Argentina</option>
          <option valie="CR">Costa Rica</option>
          <option valie="ES">España</option>
          <option valie="PE">Peru</option>
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