"use client";
import { useRouter } from "next/navigation";

function AthleteCard({ deportista, ruta, categoria, mayorLogro }) {
  const router = useRouter();
  return (
    <div
      className="bg-[#00843D] p-3 hover:bg-[#313131] hover:cursor-pointer rounded-xl text-white transform transition-all duration-500 hover:scale-110 hover:translate-y-[-10px] hover:z-10"
      onClick={() => {
        router.push(`${ruta}/${deportista.id}`);
      }}
    >
      <h2 className="font-bold text-3xl mb-2">
        {deportista.nombre} {deportista.apellidos}
      </h2>{" "}
      {/* Aquí usamos 'club' */}
      <p className="text-xl">{deportista.numero_identificacion}</p>
      <p>{deportista.modalidad_competencia}</p>
      <p>{categoria}</p>
      <p>{mayorLogro}</p>
    </div>
  );
}

export default AthleteCard;
