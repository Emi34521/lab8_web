// app/layout.js
import Footer from "@/components/Footer/Footer"
import "./globals.css"
import Navbar from "@/components/Navbar/Navbar"

export const metadata = {
  title: "Mi Portafolio",
  description: "Portafolio personal",
}
// para que la Navbar este presente en todas las páginas. 
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />

      </body>
    </html>
  )
}