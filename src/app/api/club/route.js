import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import bcrypt from "bcrypt";

export async function GET() {
  const clubes = await prisma.club.findMany();
  return NextResponse.json(clubes);
}

export async function POST(req) {
  const {
    nombre_club,
    direccion,
    nombre_presidente,
    id_presidente,
    telefono_presidente,
    correo_institucional,
    password,
  } = await req.json();

  // Verificar si el correo electrónico ya existe en la base de datos
  const existingClub = await prisma.club.findUnique({
    where: {
      correo_institucional, // Buscar por correo electrónico
    },
  });

  if (existingClub) {
    // Si ya existe, retornar un error
    return NextResponse.json(
      { error: "Ya existe un club registrado con este correo electrónico" },
      { status: 400 }
    );
  }

  // Encriptar la contraseña con bcrypt
  const salt = await bcrypt.genSalt(10); // Generar un salt
  const hashedPassword = await bcrypt.hash(password, salt); // Encriptar la contraseña

  // Crear el club con la contraseña encriptada
  const club = await prisma.club.create({
    data: {
      nombre_club,
      direccion,
      nombre_presidente,
      id_presidente,
      telefono_presidente,
      correo_institucional,
      password: hashedPassword, // Guardar la contraseña encriptada
    },
  });

  return NextResponse.json(club);
}
