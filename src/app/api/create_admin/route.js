import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Exportamos el método POST
export async function POST(req) {
  const password = "20042214"; // Contraseña a encriptar
  const hashedPassword = await bcrypt.hash(password, 10); // 10 es el número de saltos (cost factor)

  try {
    const admin = await prisma.admin.create({
      data: {
        nombre_admin: "Mateo",
        correo_admin: "admin2@liga.com",
        password: hashedPassword, // Guardamos la contraseña encriptada
      },
    });

    // Devolver un objeto de respuesta
    return new Response(
      JSON.stringify({ message: "Administrador creado", admin }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al crear el administrador:", error);

    return new Response(
      JSON.stringify({ message: "Error al crear el administrador", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
