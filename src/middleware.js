import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // Obtener el token JWT de la sesión
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Si no hay token (usuario no está autenticado)
  if (!token) {
    // Redirigir al login si no está autenticado
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Verifica las rutas específicas
  const { pathname } = req.nextUrl;

  // Verifica si el usuario es un administrador
  if (pathname.startsWith("/admin") && token.role !== "admin") {
    // Si es un club y trata de acceder a admin, redirige
    return NextResponse.redirect(new URL("/clubes/dashboard", req.url));
  }

  // Verifica si el usuario es un club
  if (pathname.startsWith("/clubes") && token.role !== "club") {
    // Si es un admin y trata de acceder a club, redirige
    return NextResponse.redirect(new URL("/admin/dashboard", req.url));
  }

  // Permitir la navegación si el usuario está autorizado
  return NextResponse.next();
}

// Especificar las rutas donde el middleware debe ejecutarse
export const config = {
  matcher: ["/admin/dashboard/:path*", "/clubes/dashboard/:path*"], // Aplicar el middleware a las rutas de admin y club
};
