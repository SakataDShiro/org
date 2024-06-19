import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props)=> {
    const {colorPrimario, colorSecundario, titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props
    
    const fondo = {
        backgroundColor: hexToRgba(colorPrimario, 0.5)
    }

    return <> 
        
        {colaboradores.length > 0 &&
        <section className="equipo" style={fondo}>
        <input 
            className="input-color"
            type="color"
            value={colorPrimario}
            onChange={(evento) => {
                actualizarColor(evento.target.value, id)
            }}
        
        />
        <h3 style={{borderColor:colorPrimario}} >
        {props.datos.titulo}
        </h3>
        <div className="colaboradores">
            {
                colaboradores.map((colaborador, index) => <Colaborador 
                datos={colaborador} 
                key={index} 
                colorPrimario={colorPrimario} 
                eliminarColaborador={eliminarColaborador}
                like={like}
                />)
            }
        </div>
        
    </section>}
    </>
    }

export default Equipo