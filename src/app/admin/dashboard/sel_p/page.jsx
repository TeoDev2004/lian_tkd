"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

function SeleccionPoomsaes() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center h-screen relative">
      <div
        style={{
          backgroundImage: 'url("/poomsaes.jpeg")', // Imagen de fondo
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.7, // Opacidad sobre la imagen
          zIndex: -1, // Para que la imagen esté detrás del contenido
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div className="flex items-center justify-between gap-28">
        <Link href={"/admin/dashboard/sel_p/registrarSel"}>
          <button className="bg-green-700 p-7 rounded-xl hover:cursor-pointer hover:bg-green-900 transition duration-300 font-bold text-xl text-white">
            Registrar un deportista en la selección
          </button>
        </Link>

        <Link href={"/admin/dashboard/sel_p/consultarSel"}>
          <button className="bg-green-700 p-7 rounded-xl hover:cursor-pointer hover:bg-green-900 transition duration-300 font-bold text-xl text-white">
            Consultar deportistas de la selección
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SeleccionPoomsaes;
