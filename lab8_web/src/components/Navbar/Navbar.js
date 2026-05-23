//barra para poder acceder a cada una de las páginas 
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href="/">Inicio</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/sobre_mi">Sobre mí</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/tecnologias">Tecnologías</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/proyectos">Proyectos</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/contacto">Contacto</Link>
                </li>
            </ul>
        </nav>
    );
}