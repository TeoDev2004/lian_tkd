"use client";
import { useRouter } from "next/navigation";

function ClubCard({ club, ruta }) {
  const router = useRouter();
  return (
    <div
      className="bg-[#00843D] p-3 hover:bg-[#313131] hover:cursor-pointer rounded-xl text-white transform transition-all duration-500 hover:scale-110 hover:translate-y-[-10px] hover:z-10"
      onClick={() => {
        router.push(`${ruta}/${club.id}`);
      }}
    >
      <h2 className="font-bold text-3xl mb-2">{club.nombre_club}</h2>{" "}
      {/* Aquí usamos 'club' */}
      <p className="text-xl">{club.nombre_presidente}</p>
      <p>{club.direccion}</p>
    </div>
  );
}

export default ClubCard;
