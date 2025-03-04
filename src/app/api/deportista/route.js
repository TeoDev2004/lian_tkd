import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET() {
  const desportistas = await prisma.Deportista.findMany();
  return NextResponse.json(desportistas);
}

export async function POST(req) {
  const {
    nombre,
    apellidos,
    tipo_identificacion,
    numero_identificacion,
    grado_cinturon,
    genero,
    fecha_nacimiento,
    lugar_nacimiento,
    rh,
    eps,
    direccion,
    municipio,
    barrio,
    estrato,
    numero_celular,
    correo_electronico,
    discapacidad,
    tipo_formacion,
    profesion,
    ocupacion,
    fecha_ultimo_examen,
    competidor,
    modalidad_competencia,
    rol_club,
    id_club,
  } = await req.json();

  // Verificar si el correo electrónico ya existe en la base de datos
  const existingDeportista = await prisma.Deportista.findUnique({
    where: {
      numero_identificacion, // Buscar por correo electrónico
    },
  });

  if (existingDeportista) {
    // Si ya existe, retornar un error
    return NextResponse.json(
      {
        error:
          "Ya existe un Deportista registrado con este número de identificación",
      },
      { status: 400 }
    );
  }

  // Crear el deportista
  const deportista = await prisma.Deportista.create({
    data: {
      nombre,
      apellidos,
      tipo_identificacion,
      numero_identificacion,
      grado_cinturon,
      genero,
      fecha_nacimiento,
      lugar_nacimiento,
      rh,
      eps,
      direccion,
      municipio,
      barrio,
      estrato,
      numero_celular,
      correo_electronico,
      discapacidad,
      tipo_formacion,
      profesion,
      ocupacion,
      fecha_ultimo_examen,
      competidor,
      modalidad_competencia,
      rol_club,
      Club: {
        connect: {
          id: id_club,
        },
      },
    },
  });

  return NextResponse.json(deportista);
}
