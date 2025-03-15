// src/app/api/deportista/descarga/route.js

import ExcelJS from "exceljs";
import prisma from "@/libs/prisma";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const clubId = searchParams.get("id"); // Obtener el ID del club de los parámetros de la URL

    if (!clubId) {
      return new Response("Falta el parámetro id", { status: 400 });
    }

    // Obtener los deportistas para el club
    const deportistas = await prisma.deportista.findMany({
      where: {
        id_club: Number(clubId),
      },
      select: {
        nombre: true,
        apellidos: true,
        tipo_identificacion: true,
        numero_identificacion: true,
        grado_cinturon: true,
        genero: true,
        fecha_nacimiento: true,
        lugar_nacimiento: true,
        rh: true,
        eps: true,
        direccion: true,
        municipio: true,
        barrio: true,
        estrato: true,
        numero_celular: true,
        correo_electronico: true,
        discapacidad: true,
        tipo_formacion: true,
        profesion: true,
        ocupacion: true,
        fecha_ultimo_examen: true,
        competidor: true,
        modalidad_competencia: true,
        rol_club: true,
      },
    });

    if (!deportistas || deportistas.length === 0) {
      return new Response("No se encontraron deportistas", { status: 404 });
    }

    // Crear un archivo Excel
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Deportistas");

    worksheet.columns = [
      { header: "Nombre", key: "nombre" },
      { header: "Apellidos", key: "apellidos" },
      { header: "Tipo de Identificación", key: "tipo_identificacion" },
      { header: "Número de Identificación", key: "numero_identificacion" },
      { header: "Grado de Cinturón", key: "grado_cinturon" },
      { header: "Género", key: "genero" },
      { header: "Fecha de Nacimiento", key: "fecha_nacimiento" },
      { header: "Lugar de Nacimiento", key: "lugar_nacimiento" },
      { header: "RH", key: "rh" },
      { header: "EPS", key: "eps" },
      { header: "Dirección", key: "direccion" },
      { header: "Municipio", key: "municipio" },
      { header: "Barrio", key: "barrio" },
      { header: "Estrato", key: "estrato" },
      { header: "Número de Celular", key: "numero_celular" },
      { header: "Correo Electrónico", key: "correo_electronico" },
      { header: "Discapacidad", key: "discapacidad" },
      { header: "Tipo de Formación", key: "tipo_formacion" },
      { header: "Profesión", key: "profesion" },
      { header: "Ocupación", key: "ocupacion" },
      { header: "Fecha del Último Examen", key: "fecha_ultimo_examen" },
      { header: "Competidor", key: "competidor" },
      { header: "Modalidad de Competencia", key: "modalidad_competencia" },
      { header: "Rol en el Club", key: "rol_club" },
    ];

    deportistas.forEach((deportista) => {
      worksheet.addRow(deportista);
    });

    // Enviar el archivo Excel como respuesta
    const buffer = await workbook.xlsx.writeBuffer();

    return new Response(buffer, {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": "attachment; filename=deportistas.xlsx",
      },
    });
  } catch (error) {
    console.error("Error al generar el archivo Excel:", error);
    return new Response("Hubo un error al generar el archivo", { status: 500 });
  }
}
