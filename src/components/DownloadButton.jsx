// components/DownloadButton.js
"use client"; // Esto marca el componente como ejecutado en el cliente

import { useState } from "react";

function DownloadButton({ clubId }) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true); // Muestra que la descarga está en progreso

    try {
      // Usamos una URL absoluta para evitar problemas con rutas relativas
      const response = await fetch(
        `${window.location.origin}/api/deportista/descarga?id=${clubId}`
      );

      if (!response.ok) {
        throw new Error("Hubo un error al generar el archivo.");
      }

      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "deportistas.xlsx"; // Nombre del archivo
      link.click(); // Simula un clic para la descarga
    } catch (error) {
      console.error("Error al descargar el archivo:", error);
    } finally {
      setLoading(false); // Termina el estado de carga
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="px-6 py-2 mt-4 bg-slate-700 text-white rounded-lg hover:cursor-pointer hover:bg-slate-900"
      disabled={loading} // Deshabilitar el botón mientras se está cargando
    >
      {loading ? "Cargando..." : "Descargar Deportistas"}
    </button>
  );
}

export default DownloadButton;
