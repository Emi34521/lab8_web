// Requiere: npm install react-icons
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiHtml5,
  SiCss,
  SiMysql,
  SiGit,
} from "react-icons/si";
import styles from "./Tecnologias.module.css";

const techs = [
  {
    Icon: SiJavascript,
    name: "JavaScript",
    level: "Intermedio",
    color: "#f7df1e",
    bg: "#fffbe6",
  },
  {
    Icon: SiReact,
    name: "React",
    level: "Básico",
    color: "#61dafb",
    bg: "#e8faff",
  },
  {
    Icon: SiNextdotjs,
    name: "Next.js",
    level: "Intermedio",
    color: "#000000",
    bg: "#f0f0f0",
  },
  {
    Icon: SiNodedotjs,
    name: "Node.js",
    level: "Intermedio",
    color: "#3c873a",
    bg: "#edfaed",
  },
  {
    Icon: SiPython,
    name: "Python",
    level: "Intermedio",
    color: "#3776ab",
    bg: "#e8f2fb",
  },
  {
    Icon: SiHtml5,
    name: "HTML5",
    level: "Intermedio",
    color: "#e34f26",
    bg: "#fff0ec",
  },
  {
    Icon: SiCss,
    name: "CSS3",
    level: "Intermedio",
    color: "#1572b6",
    bg: "#e8f2fb",
  },
  {
    Icon: SiMysql,
    name: "SQL",
    level: "Intermedio",
    color: "#00758f",
    bg: "#e6f7fa",
  },
  {
    Icon: SiGit,
    name: "Git",
    level: "Intermedio",
    color: "#f05032",
    bg: "#fff0ec",
  },
];

export default function Tecnologias() {
  return (
    <div className={styles.container}>
      <p className={styles.eyebrow}>stack</p>
      <h1 className={styles.title}>Tecnologías</h1>
      <div className={styles.divider} />

      <p className={styles.intro}>
        A lo largo de mi carrera he aprendido y trabajado con distintas tecnologías.
        Siempre estoy explorando nuevas herramientas para mejorar mis habilidades.
      </p>

      <p className={styles.categoryTitle}>lenguajes y frameworks</p>
      <div className={styles.grid}>
        {techs.map(({ Icon, name, level, color, bg }) => (
          <div
            key={name}
            className={styles.techCard}
            style={{ "--icon-color": color, "--icon-bg": bg }}
          >
            <span className={styles.techIconWrap}>
              <Icon size={28} color={color} aria-hidden="true" />
            </span>
            <span className={styles.techName}>{name}</span>
            <span className={styles.techLevel}>{level}</span>
          </div>
        ))}
      </div>
        
    </div>
  );
}