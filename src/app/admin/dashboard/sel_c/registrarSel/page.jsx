"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

function RegistrarSelPage() {
  const router = useRouter();
  const [mayor_logro, setMayor_logro] = useState("");
  const [categoria, setCategoria] = useState("");
  const [id_deportista, setId_deportista] = useState("");
  const [error, setError] = useState(""); // Estado para mostrar el error

  const categoriaNum = Number(categoria);

  const isFormValid = () => {
    return mayor_logro && id_deportista && categoria;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      setError("Por favor, llena todos los campos.");
      return; // Detener el envío si el formulario no es válido
    }

    setError(""); // Limpiar el mensaje de error si todo está bien

    const res = await fetch("/api/selCombate", {
      method: "POST",
      body: JSON.stringify({
        mayor_logro,
        categoria: categoriaNum,
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
    router.push("/admin/dashboard/sel_c");
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
        <label htmlFor="categoria" className="font-bold text-xl text-white">
          Categoria del deportista
        </label>
        <select
          id="categoria"
          className="border border-slate-500 rounded-2xl p-2 mb-5 w-full text-black text-xl"
          onChange={(e) => setCategoria(e.target.value)}
          value={categoria}
        >
          <option value="" disabled>
            Selecciona un tipo de identificación
          </option>
          <option value="-46">-46</option>
          <option value="-49">-49</option>
          <option value="-53">-53</option>
          <option value="-54">-54</option>
          <option value="-57">-57</option>
          <option value="-58">-58</option>
          <option value="-62">-62</option>
          <option value="-63">-63</option>
          <option value="-67">-67</option>
          <option value="-68">-68</option>
          <option value="-73">-73</option>
          <option value="73">73</option>
          <option value="-74">-74</option>
          <option value="-80">-80</option>
          <option value="-87">-87</option>
          <option value="87">87</option>
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

export default RegistrarSelPage;
