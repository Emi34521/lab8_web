import styles from "./Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.avatar}>EC</div>
        <div className={styles.heroText}>
          <h1>Hola, soy Esteban Cumatz</h1>
          <p>// desarrollador  · estudiante de ing. en computación //</p>
        </div>
      </div>

      <p className={styles.eyebrow}>sobre este portafolio</p>
      <p className={styles.bio}>
        Apasionado por construir experiencias que faciliten la vida de las personas. Me encanta 
        el desarrollo y siempre estoy buscando aprender nuevas tecnologías para mejorar mis habilidades.
        Aprendo constantemente, disfruto los videojuegos y creo que la mejor forma de entender
        la tecnología es usándola para crear cosas que importen.
      </p>

      <div className={styles.techSection}>
        <h2>Tecnologías que manejo</h2>
      </div>
      <div className={styles.pills}>
        <span className={styles.pill}>JavaScript</span>
        <span className={styles.pill}>React</span>
        <span className={styles.pill}>Next.js</span>
        <span className={styles.pill}>Node.js</span>
        <span className={styles.pill}>Python</span>
        <span className={styles.pill}>CSS / HTML</span>
        <span className={styles.pill}>SQL</span>
        <span className={styles.pill}>Git</span>
      </div>

      <div className={styles.ctaRow}>
        <Link href="/proyectos" className={`${styles.ctaBtn} ${styles.ctaPrimary}`}>
          Ver proyectos
        </Link>
        <Link href="/contacto" className={`${styles.ctaBtn} ${styles.ctaSecondary}`}>
          Contactarme
        </Link>
        <Link href="https://github.com/Emi34521" className={`${styles.ctaBtn} ${styles.ctaSecondary}`}>
          GitHub
        </Link>
      </div>
    </main>
  );
}