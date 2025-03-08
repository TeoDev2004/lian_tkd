"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

function RegistrarSelP() {
  const router = useRouter();
  const [mayor_logro, setMayor_logro] = useState("");
  const [modalidad, setModalidad] = useState("");
  const [id_deportista, setId_deportista] = useState("");
  const [error, setError] = useState(""); // Estado para mostrar el error

  const isFormValid = () => {
    return mayor_logro && id_deportista && modalidad;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      setError("Por favor, llena todos los campos.");
      return; // Detener el envío si el formulario no es válido
    }

    setError(""); // Limpiar el mensaje de error si todo está bien

    const res = await fetch("/api/selPoomsae", {
      method: "POST",
      body: JSON.stringify({
        mayor_logro,
        modalidad,
        id_deportista,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    if (res.status === 400 || res.status === 404) {
      setError(data.error);
      return;
    }

    // Redirigir al inicio si el registro fue exitoso
    router.push("/admin/dashboard/sel_p");
  };

  return (
    <div className="flex justify-center items-center relative h-screen">
      <div
        style={{
          backgroundImage: 'url("/registar_clubFondo.jpg")', // Imagen de fondo
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
      <form
        className="bg-[#313131] p-10 2xl:w-1/4 md:w-1/2 rounded-2xl mt-20 mb-14"
        onSubmit={onSubmit}
      >
        <h1 className="flex items-center mb-8 text-2xl font-bold text-white">
          INGRESA LOS DATOS DEL DEPORTISTA SELECCIÓN
        </h1>

        {/* Mensaje de error */}
        {error && <p className="text-red-500 text-lg mb-4">{error}</p>}

        <label htmlFor="id_deportista" className="font-bold text-xl text-white">
          Identificación del deportista
        </label>
        <input
          type="text"
          id="id_deportista"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-white text-xl"
          placeholder="Identificación"
          onChange={(e) => setId_deportista(e.target.value)}
          value={id_deportista}
        />
        <label htmlFor="modalidad" className="font-bold text-xl text-white">
          Modalidad del deportista
        </label>
        <select
          id="modalidad"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-black text-xl"
          onChange={(e) => setModalidad(e.target.value)}
          value={modalidad}
        >
          <option value="" disabled>
            Selecciona una modalidad
          </option>
          <option value="Individual Tradicional">Individual Tradicional</option>
          <option value="Pareja Tradicional">Pareja Tradicional</option>
          <option value="Equipos Tradicional">Equipos Tradicional</option>
          <option value="Freestyle">Freestyle</option>
        </select>
        <label htmlFor="mayor_logro" className="font-bold text-xl text-white">
          Mayor logro del deportista
        </label>
        <input
          type="text"
          id="mayor_logro"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-white text-xl"
          placeholder="Logro"
          onChange={(e) => setMayor_logro(e.target.value)}
          value={mayor_logro}
        />

        <button
          className="bg-[#007A33] hover:bg-[#005F26] text-white font-bold py-2 px-5 rounded-xl mt-3 hover:cursor-pointer"
          type="submit"
        >
          Registrar
        </button>
      </form>
    </div>
  );
}

export default RegistrarSelP;
