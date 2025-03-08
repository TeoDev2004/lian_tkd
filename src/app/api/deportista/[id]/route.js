import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET(request, context) {
  const { params } = await context; // 🔥 Ahora esperamos la promesa correctamente

  if (!params?.id) {
    return NextResponse.json({ error: "ID no proporcionado" }, { status: 400 });
  }

  const id = Number(params.id);

  const deportista = await prisma.deportista.findUnique({
    where: { id },
  });

  if (!deportista) {
    return NextResponse.json(
      { error: "Deportista no encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json(deportista);
}

export async function PUT(request, context) {
  const { params } = await context; // ✅ Esperamos el params correctamente

  if (!params?.id) {
    return NextResponse.json({ error: "ID no proporcionado" }, { status: 400 });
  }
  const id = Number(params.id);

  const data = await request.json();

  try {
    const existingDeportista = await prisma.deportista.findUnique({
      where: { id },
    });

    if (!existingDeportista) {
      return NextResponse.json(
        { error: "Deportista no encontrado" },
        { status: 404 }
      );
    }

    const deportistaUpdate = await prisma.deportista.update({
      where: { id },
      data: { ...data },
    });

    return NextResponse.json(deportistaUpdate);
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
    const deportistaRemove = await prisma.deportista.delete({
      where: { id },
    });

    return NextResponse.json(deportistaRemove);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
