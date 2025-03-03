"use client";
import { FaFistRaised } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";

function RegistrarClub() {
  const router = useRouter();
  const [nombre_club, setNombre_club] = useState("");
  const [direccion, setDireccion] = useState("");
  const [nombre_presidente, setNombre_presidente] = useState("");
  const [id_presidente, setId_presidente] = useState("");
  const [telefono_presidente, setTelefono_presidente] = useState("");
  const [correo_institucional, setCorreo_institucional] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Estado para mostrar el error

  const idPresidenteInt = Number(id_presidente);

  const isFormValid = () => {
    return (
      nombre_club &&
      direccion &&
      nombre_presidente &&
      id_presidente &&
      telefono_presidente &&
      correo_institucional &&
      password
    );
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      setError("Por favor, llena todos los campos.");
      return; // Detener el envío si el formulario no es válido
    }

    setError(""); // Limpiar el mensaje de error si todo está bien

    const res = await fetch("/api/club", {
      method: "POST",
      body: JSON.stringify({
        nombre_club,
        direccion,
        nombre_presidente,
        id_presidente: idPresidenteInt,
        telefono_presidente,
        correo_institucional,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    if (res.status === 400) {
      setError(data.error);
      return;
    }

    // Redirigir al inicio si el registro fue exitoso
    router.push("/admin/dashboard");
  };

  return (
    <div className="h-screen flex justify-center items-center">
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
        }}
      ></div>
      <form
        className="bg-[#313131] p-10 lg:w-1/4 md:w-1/2 rounded-2xl"
        onSubmit={onSubmit}
      >
        <h1 className="flex items-center mb-8 text-2xl font-bold text-white">
          <FaFistRaised className="text-white mr-4" />
          REGISTRA UN NUEVO CLUB
        </h1>

        {/* Mensaje de error */}
        {error && <p className="text-red-500 text-lg mb-4">{error}</p>}

        <label htmlFor="nombre_club" className="font-bold text-xl text-white">
          Nombre del Club
        </label>
        <input
          type="text"
          id="nombre_club"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-white text-xl"
          placeholder="Nombre del Club"
          onChange={(e) => setNombre_club(e.target.value)}
          value={nombre_club}
        />
        <label htmlFor="direccion" className="font-bold text-xl text-white">
          Dirección del Club
        </label>
        <input
          type="text"
          id="direccion"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-white text-xl"
          placeholder="Dirección del Club"
          onChange={(e) => setDireccion(e.target.value)}
          value={direccion}
        />
        <label
          htmlFor="nombre_presidente"
          className="font-bold text-xl text-white"
        >
          Nombre del Presidente del Club
        </label>
        <input
          type="text"
          id="nombre_presidente"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-white text-xl"
          placeholder="Nombre del Presidente del Club"
          onChange={(e) => setNombre_presidente(e.target.value)}
          value={nombre_presidente}
        />
        <label htmlFor="id_presidente" className="font-bold text-xl text-white">
          ID del Presidente del Club
        </label>
        <input
          type="number"
          id="id_presidente"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-white text-xl"
          placeholder="ID del Presidente del Club"
          onChange={(e) => setId_presidente(e.target.value)}
          value={id_presidente}
        />
        <label
          htmlFor="telefono_presidente"
          className="font-bold text-xl text-white"
        >
          Teléfono del Presidente del Club
        </label>
        <input
          type="text"
          id="telefono_presidente"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-white text-xl"
          placeholder="Teléfono del Presidente del Club"
          onChange={(e) => setTelefono_presidente(e.target.value)}
          value={telefono_presidente}
        />
        <label
          htmlFor="correo_institucional"
          className="font-bold text-xl text-white"
        >
          Correo Institucional del Club
        </label>
        <input
          type="email"
          id="correo_institucional"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-white text-xl"
          placeholder="Correo Institucional del Club"
          onChange={(e) => setCorreo_institucional(e.target.value)}
          value={correo_institucional}
        />
        <label htmlFor="password" className="font-bold text-xl text-white">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-white text-xl"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          className="bg-[#007A33] hover:bg-[#005F26] text-white font-bold py-2 px-5 rounded-xl mt-3 hover:cursor-pointer"
          type="submit"
        >
          Crear
        </button>
      </form>
    </div>
  );
}

export default RegistrarClub;
