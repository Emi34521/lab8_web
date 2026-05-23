import styles from "./SobreMi.module.css";

export default function SobreMi() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>conoceme</p>
        <h1 className={styles.title}>Sobre mí</h1>
        <div className={styles.divider} />
      </div>

      <p className={styles.body}>
        ¡Hola! Soy un desarrollador apasionado por la tecnología, videojuegos y desarollo de aplicaciones.
        Me encanta aprender nuevas herramientas, explorar diferentes paradigmas de programación
        y construir proyectos que resuelvan problemas reales. Creo que el código bien escrito
        es una forma de arte.
      </p>
      <p className={styles.body}>
        Estudio Ingeniería en Sistemas, actualmente conozco varias tecnologías, sin embargo, siempre 
        he tenido una afinidad especial por el desarrollo con javascript, java o python debido a que fueron
        las primeras tecnologías que aprendí y con las que me siento más cómodo. Sin embargo, siempre estoy 
        abierto a aprender nuevas tecnologías.
      </p>

      <p className={styles.body}>
        Actualmente quisiera enfocarme en el desarrollo de aplicaciones web, ciberseguridad y/o videojuegos,
        aunque también me interesa el desarrollo móvil y la inteligencia artificial. Me gusta trabajar en
        proyectos personales para seguir aprendiendo y mejorando mis habilidades. Considero que mi principal
        interés es usar la tecnología para crear cosas que importen y faciliten la vida de las personas. 
      </p>

      <h2 className={styles.interestsTitle}>Intereses y pasatiempos</h2>
      <div className={styles.interests}>
        <div className={styles.interestCard}>
          <span className={styles.interestIcon}></span>
          <span className={styles.interestText}>Videojuegos</span>
        </div>
        <div className={styles.interestCard}>
          <span className={styles.interestIcon}></span>
          <span className={styles.interestText}>Música</span>
        </div>
        <div className={styles.interestCard}>
          <span className={styles.interestIcon}></span>
          <span className={styles.interestText}>Lectura</span>
        </div>
        <div className={styles.interestCard}>
          <span className={styles.interestIcon}></span>
          <span className={styles.interestText}>Investigar</span>
        </div>
      </div>
    </div>
  );
}