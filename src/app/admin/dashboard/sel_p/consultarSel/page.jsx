import AthleteCard from "@/components/AthleteCard";
import prisma from "@/libs/prisma"; // Asegúrate de que aquí importas correctamente 'prisma'
async function getDeportistas() {
  const deportistas = await prisma.deportista.findMany({
    where: {
      // Filtramos a los deportistas que tienen al menos una entrada en la tabla SeleccionCombate
      seleccion_poomsae: {
        some: {
          id_deportista: {
            // Comparamos el id_deportista con el numero_identificacion
            equals: prisma.deportista.numero_identificacion,
          },
        },
      },
    },
    orderBy: {
      nombre: "asc", // 'asc' para orden ascendente (alfabéticamente)
    },
    include: {
      // Incluir los datos de SeleccionCombate para cada deportista
      seleccion_poomsae: {
        select: {
          modalidad: true, // Seleccionamos el campo 'categoria'
          mayor_logro: true,
        },
      },
    },
  });

  return deportistas;
}

export const dynamic = "force-dynamic";

async function ConsultarSelP() {
  const deportistas = await getDeportistas();
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
        {deportistas.map((deportista) => (
          <AthleteCard
            key={deportista.id}
            deportista={deportista}
            ruta={"/admin/dashboard/sel_p/consultarSel"}
            categoria={deportista.seleccion_poomsae[0]?.modalidad}
            mayorLogro={deportista.seleccion_poomsae[0]?.mayor_logro}
          />
        ))}
      </div>
    </div>
  );
}

export default ConsultarSelP;
