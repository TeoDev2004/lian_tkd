import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET() {
  const selC = await prisma.SeleccionCombate.findMany();
  return NextResponse.json(selC);
}

export async function POST(req) {
  const { mayor_logro, categoria, id_deportista } = await req.json();

  const deportista = await prisma.deportista.findUnique({
    where: {
      numero_identificacion: id_deportista, // O el campo que corresponda en tu modelo de "deportista"
    },
  });

  if (!deportista) {
    // Si el deportista no existe, retornar un mensaje de error
    return NextResponse.json(
      { error: "Deportista no registrado en la base de datos de los clubes" },
      { status: 404 }
    );
  }

  // Verificar si el id ya existe en la base de datos
  const existingSeleccion = await prisma.SeleccionCombate.findUnique({
    where: {
      id_deportista, // Buscar por id
    },
  });

  if (existingSeleccion) {
    // Si ya existe, retornar un error
    return NextResponse.json(
      { error: "Ya existe un deportista registrado con este id" },
      { status: 400 }
    );
  }

  // Crear el club con la contraseña encriptada
  const selC = await prisma.SeleccionCombate.create({
    data: {
      mayor_logro,
      categoria,
      id_deportista,
    },
  });

  return NextResponse.json(selC);
}
