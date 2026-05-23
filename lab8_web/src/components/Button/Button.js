//código de botón reutilizable que permite aplicar diferentes estilos según el tipo de botón
import styles from "./Button.module.css";

export default function Button({ type, children }) {
    return (
        <button className={`${styles.button} ${styles[type]}`}>
            {children}
        </button>
    );
}
