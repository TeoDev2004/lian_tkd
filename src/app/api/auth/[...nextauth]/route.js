import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/libs/prisma";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    // Proveedor de administrador
    CredentialsProvider({
      name: "Admin",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (credentials.loginType === "admin") {
          const admin = await db.Admin.findUnique({
            where: { correo_admin: credentials.email },
          });
          if (!admin) throw new Error("Usuario no encontrado");
          const matchPass = await bcrypt.compare(
            credentials.password,
            admin.password
          );
          if (!matchPass) throw new Error("Contraseña incorrecta");

          return {
            id: admin.id,
            name: admin.nombre_admin,
            email: admin.correo_admin,
            role: "admin", // Incluye el rol en el objeto de sesión
          };
        } else if (credentials.loginType === "club") {
          // Lógica para login de clubes
          const club = await db.Club.findUnique({
            where: { correo_institucional: credentials.email },
          });
          if (!club) throw new Error("Usuario no encontrado");
          const matchPass = await bcrypt.compare(
            credentials.password,
            club.password
          );
          if (!matchPass) throw new Error("Contraseña incorrecta");

          return {
            id: club.id,
            name: club.nombre_club,
            email: club.correo_institucional,
            role: "club", // Incluye el rol en el objeto de sesión
          };
        }

        throw new Error("Tipo de usuario no válido");
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt", // Usamos JWT para la sesión
    maxAge: 15 * 60, // 15 minutos de expiración de la sesión (en segundos)
    updateAge: 10 * 60, // Actualizar la sesión cada 10 minutos
  },
  callbacks: {
    async session({ session, token }) {
      // Incluir el rol y el ID en el objeto de sesión
      if (token.role) {
        session.user.role = token.role;
        session.user.id = token.id;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role; // Almacena el rol en el token
        token.id = user.id;
        token.expires = Date.now() + 1000 * 60 * 15; // Expiración de la sesión en 15 minutos
      }
      // Verifica si la sesión ha expirado
      if (Date.now() > token.expires) {
        return {}; // Si ha expirado, devuelve un objeto vacío (cierra la sesión)
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
