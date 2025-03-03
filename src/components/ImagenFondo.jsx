import Image from "next/image";

function ImagenFondo() {
  return (
    <div className="relative w-full h-[50vh]">
      {" "}
      {/* Contenedor de la imagen */}
      <Image
        src="/registar_clubFondo.jpg"
        alt="Taekwondo"
        fill // Nueva propiedad para llenar el contenedor
        className="object-cover" // Usando style para el objectFit
        quality={100}
      />
      {/* Cuadro de texto superpuesto en la esquina inferior izquierda */}
      <div className="absolute bottom-[0.15rem] bg-black/70 text-white p-14 rounded-none shadow-lg w-[80rem]">
        <h1 className="text-5xl font-bold mb-2">
          ¡Bienvenido a la Liga Antioqueña de Taekwondo!
        </h1>
        <p className="text-2xl">
          Descubre la pasión, disciplina y energía del Taekwondo con nosotros,
          ¡Carga tus deportistas ahora!.
        </p>
      </div>
    </div>
  );
}

export default ImagenFondo;
