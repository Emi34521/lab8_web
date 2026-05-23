import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

export const metadata = {
  title: "Mi Portafolio",
  description: "Portafolio personal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className="book-wrapper">
          <div className="book">
            <div className="page-content">
              <div className="page-lines" aria-hidden="true" />
              {children}
            </div>
            <Navbar />
          </div>
        </div>
      </body>
    </html>
  );
}