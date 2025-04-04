import ClubCard from "@/components/ClubCard";
import prisma from "@/libs/prisma"; // Asegúrate de que aquí importas correctamente 'prisma'

async function getClubes() {
  // Cambié 'Club' por 'club' para que coincida con el modelo en minúsculas
  const clubs = await prisma.club.findMany({
    orderBy: {
      nombre_club: "asc", // 'asc' para orden ascendente (alfabéticamente)
    },
  });
  return clubs;
}

export const dynamic = "force-dynamic";

async function VerDeportistas() {
  const clubs = await getClubes();
  return (
    <div
      className="flex justify-center items-center relative"
      style={{ minHeight: "100vh" }}
    >
      <div
        style={{
          backgroundImage: 'url("/fondo_verCC.jpg")',
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
      <div className="grid grid-cols-3 gap-6 mt-36 sm:mt-20 mb-16">
        {clubs.map((club) => (
          <ClubCard
            key={club.id}
            club={club}
            ruta={"/admin/dashboard/ver_d/"}
          />
        ))}
      </div>
    </div>
  );
}

export default VerDeportistas;
