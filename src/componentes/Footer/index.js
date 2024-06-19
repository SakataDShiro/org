import "./Footer.css"

const Footer = () => {
    return<footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
        <div className="redes">
            <a href="https://sakatadshiro.github.io/portafolio/">
                <img src="/img/github.png" alt="github"/>
                </a>
        </div>
        <img src="/img/Logo.png" alt="org" className="logo"/>
        <strong>Desarrollado por Arturo Fuentes</strong>
    </footer>
}

export default Footer