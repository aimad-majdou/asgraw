import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
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

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
    // You can include other options here if necessary
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
