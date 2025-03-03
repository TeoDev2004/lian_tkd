import Link from "next/link";
import Image from "next/image";

function AboutUs() {
  return (
    <>
      <div className="mt-16 mx-16">
        <h1 className="font-bold text-4xl">Acerca de Nosotros</h1>
        <hr />
        <p className="text-xl mt-7">
          La Liga Antioqueña de Taekwondo (LianTKD) es la organización que rige
          el Taekwondo en el departamento de Antioquia, la cual es miembro de la
          Federación Colombiana de Taekwondo (FCT). La Liga Antioqueña de
          Taekwondo lidera este deporte de combate desde los principios de
          filosóficos del arte marcial coreano con los valores del olimpismo.
        </p>
        <div className="flex gap-10 my-12">
          <Image
            src="/Beneficios-del-taekwondo.jpg"
            alt="imagen de tkd"
            width={350}
            height={350}
            className="rounded-md"
          />
          <Image
            src="/taekwondo.jpg"
            alt="imagen de tkd"
            width={350}
            height={350}
            className="rounded-md"
          />
          <Image
            src="/2.jpg"
            alt="imagen de tkd"
            width={350}
            height={350}
            className="rounded-md"
          />
        </div>
      </div>
      <div className="bg-[#E2F5E1] p-10">
        <h1 className="font-bold text-3xl">Registra Tu Club</h1>
        <p className="text-xl mt-7">
          Ven y se parte de la liga Antioqueña de Taekwondo, animate y registra
          tús deportistas para que sean el futuro del Taekwondo en nuestro
          departamento.
        </p>
        <Link href={"/clubes"}>
          <button className="bg-[#2F7D32] text-white py-4 px-7 rounded-full hover:bg-[#2A6A2A] focus:outline-none focus:ring-2 focus:ring-[#2F7D32] focus:ring-opacity-50 transition duration-300 mt-8">
            Registrar ahora
          </button>
        </Link>
      </div>
    </>
  );
}

export default AboutUs;
