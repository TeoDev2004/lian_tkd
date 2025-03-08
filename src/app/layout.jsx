import "./globals.css";
import Navbar from "@/components/NavBar";
import { SessionProvider } from "@/components/SessionProvider";

export const metadata = {
  title: "BASE DE DATOS LIANTKD",
  description: "Sistema de registro Liga Antioqueña de Taekwondo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <SessionProvider>
          <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
