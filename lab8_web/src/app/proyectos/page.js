import styles from "./Proyectos.module.css";

const projects = [
  {
    theme: "cyber",
    label: "express.js + react",
    title: "Lab7",
    desc: "Comparativa entre express.js y node.js. Calculadora simple con react. ",
    link: "https://github.com/Emi34521/Lab7_express-react",
  },
  {
    theme: "darksouls",
    label: "node.js + http",
    title: "Lab6",
    desc: "Corregir y mejorar el código básico para crear un servidor en node.js con http.",
    link: "https://github.com/Emi34521/Lab6_node_http",
  },
  {
    theme: "pixel",
    label: "react + vite ",
    title: "Not_baltro",
    desc: "Intentar recrear el videojuego de balatro con react. Proyecto en progreso.",
    link: "https://github.com/Emi34521/Not_balatro_web",
  },
  {
    theme: "fantasy",
    label: " html + css + js",
    title: "Proyecto 1",
    desc: "Crear una página web con html, css y js que consuma una API púbica",
    link: "https://github.com/Emi34521/Proyecto1_web",
  },
  {
    theme: "next.js + css modules",
    label: "Lab8",
    title: "Portfolio Mismo",
    desc: "Este portafolio con todos los proyectos y algunos laboratorios",
    link: "https://github.com/Emi34521/Lab8_Portfolio",
  },
];

function Card({ theme, label, title, desc, link }) {
  const themeMap = {
    cyber: {
      card: styles.cyber,
      label: styles.cyberLabel,
      title: styles.cyberTitle,
      desc: styles.cyberDesc,
    },
    bio: {
      card: styles.bio,
      label: styles.bioLabel,
      title: styles.bioTitle,
      desc: styles.bioDesc,
    },
    darksouls: {
      card: styles.darksouls,
      label: styles.dsLabel,
      title: styles.dsTitle,
      desc: styles.dsDesc,
    },
    pixel: {
      card: styles.pixel,
      label: styles.pixelLabel,
      title: styles.pixelTitle,
      desc: styles.pixelDesc,
    },
    fantasy: {
      card: styles.fantasy,
      label: styles.fantasyLabel,
      title: styles.fantasyTitle,
      desc: styles.fantasyDesc,
    },
    plain: {
      card: styles.plain,
      label: styles.plainLabel,
      title: styles.plainTitle,
      desc: styles.plainDesc,
    },
  };

  const t = themeMap[theme];

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.card} ${t.card}`}
    >
      <p className={t.label}>{label}</p>
      <p className={t.title}>{title}</p>
      <p className={t.desc}>{desc}</p>
      {/* Bonfire icon — appears on hover via CSS */}
      <img
        src="/bonfire.svg"
        alt=""
        aria-hidden="true"
        className={styles.bonfire}
        width={28}
        height={28}
      />
    </a>
  );
}

export default function Proyectos() {
  return (
    <div className={styles.container}>
      <p className={styles.eyebrow}>repositorios</p>
      <h1 className={styles.title}>Proyectos</h1>
      <div className={styles.divider} />

      <div className={styles.grid}>
        {projects.map((p) => (
          <Card key={p.title} {...p} />
        ))}
      </div>

    </div>
  );
}