//pagina para mostrar las tecnologías que conozco, manejo y he aprendido a lo largo del tiempo 
import styles from "./Tecnologias.module.css";
export default function Tecnologias() {
    return (
        <div className={styles.tecnologias}>
            <h1>Tecnologías</h1>
            <p>A lo largo de mi carrera como desarrollador, he aprendido y trabajado con diversas tecnologías. Algunas de las tecnologías que conozco incluyen:</p>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>HTML/CSS</li>
                <li>Git</li>
                <li>SQL</li>
                <li>Python</li>
            </ul>
            <p>Estoy siempre abierto a aprender nuevas tecnologías y mejorar mis habilidades para seguir creciendo como desarrollador.</p>  
        </div>
    );
}
