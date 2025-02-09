import "./ListaOpciones.css"

const ListaOpciones = (props)=>{

    const manejarCambio= (e)=> {
        props.actualizarValor(e.target.value)
        console.log(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>

        <select value={props.valor} onChange={manejarCambio}>

            <option 
            value="" 
            disabled 
            defaultValue="" 
            hidden>
            Seleccionar Equipo
            </option>

            {props.equipos.map((equipo, index) =>{
                return <option value={equipo} key={index}>{equipo}  </option>
            })}
        </select>

    </div>
}

export default ListaOpciones