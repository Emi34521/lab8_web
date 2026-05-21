// app/layout.js
import "./globals.css"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Mi Portafolio",
  description: "Portafolio personal",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />

        <main>
          {children}
        </main>

      </body>
    </html>
  )
}