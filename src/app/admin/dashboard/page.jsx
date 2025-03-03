import QuotesGallery from "@/components/Slider";

const quotesData = [
  {
    text: "Registrar Clubes",
    author: "CLUBES",
    image: "/primera.jpeg",
    position: "bg-[72%_35%]",
    link: "/admin/dashboard/registrar_c",
  },
  {
    text: "Ver y Actualizar Clubes",
    author: "CLUBES",
    image: "/segunda.jpeg",
    position: "bg-[60%_8%]",
    link: "/admin/dashboard/ver_c",
  },
  {
    text: "Ver Deportistas",
    author: "DEPORTISTAS",
    image: "/ver_deportistas.jpeg",
    position: "bg-[52%_8%]",
    link: "/admin/dashboard/ver_d",
  },
  {
    text: "Selección Antioquia de Combate",
    author: "SELECCIÓN ANTIOQUIA",
    image: "/sel_combate.jpeg",
    position: "bg-[45%_8%]",
    link: "/admin/dashboard/sel_c",
  },
  {
    text: "Selección Antioquia de Poomsaes",
    author: "SELECCIÓN ANTIOQUIA",
    image: "/sel_poomsases.jpeg",
    position: "bg-[45%_25%]",
    link: "/admin/dashboard/sel_p",
  },
];

export default function RegistrarC() {
  return (
    <div className="h-screen">
      <QuotesGallery quotes={quotesData} />
    </div>
  );
}
