//pagina para mostrar todos los proyectos desde github 
import styles from "./Proyectos.module.css";
export default function Proyectos() {
    return (
        <div className={styles.proyectos}>
            <h1>Proyectos</h1>
            <p>Aquí puedes encontrar algunos de mis proyectos en GitHub:</p>
            <ul>
                <li>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        Proyecto 1
                    </a>
                </li>
                <li>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        Proyecto 2
                    </a>
                </li>
                <li>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        Proyecto 3
                    </a>
                </li>
            </ul>
        </div>
    );
}
