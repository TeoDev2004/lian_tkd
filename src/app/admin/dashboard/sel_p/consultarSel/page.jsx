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
            ruta={"/admin/dashboard/sel_p/consultarSel"}
            categoria={deportista.seleccion_poomsae[0]?.modalidad}
            mayorLogro={deportista.seleccion_poomsae[0]?.mayor_logro}
          />
        ))}
      </div>
    </section>
  );
}

export default ConsultarSelP;
