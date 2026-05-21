import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    // página principal del portafolio con nombre, carrera, descripción breve y tecnologías
    <main className={styles.main}>
      <h1 className={styles.title}>Hola, soy [Tu Nombre]</h1>
      <p className={styles.description}>
        Soy estudiante de [Tu Carrera] y este es mi portafolio personal.
      </p>
      <div className={styles.techStack}>
        <h2>Tecnologías que manejo:</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>CSS</li>
        </ul>
      </div>
    </main>
  );
}
