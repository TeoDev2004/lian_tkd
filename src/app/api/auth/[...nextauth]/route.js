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
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      // Incluir el rol en el objeto session
      if (token.role) {
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role; // Almacena el rol en el token
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
