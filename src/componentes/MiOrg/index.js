import "./MiOrg.css"


const MiOrg = (props)=> {

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img alt="add.png"src="/img/add.png" onClick={props.cambiarMostrar}></img>
    </section>
}

export default MiOrg