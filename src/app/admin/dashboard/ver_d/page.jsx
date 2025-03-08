import ClubCard from "@/components/ClubCard";
import prisma from "@/libs/prisma"; // Asegúrate de que aquí importas correctamente 'prisma'

async function getClubes() {
  // Cambié 'Club' por 'club' para que coincida con el modelo en minúsculas
  const clubs = await prisma.club.findMany();
  return clubs;
}

export const dynamic = "force-dynamic";

async function VerDeportistas() {
  const clubs = await getClubes();
  return (
    <section className="container my-30 mx-auto">
      <div
        style={{
          backgroundImage: 'url("/fondo_verCC.jpg")', // Imagen de fondo
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
      <div className="grid grid-cols-3 gap-6">
        {clubs.map((club) => (
          <ClubCard
            key={club.id}
            club={club}
            ruta={"/admin/dashboard/ver_d/"}
          />
        ))}
      </div>
    </section>
  );
}

export default VerDeportistas;
