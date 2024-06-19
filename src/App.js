import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/index.js';
import Equipo from './componentes/Equipo/index.js';
import Footer from './componentes/Footer/index.js';
import {v4 as uuid} from "uuid"



function App() {
  
  const [mostrarFormulario, actualizarMostrar] = useState(false) 
  const [mostrarSegundoFormulario, actualizarMostrarSegundoFormulario] = useState(false) 
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      nombre:"Arturo Fuentes",
      puesto:"Frontend Developer",
      foto: "https://cdn2.gnarususercontent.com.br/6/624739/aa85cbfb-b237-42e6-938a-c8c5b1580e7a.jpeg?width=100&height=100&aspect_ratio=1:1",
      equipo:"Frontend", 
      fav: false
  }
  ]) 
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
  }, 
    {
      id: uuid(),
      titulo: "Frontend",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    }, 
  {
      id: uuid(), 
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario:"#F0F8E2"
  }, 
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario:"#FDE7E8"
  }, 
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario:"#FAE9F5"
  }, 
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario: "#FFF5D9"
  }, 
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
  }
  ]);

  const crearEquipo = (nuevoEquipo)=> {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos,{...nuevoEquipo, id: uuid()}])
  }

  const cambiarMostrar = ()=>{
    actualizarMostrar(!mostrarFormulario)
  }

  const cambiarMostrarSegundoFormulario = ()=> {
    actualizarMostrarSegundoFormulario(!mostrarSegundoFormulario)
  }

  
  const like = (id)=> {
    console.log(id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })  

    actualizarColaboradores(colaboradoresActualizados)

  }

  const registrarColaborador= (colaborador)=>{
    console.log(colaborador)
    actualizarColaboradores([...colaboradores,colaborador])
  }

  const eliminarColaborador= (id)=>{
    console.log("eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    console.log(nuevosColaboradores)
    actualizarColaboradores(nuevosColaboradores)
  }

  const actualizarColor = (color, id)=>{
    console.log("actualizar color", color, id)
    const equiposActualizados = equipos.map((equipo)=> {
      //checa que el input color sea el del equipo para que cambie únicamente ese
      if(equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  } 
  return (
    <div>
      <Header/>
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {/* mostrarFormulario ? <Formulario/> : <></>*/}
      {mostrarFormulario && <Formulario 
      equipos= {equipos.map((equipo) => equipo.titulo)} 
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
      cambiarMostrarSegundoFormulario={cambiarMostrarSegundoFormulario}
      mostrarSegundoFormulario={mostrarSegundoFormulario}
      /> }
     
      { 
        equipos.map((equipo) => {
          return <Equipo 
          datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores.filter( colaborador => (colaborador.equipo === equipo.titulo))}
          eliminarColaborador= {eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />
          
        })
      }
      <Footer/>
    </div>
  );
}

export default App;
