import AboutUs from "@/components/AboutUs";
import ImagenFondo from "@/components/ImagenFondo";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <ImagenFondo />
      <AboutUs />
      <div className="bg-[#313131] text-white flex flex-col md:flex-row justify-between px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 gap-6 md:gap-4">
        <div className="md:w-1/3 text-center">
          <h1 className="font-bold text-xl sm:text-2xl mb-3 sm:mb-5">
            Contactanos
          </h1>
          <div className="text-base sm:text-lg">
            <p>Email: liantkd@taekwondoantioquia.com</p>
            <p>Teléfono: 3242117398</p>
          </div>
        </div>
        <div className="md:w-1/3 text-center">
          <h1 className="font-bold text-xl sm:text-2xl mb-3 sm:mb-5">
            Paginas Relacionada
          </h1>
          <div className="text-base sm:text-lg">
            <p>
              <a
                href="https://www.taekwondoantioquia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Taekwondo Antioquia
              </a>
            </p>

            <p>
              <a
                href="https://olimpicocol.co/web/federaciones/taekwondo-2/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Federación Colombiana de taekwondo
              </a>
            </p>
          </div>
        </div>
        <div className="md:w-1/3 text-center">
          <h1 className="font-bold text-xl sm:text-2xl mb-3 sm:mb-5">
            SIGUENOS
          </h1>
          <div className="flex gap-3 justify-center">
            {/* Enlace a Facebook */}
            <a
              href="https://www.facebook.com/ligataekwondoantioquia/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              <FaFacebook size={24} className="sm:text-3xl" />
            </a>

            {/* Enlace a Twitter */}
            <a
              href="https://x.com/IndeportesAnt?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor&mx=2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition duration-300"
            >
              <FaTwitter size={24} className="sm:text-3xl" />
            </a>

            {/* Enlace a Instagram */}
            <a
              href="https://www.instagram.com/taekwondoantioquia/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 transition duration-300"
            >
              <FaInstagram size={24} className="sm:text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
