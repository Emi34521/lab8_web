//pagina de contacto con un formulario para que los usuarios puedan enviar mensajes este no es funcional
import styles from "./Contacto.module.css";

export default function Contacto() {
  return (
    <div className={styles.contacto}>
      <h1>Contacto</h1>
      <form>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje"></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

