import AboutUs from "@/components/AboutUs";
import ImagenFondo from "@/components/ImagenFondo";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <ImagenFondo />
      <AboutUs />
      <div className="bg-[#313131] text-white flex justify-between px-8 py-12">
        <div className="">
          <h1 className="font-bold text-2xl mb-5">Contactanos</h1>
          <div className="text-lg">
            <p>Email: taekwondoantioquia@gmail.com</p>
            <p>telefono: 4645522</p>
          </div>
        </div>
        <div className="">
          <h1 className="font-bold text-2xl mb-5">Paginas Relacionada</h1>
          <div className="text-lg">
            <p>
              <a
                href="https://www.taekwondoantioquia.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Taekwondo Antioquia
              </a>
            </p>

            <p>
              <a
                href="https://olimpicocol.co/web/federaciones/taekwondo-2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Federación Colombiana de taekwondo
              </a>
            </p>
          </div>
        </div>
        <div className=" ">
          <h1 className="font-bold text-2xl mb-5">SIGUENOS</h1>
          <div className="flex gap-3">
            {/* Enlace a Facebook */}
            <a
              href="https://www.facebook.com/ligataekwondoantioquia/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              <FaFacebook size={30} />
            </a>

            {/* Enlace a Twitter */}
            <a
              href="https://x.com/IndeportesAnt?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor&mx=2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition duration-300"
            >
              <FaTwitter size={30} />
            </a>

            {/* Enlace a Instagram */}
            <a
              href="https://www.instagram.com/taekwondoantioquia/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 transition duration-300"
            >
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
