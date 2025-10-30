// TEMPORALMENTE COMENTADO PARA DESARROLLO SIN BASE DE DATOS
// import NextAuth from 'next-auth';
// import { PrismaAdapter } from '@auth/prisma-adapter';
// import GoogleProvider from 'next-auth/providers/google';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import { prisma } from '@/lib/prisma';
// import bcrypt from 'bcryptjs';
// import { z } from 'zod';

// const loginSchema = z.object({
//   email: z.string().email(),
//   password: z.string().min(6),
// });

// export const { handlers, auth, signIn, signOut } = NextAuth({
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//     CredentialsProvider({
//       name: 'credentials',
//       credentials: {
//         email: { label: 'Email', type: 'email' },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials) {
//         try {
//           const { email, password } = loginSchema.parse(credentials);

//           const user = await prisma.user.findUnique({
//             where: { email },
//           });

//           if (!user || !user.password) {
//             return null;
//           }

//           const isPasswordValid = await bcrypt.compare(password, user.password);

//           if (!isPasswordValid) {
//             return null;
//           }
//           return {
//             id: user.id,
//             email: user.email,
//             name: user.name,
//             role: user.role,
//           };
//         } catch {
//           return null;
//         }
//       },
//     }),
//   ],
//   session: {
//     strategy: 'jwt',
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.role = user.role;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (token) {
//         session.user.id = token.sub!;
//         session.user.role = token.role as string;
//       }
//       return session;
//     },
//   },
//   pages: {
//     signIn: '/auth/signin',
//     signUp: '/auth/signup',
//   },
// });

// MOCK AUTH PARA DESARROLLO
export const handlers = {
  GET: () => new Response('Auth disabled for development'),
  POST: () => new Response('Auth disabled for development'),
};

export const auth = () => null;
export const signIn = () => Promise.resolve();
export const signOut = () => Promise.resolve();
