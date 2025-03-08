import AthleteCard from "@/components/AthleteCard";
import prisma from "@/libs/prisma"; // Asegúrate de que aquí importas correctamente 'prisma'
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function getDeportistas(parametros) {
  const session = await getServerSession(authOptions);

  // Cambié 'Club' por 'club' para que coincida con el modelo en minúsculas
  const deportistas = await prisma.deportista.findMany({
    where: {
      id_club: parametros, // Filtramos por el ID del club
    },
  });
  return deportistas;
}

export const dynamic = "force-dynamic";

async function verDeportistasIdPage(context) {
  const { params } = await context;
  const paramsId = Number(params.id);
  const deportistas = await getDeportistas(paramsId);
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
        {deportistas.map((deportista) => (
          <AthleteCard
            key={deportista.id}
            deportista={deportista}
            ruta={"/admin/dashboard/ver_d/deportistaId"}
          />
        ))}
      </div>
    </section>
  );
}

export default verDeportistasIdPage;
