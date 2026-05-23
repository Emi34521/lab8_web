"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/sobre_mi", label: "Sobre mí" },
  { href: "/tecnologias", label: "Tecnologías" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.tabsCol} aria-label="Navegación principal">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`${styles.tabLink} ${pathname === href ? styles.active : ""}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}