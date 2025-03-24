import Link from "next/link";
import Image from "next/image";

function AboutUs() {
  return (
    <>
      <div className="mt-8 md:mt-12 lg:mt-16 mx-4 sm:mx-8 md:mx-12 lg:mx-16">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          Acerca de Nosotros
        </h1>
        <hr />
        <p className="text-base md:text-lg lg:text-xl mt-4 md:mt-7">
          La Liga Antioqueña de Taekwondo (LianTKD) es la organización que rige
          el Taekwondo en el departamento de Antioquia, la cual es miembro de la
          Federación Colombiana de Taekwondo (FCT). La Liga Antioqueña de
          Taekwondo lidera este deporte de combate desde los principios de
          filosóficos del arte marcial coreano con los valores del olimpismo.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 lg:gap-10 my-6 md:my-8 lg:my-12">
          <div className="w-full md:w-1/3">
            <Image
              src="/olimpicos.jpg"
              alt="imagen de tkd"
              width={350}
              height={350}
              className="rounded-md w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/3">
            <Image
              src="/taekwondo.jpg"
              alt="imagen de tkd"
              width={350}
              height={350}
              className="rounded-md w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/3">
            <Image
              src="/2.jpg"
              alt="imagen de tkd"
              width={350}
              height={350}
              className="rounded-md w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#E2F5E1] p-4 sm:p-6 md:p-8 lg:p-10 text-center sm:text-left">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">
          Registra Tus Deportistas
        </h1>
        <p className="text-base md:text-lg lg:text-xl mt-3 md:mt-5 lg:mt-7">
          Ven y se parte de la liga Antioqueña de Taekwondo, animate y registra
          tús deportistas para que sean el futuro del Taekwondo en nuestro
          departamento.
        </p>
        <Link href={"/clubes/login"}>
          <button className="bg-[#2F7D32] text-white py-2 px-4 sm:py-3 sm:px-5 md:py-4 md:px-7 rounded-full hover:bg-[#2A6A2A] focus:outline-none focus:ring-2 focus:ring-[#2F7D32] focus:ring-opacity-50 transition duration-300 mt-4 sm:mt-6 md:mt-8 hover:cursor-pointer">
            Registrar ahora
          </button>
        </Link>
      </div>
    </>
  );
}

export default AboutUs;
