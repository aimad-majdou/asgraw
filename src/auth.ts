import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { prisma } from './db/prisma';
import { logger } from './lib/logger';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    // https://authjs.dev/guides/extending-the-session
    async session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
  logger: {
    error: (code, ...message) => logger.error(code, ...message),
    warn: (code, ...message) => logger.warn(code, ...message),
    debug: (code, ...message) => logger.debug(code, ...message),
  },
});
