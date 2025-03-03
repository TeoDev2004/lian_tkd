import Link from "next/link";
import { GiHighKick } from "react-icons/gi";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function Navbar() {
  const session = await getServerSession(authOptions);

  // Aquí colocas el console.log para verificar el contenido de la sesión
  console.log("Sesión actual:", session);

  const isAdmin = session?.user?.role === "admin";
  const isClub = session?.user?.role === "club";

  return (
    <div>
      <nav className="bg-[#313131] fixed top-0 left-0 right-0 z-50 mb-0 flex justify-between text-2xl text-white font-bold px-20 p-3">
        <Link href={"/"}>
          <h3 className="flex items-center gap-4">
            <GiHighKick className="text-3xl mr-2" />
            Liga Antioqueña de Taekwondo
          </h3>
        </Link>

        <ul className="text-2xl gap-10 flex items-center">
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
      </nav>
    </div>
  );
}

export default Navbar;
