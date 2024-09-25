import { logger } from "@/lib/logger";
import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { Prisma, PrismaClient } from "@prisma/client";
import ws from "ws";

// Set WebSocket constructor for Neon configuration
neonConfig.webSocketConstructor = ws;

// Use the DATABASE_URL from your environment variables
const connectionString = process.env.DATABASE_URL!;

// Create a new Neon pool connection
const pool = new Pool({ connectionString });

// Use the Neon adapter for Prisma
const adapter = new PrismaNeon(pool);

// Create a new PrismaClient instance with the Neon adapter
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma: PrismaClient<
  Prisma.PrismaClientOptions,
  Prisma.LogLevel | Prisma.LogDefinition,
  any
> =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
    log: [
      {
        emit: "event",
        level: "query",
      },
      {
        emit: "event",
        level: "error",
      },
      {
        emit: "event",
        level: "info",
      },
      {
        emit: "event",
        level: "warn",
      },
    ],
  });

function sanitizeParams(params: string): string {
  // Implement sanitization logic based on your application's needs
  return params.replace(/password=.*?(&|$)/, "password=***$1");
}

// Listener for 'query' events
prisma.$on("query", (e) => {
  logger.debug("Prisma::Query:" + e.query.replace(/\\"/g, '"'));
  logger.debug("Prisma::Params:" + sanitizeParams(e.params));
  logger.debug("Prisma::Duration:" + e.duration + "ms");
});

// Listener for 'info' events
prisma.$on("info", (e) => {
  logger.info(`Prisma: ${e.message}`);
});

// Listener for 'warn' events
prisma.$on("warn", (e) => {
  logger.warn(`Prisma: ${e.message}`);
});

// Listener for 'error' events
prisma.$on("error", (e) => {
  logger.error(`Prisma: ${e.message}`);
});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
