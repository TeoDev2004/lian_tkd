import Link from "next/link";
import { GiHighKick } from "react-icons/gi";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function Navbar() {
  const session = await getServerSession(authOptions);
  console.log("Sesión actual:", session);

  const isAdmin = session?.user?.role === "admin";
  const isClub = session?.user?.role === "club";

  return (
    <nav className="bg-[#313131] fixed top-0 left-0 right-0 z-50 text-white font-bold p-3 md:px-20">
      {/* Contenedor general */}
      <div className="flex md:flex-row flex-col items-center md:justify-between">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
          <GiHighKick className="text-3xl" />
          <h3 className="text-lg md:text-2xl">Liga Antioqueña de Taekwondo</h3>
        </Link>

        {/* Menú */}
        <ul className="flex flex-col md:flex-row text-xl gap-3 md:gap-10 mt-3 md:mt-0 items-center">
          {!session?.user ? (
            <>
              <li>
                <Link href={"/"}>Inicio</Link>
              </li>
              <li>
                <Link href={"/clubes/login"}>Manejar Deportistas</Link>
              </li>
              <li>
                <Link href={"/admin/login"}>Manejar Clubes</Link>
              </li>
            </>
          ) : (
            <>
              {isAdmin && (
                <li>
                  <Link href={"/admin/dashboard"}>Opciones de Manejo</Link>
                </li>
              )}
              {isClub && (
                <li>
                  <Link href={"/clubes/dashboard"}>Opciones de Manejo</Link>
                </li>
              )}
              <li>
                <Link href={"/api/auth/signout"}>Cerrar Sesión</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
