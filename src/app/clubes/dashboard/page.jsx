import QuotesGallery from "@/components/Slider";

const quotesData = [
  {
    text: "Registrar Un deportista",
    author: "DEPORTISTAS",
    image: "/sel-2023.jpeg",
    position: "bg-[72%_35%]",
    link: "/clubes/dashboard/registrar_d",
  },
  {
    text: "Ver y Actualizar deportistas",
    author: "DEPORTISTAS",
    image: "/sel-femenina.jpeg",
    position: "bg-[60%_8%]",
    link: "/clubes/dashboard/ver_d",
  },
];

export default function RegistrarC() {
  return (
    <div className="h-screen">
      <QuotesGallery quotes={quotesData} />
    </div>
  );
}
