import Link from "next/link";

export default function QuotesGallery({ quotes }) {
  return (
    <div className="flex flex-col md:flex-row h-screen w-screen bg-black">
      {quotes.map((quote, index) => (
        <Link
          href={quote.link}
          key={index}
          className={`group relative flex-1 bg-cover bg-center overflow-hidden transition-all duration-700 ease-in-out filter saturate-90 hover:saturate-120 hover:flex-[2] ${quote.position}`}
          style={{ backgroundImage: `url(${quote.image})` }}
        >
          {/* Capa oscura para mejor visibilidad */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

          {/* Cita */}
          <div className="absolute left-10 bottom-1/4 opacity-100 md:opacity-0 translate-x-10 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:translate-x-0">
            <p className="text-white text-2xl italic font-semibold">
              {quote.text}
              <span className="block text-lg font-bold mt-2 text-gray-300">
                — {quote.author}
              </span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
