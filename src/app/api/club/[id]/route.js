import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import bcrypt from "bcrypt";

export async function GET(request, context) {
  const { params } = await context; // 🔥 Ahora esperamos la promesa correctamente

  if (!params?.id) {
    return NextResponse.json({ error: "ID no proporcionado" }, { status: 400 });
  }

  const id = Number(params.id);

  const club = await prisma.club.findUnique({
    where: { id },
  });

  if (!club) {
    return NextResponse.json({ error: "Club no encontrado" }, { status: 404 });
  }

  return NextResponse.json(club);
}

export async function PUT(request, context) {
  const { params } = await context; // ✅ Esperamos el params correctamente

  if (!params?.id) {
    return NextResponse.json({ error: "ID no proporcionado" }, { status: 400 });
  }

  const id = Number(params.id);
  const data = await request.json();

  try {
    const existingClub = await prisma.club.findUnique({ where: { id } });

    if (!existingClub) {
      return NextResponse.json(
        { error: "Club no encontrado" },
        { status: 404 }
      );
    }

    let newPassword = existingClub.password;

    if (data.password && data.password !== existingClub.password) {
      const saltRounds = 10;
      newPassword = await bcrypt.hash(data.password, saltRounds);
    }

    const clubUpdate = await prisma.club.update({
      where: { id },
      data: { ...data, password: newPassword },
    });

    return NextResponse.json(clubUpdate);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, context) {
  const { params } = await context; // 🛠️ Esperamos la promesa aquí también

  if (!params?.id) {
    return NextResponse.json({ error: "ID no proporcionado" }, { status: 400 });
  }

  const id = Number(params.id);

  try {
    const clubRemoved = await prisma.club.delete({
      where: { id },
    });

    return NextResponse.json(clubRemoved);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
