import Image from "next/image";

function ImagenFondo() {
  return (
    <div className="relative w-full h-[50vh]">
      <Image
        src="/registar_clubFondo.jpg"
        alt="Taekwondo"
        fill
        className="object-cover"
        quality={100}
      />
      {/* Cuadro de texto superpuesto con diseño responsive */}
      <div className="absolute bottom-0 bg-black/70 text-white p-4 sm:p-6 md:p-10 lg:p-14 w-full md:w-auto md:max-w-[90%] lg:max-w-[80%]">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-1 md:mb-2">
          ¡Bienvenido a la Liga Antioqueña de Taekwondo!
        </h1>
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl">
          Descubre la pasión, disciplina y energía del Taekwondo con nosotros,
          ¡Carga tus deportistas ahora!.
        </p>
      </div>
    </div>
  );
}

export default ImagenFondo;
