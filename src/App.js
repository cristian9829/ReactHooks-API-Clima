import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/error';
import Clima from './components/Clima';
import { async } from 'q';

function App() {

  //state principal
  //ciudad = state, guardarCiudad = setState({})
  const [ciudad, guardarCiudad] = useState('')
  const [pais, guardarPais] = useState('')
  const [error, guardarError] = useState(false);
  const [resultado, guardarResultado] = useState({});

  useEffect(() =>{
    //Prevenir ejecucion

    if(ciudad === '') return;

    const consultarApi = async () =>{
      
      const appId = '74d80ae7a17219583e0faa6962b2157f';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
      
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarResultado(resultado)
    }
    
    consultarApi();
  }, [ciudad, pais])


  const datosConsulta = datos =>{

    //Validar que ambos campos esten
    if(datos.ciudad === '' || datos.pais === ''){
      //un error
      guardarError(true);
      return false;
    }
    
    //Ciudad y pais existen, agregarlos al state
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  }

  

  // Cargar un componente Condicionalmente
   let componente;
   if(error){
     //Hay un error, mostrarlo
     componente = <Error mensaje="Ambos campos son obligatorios" />
   }else if(resultado.cod === '404'){
     componente = <Error mensaje = "La ciudad no existe en nuestra API" />
   }else{
     // Mostrar el clima
     componente = <Clima resultado = {resultado} />;
   }

  return (
    <div className="App">
      <Header
        titulo = "Clima React App"
      /> 

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario
                datosConsulta={datosConsulta}
              /> 
            </div>
            <div className="col s12 m6">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
 