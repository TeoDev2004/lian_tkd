"use client";
import { FaFistRaised } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";

function RegistarDeportista() {
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [tipo_identificacion, setTipo_identificacion] = useState("");
  const [numero_identificacion, setNumero_identificacion] = useState("");
  const [grado_cinturon, setGrado_cinturon] = useState("");
  const [genero, setGenero] = useState("");
  const [fecha_nacimiento, setFecha_nacimiento] = useState("");
  const [lugar_nacimiento, setLugar_nacimiento] = useState("");
  const [rh, setRh] = useState("");
  const [eps, setEps] = useState("");
  const [direccion, setDireccion] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [barrio, setBarrio] = useState("");
  const [estrato, setEstrato] = useState("");
  const [numero_celular, setNumero_celular] = useState("");
  const [correo_electronico, setCorreo_electronico] = useState("");
  const [discapacidad, setDiscapacidad] = useState("");
  const [tipo_formacion, setTipo_formacion] = useState("");
  const [profesion, setProfesion] = useState("");
  const [ocupacion, setOcupacion] = useState("");
  const [fecha_ultimo_examen, setFecha_ultimo_examen] = useState("");
  const [competidor, setCompetidor] = useState("");
  const [modalidad_competencia, setModalidad_competencia] = useState("");
  const [rol_club, setRol_club] = useState("");
  const [error, setError] = useState(""); // Estado para mostrar el error

  const { data: session } = useSession();
  const idClubFromSession = session?.user?.id || null;
  const fechaNacimientoDate = new Date(fecha_nacimiento);
  const estratoInt = Number(estrato);
  const fechaExamenDate = new Date(fecha_ultimo_examen);

  const isFormValid = () => {
    return (
      nombre &&
      apellidos &&
      tipo_identificacion &&
      numero_identificacion &&
      grado_cinturon &&
      genero &&
      fecha_nacimiento &&
      lugar_nacimiento &&
      rh &&
      eps &&
      direccion &&
      municipio &&
      barrio &&
      estrato &&
      numero_celular &&
      correo_electronico &&
      tipo_formacion &&
      profesion &&
      ocupacion &&
      fecha_ultimo_examen &&
      rol_club
    );
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      setError("Por favor, llena todos los campos.");
      return; // Detener el envío si el formulario no es válido
    }

    setError(""); // Limpiar el mensaje de error si todo está bien

    console.log({
      nombre,
      apellidos,
      tipo_identificacion,
      numero_identificacion,
      grado_cinturon,
      genero,
      fecha_nacimiento: fechaNacimientoDate,
      lugar_nacimiento,
      rh,
      eps,
      direccion,
      municipio,
      barrio,
      estrato: estratoInt,
      numero_celular,
      correo_electronico,
      discapacidad,
      tipo_formacion,
      profesion,
      ocupacion,
      fecha_ultimo_examen: fechaExamenDate,
      competidor,
      modalidad_competencia,
      rol_club,
      id_club: idClubFromSession,
    });

    const res = await fetch("/api/deportista", {
      method: "POST",
      body: JSON.stringify({
        nombre,
        apellidos,
        tipo_identificacion,
        numero_identificacion,
        grado_cinturon,
        genero,
        fecha_nacimiento: fechaNacimientoDate,
        lugar_nacimiento,
        rh,
        eps,
        direccion,
        municipio,
        barrio,
        estrato: estratoInt,
        numero_celular,
        correo_electronico,
        discapacidad,
        tipo_formacion,
        profesion,
        ocupacion,
        fecha_ultimo_examen: fechaExamenDate,
        competidor,
        modalidad_competencia,
        rol_club,
        id_club: idClubFromSession,
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
    router.push("/clubes/dashboard");
  };

  return (
    <div className="flex justify-center items-center relative">
      {/* Imagen de fondo fija */}
      <div
        style={{
          backgroundImage: 'url("/registar_clubFondo.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.7, // Opacidad sobre la imagen
          zIndex: -1, // Para que la imagen esté detrás del contenido
          backgroundAttachment: "fixed", // Fijar la imagen de fondo
        }}
      ></div>

      <form
        className="bg-[#313131] p-10 2xl:w-1/4 md:w-1/2 rounded-2xl mt-28 mb-16"
        onSubmit={onSubmit}
      >
        <h1 className="flex items-center mb-8 text-2xl font-bold text-white">
          <FaFistRaised className="text-white mr-4" />
          REGISTRA UN NUEVO DEPORTISTA
        </h1>

        {/* Mensaje de error */}
        {error && <p className="text-red-500 text-lg mb-4">{error}</p>}

        <label htmlFor="nombre" className="font-bold text-xl text-white">
          Nombre del deportista
        </label>
        <input
          type="text"
          id="nombre"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-white text-xl"
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />
        <label htmlFor="apellidos" className="font-bold text-xl text-white">
          Apellidos del deportista
        </label>
        <input
          type="text"
          id="apellidos"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-white text-xl"
          placeholder="Apellidos"
          onChange={(e) => setApellidos(e.target.value)}
          value={apellidos}
        />
        <label
          htmlFor="tipo_identificacion"
          className="font-bold text-xl text-white"
        >
          Tipo de identificación
        </label>
        <select
          id="tipo_identificacion"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-black text-xl"
          onChange={(e) => setTipo_identificacion(e.target.value)}
          value={tipo_identificacion}
        >
          <option value="" disabled>
            Selecciona un tipo de identificación
          </option>
          <option value="Registro Civil">Registro Civil</option>
          <option value="Tarjeta de identidad">Tarjeta de identidad</option>
          <option value="CC">Cédula de ciudadanía</option>
          <option value="CE">Cédula de extranjería</option>
          <option value="PA">Pasaporte</option>
        </select>

        <label
          htmlFor="numero_identificacion"
          className="font-bold text-xl text-white"
        >
          Número de identificación
        </label>
        <input
          type="text"
          id="numero_identificacion"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-white text-xl"
          placeholder="Número de identificación"
          onChange={(e) => setNumero_identificacion(e.target.value)}
          value={numero_identificacion}
        />
        <label
          htmlFor="grado_cinturon"
          className="font-bold text-xl text-white"
        >
          Grado de cinturón
        </label>
        <select
          id="grado_cinturon"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-black text-xl"
          onChange={(e) => setGrado_cinturon(e.target.value)}
          value={grado_cinturon}
        >
          <option value="" disabled>
            Selecciona un Grado
          </option>
          <option value="Blanco">Cinturon Blanco</option>
          <option value="Amarillo">Cinturon Amarillo</option>
          <option value="Verde">Cinturon Verde</option>
          <option value="Azul">Cinturon Azul</option>
          <option value="Rojo">Cinturon Rojo</option>
          <option value="Negro Primer Dan">Cinturon Negro Primer Dan</option>
          <option value="Negro Segundo Dan">Cinturon Negro Segundo Dan</option>
          <option value="Negro Tercer Dan">Cinturon Negro Tercer Dan</option>
          <option value="Negro Cuarto Dan">Cinturon Negro Cuarto Dan</option>
          <option value="Negro Quinto Dan">Cinturon Negro Quinto Dan</option>
          <option value="Negro Sexto Dan">Cinturon Negro Sexto Dan</option>
          <option value="Negro Septimo Dan">Cinturon Negro Septimo Dan</option>
          <option value="Negro Octavo Dan">Cinturon Negro Octavo Dan</option>
          <option value="Negro Noveno Dan">Cinturon Negro Noveno Dan</option>
        </select>
        <label htmlFor="genero" className="font-bold text-xl text-white">
          Genero del Deportista
        </label>
        <select
          id="genero"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-black text-xl"
          onChange={(e) => setGenero(e.target.value)}
          value={genero}
        >
          <option value="" disabled>
            Selecciona una Opcion
          </option>
          <option value="Femenino">Femenino</option>
          <option value="Maculino">Maculino</option>
        </select>
        <label
          htmlFor="fecha_nacimiento"
          className="font-bold text-xl text-white"
        >
          Fecha de nacimiento
        </label>

        <input
          type="date"
          id="fecha_nacimiento"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-white text-xl"
          onChange={(e) => setFecha_nacimiento(e.target.value)}
          value={fecha_nacimiento}
          max={new Date().toISOString().split("T")[0]} // Para restringir la fecha a no ser mayor que la actual
        />

        <label
          htmlFor="lugar_nacimiento"
          className="font-bold text-xl text-white"
        >
          Lugar de nacimiento
        </label>

        <input
          type="text"
          id="lugar_nacimiento"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-white text-xl"
          onChange={(e) => setLugar_nacimiento(e.target.value)}
          value={lugar_nacimiento}
        />

        <label htmlFor="RH" className="font-bold text-xl text-white">
          RH
        </label>
        <select
          id="RH"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-black text-xl"
          onChange={(e) => setRh(e.target.value)}
          value={rh}
        >
          <option value="" disabled>
            Selecciona una Opcion
          </option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>

        <label htmlFor="eps" className="font-bold text-xl text-white">
          EPS
        </label>
        <input
          type="text"
          id="eps"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-white text-xl"
          placeholder="EPS"
          onChange={(e) => setEps(e.target.value)}
          value={eps}
        />

        <label htmlFor="direccion" className="font-bold text-xl text-white">
          Dirección
        </label>
        <input
          type="text"
          id="direccion"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-white text-xl"
          placeholder="Dirección"
          onChange={(e) => setDireccion(e.target.value)}
          value={direccion}
        />

        <label htmlFor="municipio" className="font-bold text-xl text-white">
          Municipio
        </label>
        <input
          type="text"
          id="municipio"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-white text-xl"
          placeholder="Municipio"
          onChange={(e) => setMunicipio(e.target.value)}
          value={municipio}
        />

        <label htmlFor="barrio" className="font-bold text-xl text-white">
          Barrio
        </label>
        <input
          type="text"
          id="barrio"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-white text-xl"
          placeholder="Barrio"
          onChange={(e) => setBarrio(e.target.value)}
          value={barrio}
        />

        <label htmlFor="estrato" className="font-bold text-xl text-white">
          Estrato
        </label>
        <input
          type="number"
          id="estrato"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-white text-xl"
          placeholder="Estrato"
          onChange={(e) => setEstrato(e.target.value)}
          value={estrato}
        />

        <label
          htmlFor="numero_celular"
          className="font-bold text-xl text-white"
        >
          Número de celular
        </label>
        <input
          type="text"
          id="numero_celular"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-white text-xl"
          placeholder="Número de celular"
          onChange={(e) => setNumero_celular(e.target.value)}
          value={numero_celular}
        />

        <label
          htmlFor="correo_electronico"
          className="font-bold text-xl text-white"
        >
          Correo electrónico
        </label>
        <input
          type="email"
          id="correo_electronico"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-white text-xl"
          placeholder="Correo electrónico"
          onChange={(e) => setCorreo_electronico(e.target.value)}
          value={correo_electronico}
        />

        <label htmlFor="discapacidad" className="font-bold text-xl text-white">
          Si cuenta con algun tipo de discapacidad, ingresela por favor
        </label>
        <input
          type="text"
          id="discapacidad"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-white text-xl"
          placeholder="Discapacidad"
          onChange={(e) => setDiscapacidad(e.target.value)}
          value={discapacidad}
        />

        <label
          htmlFor="tipo_formacion"
          className="font-bold text-xl text-white"
        >
          Tipo de formación
        </label>
        <input
          type="text"
          id="tipo_formacion"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-white text-xl"
          placeholder="Correo electrónico"
          onChange={(e) => setTipo_formacion(e.target.value)}
          value={tipo_formacion}
        />

        <label htmlFor="profesion" className="font-bold text-xl text-white">
          Profesión
        </label>
        <input
          type="text"
          id="profesion"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-white text-xl"
          placeholder="Profesión"
          onChange={(e) => setProfesion(e.target.value)}
          value={profesion}
        />

        <label htmlFor="ocupacion" className="font-bold text-xl text-white">
          Ocupación
        </label>
        <input
          type="text"
          id="ocupacion"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-white text-xl"
          placeholder="Ocupación"
          onChange={(e) => setOcupacion(e.target.value)}
          value={ocupacion}
        />

        <label
          htmlFor="fecha_ultimo_examen"
          className="font-bold text-xl text-white"
        >
          Fecha del último examen
        </label>
        <input
          type="date"
          id="fecha_ultimo_examen"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-white text-xl"
          onChange={(e) => setFecha_ultimo_examen(e.target.value)}
          value={fecha_ultimo_examen}
          max={new Date().toISOString().split("T")[0]} // Para restringir la fecha a no ser mayor que la actual
        />

        <label htmlFor="competidor" className="font-bold text-xl text-white">
          ¿Es competidor?
        </label>
        <select
          id="competidor"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-black text-xl"
          onChange={(e) => setCompetidor(e.target.value === "true")} // Convertir a booleano
          value={competidor} // Aseguramos que los valores sean "true" o "false"
        >
          <option value="" disabled>
            Selecciona una Opción
          </option>
          <option value="true">Sí</option>
          <option value="false">No</option>
        </select>

        <label
          htmlFor="modalidad_competencia"
          className="font-bold text-xl text-white"
        >
          Si es competidor, seleccione modalidad de competencia
        </label>
        <select
          id="modalidad_competencia"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-black text-xl"
          onChange={(e) => setModalidad_competencia(e.target.value)}
          value={modalidad_competencia}
        >
          <option value="" disabled>
            Selecciona una Opción
          </option>
          <option value="Combate">Combate</option>
          <option value="Poomsaes">Poomsaes</option>
          <option value="Combate y Poomsaes">Combate y Poomsaes</option>
        </select>

        <label htmlFor="rol_club" className="font-bold text-xl text-white">
          Rol en el club
        </label>
        <input
          type="text"
          id="rol_club"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-white text-xl"
          placeholder="Rol en el club"
          onChange={(e) => setRol_club(e.target.value)}
          value={rol_club}
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

export default RegistarDeportista;
