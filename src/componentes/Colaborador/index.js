import "./Colaborador.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Colaborador = (props)=>{
    const {nombre, puesto, foto, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, like} = props

    return <div className={fav ? "colaborador colaboradorFav" : "colaborador"}>
    <AiFillCloseCircle onClick={()=> eliminarColaborador(id)} className="eliminar"/>
    <div className="encabezado" style={{backgroundColor: colorPrimario}}>
    <img src={foto} 
        alt="IMG"/>
        </div>
    <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        {fav ? 
        <AiFillHeart color="red" className="corazonLleno" onClick={() => like(id)}/>:
        <AiOutlineHeart className="corazonVacio"onClick={()=> like(id)}/>}
        </div>
    </div>
    }

export default Colaborador