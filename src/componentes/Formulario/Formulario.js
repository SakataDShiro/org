import { useState } from "react"
import "./Formulario.css"
import Campo from "./Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"
import {v4 as uuid} from "uuid"
import { CiCirclePlus } from "react-icons/ci";
import { AiFillCloseCircle } from "react-icons/ai"

const Formulario = (props)=> {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState ("")
    const [id, actualizarid] = useState ("")
    const [titulo, actualizarTitulo] = useState ("")
    const [color, actualizarColor] = useState ("")
    const [fav, actualizarFav] = useState("")
    const {registrarColaborador, crearEquipo, cambiarMostrarSegundoFormulario, mostrarSegundoFormulario} = props

    const manejarEnvio = (evento) => {
        evento.preventDefault()
        console.log("Manejar Envio")
        actualizarid(uuid())
        actualizarFav(false)
        let datosAEnviar= {
            nombre,
            puesto,
            foto,
            equipo,
            id,
            fav
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (evento) => {
        evento.preventDefault()
        crearEquipo({titulo: titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio} >
            <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo 
        titulo="Nombre" 
        placeholder="Ingresar nombre" 
        required valor={nombre} 
        actualizarValor={actualizarNombre} 
        />
        <Campo 
        titulo="Puesto" 
        placeholder="Ingresar puesto" 
        required 
        valor={puesto} 
        actualizarValor={actualizarPuesto} 
        />
        <Campo 
        titulo="Foto" 
        placeholder="Ingresar url de la foto" 
        required 
        valor={foto} 
        actualizarValor={actualizarFoto} />
        
        <ListaOpciones valor={equipo} actualizarValor={actualizarEquipo} equipos={props.equipos} />
        <CiCirclePlus className="botonSegundoFormulario" onClick={cambiarMostrarSegundoFormulario}/>
        <Boton texto="Crear colaborador"/>
        </form>

        {mostrarSegundoFormulario && <form onSubmit={manejarNuevoEquipo} >
        
            <AiFillCloseCircle className="cerrarSegundoFormulario" onClick={cambiarMostrarSegundoFormulario}/>
            <h2>Rellena el formulario para crear el equipo.</h2>
            
        <Campo 
        titulo="Título" 
        placeholder="Ingresar título" 
        required valor={titulo} 
        actualizarValor={actualizarTitulo} 
        />
        <Campo 
        titulo="Color" 
        placeholder="Ingresar color (Hex)" 
        required 
        valor={color} 
        actualizarValor={actualizarColor} 
        type="color"
        />
        <Boton texto="Crear equpo">
        </Boton>
        </form>}
        </section>
}

export default Formulario