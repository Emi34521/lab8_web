import styles from "./Contacto.module.css";

export default function Contacto() {
  return (
    <div className={styles.container}>
      <p className={styles.eyebrow}>hablemos</p>
      <h1 className={styles.title}>Contacto</h1>
      <div className={styles.divider} />

      <p className={styles.intro}>
        ¿Tienes un proyecto en mente, una pregunta o simplemente quieres saludar?
        Llena el formulario y te respondo pronto.
      </p>

      //link de github 
      <p className={styles.githubLink}>
        También puedes encontrarme en{" "}
        <a href="https://github.com/Emi34521" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
      //correo electrónico personal 
      <p className={styles.email}>
        O si prefieres, envíame un correo a{" "}
        <a href="mailto: cumatzemilio6@gmail.com">
          cumatzemilio6@gmail.com
        </a>
      </p>
      <form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="nombre" className={styles.label}>Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className={styles.input}
            placeholder="Tu nombre"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            placeholder="tu@correo.com"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="mensaje" className={styles.label}>Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            className={styles.textarea}
            placeholder="Cuéntame sobre tu proyecto o idea..."
          />
        </div>

        <button type="submit" className={styles.button}>
          Enviar mensaje
        </button>
      </form>

      <p className={styles.note}>
        // este formulario es de demostración — no envía datos reales
      </p>
    </div>
  );
}