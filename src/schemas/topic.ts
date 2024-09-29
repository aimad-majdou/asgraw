import { Prisma } from "@prisma/client";
import * as z from "zod";

export const TopicCreateSchema = z.object({
  slug: z
    .string()
    .min(1, { message: "Title must not be empty" })
    .max(255, { message: "Title must not exceed 255 characters" })
    .regex(/^[a-z-]+$/, {
      message:
        "Title must only contain lowercase letters and hyphens (a-z, -) without spaces",
    }),

  description: z.string().min(1, { message: "Description must not be empty" }),
}) satisfies z.Schema<Prisma.TopicCreateInput>;

export const TopicUpdateSchema = z.object({
  id: z.string(),
  slug: z
    .string()
    .min(1, { message: "Title must not be empty" })
    .max(255, { message: "Title must not exceed 255 characters" })
    .regex(/^[a-z-]+$/, {
      message:
        "Title must only contain lowercase letters and hyphens (a-z, -) without spaces",
    }),

  description: z.string().min(10, { message: "Description must not be empty" }),
}) satisfies z.Schema<Prisma.TopicUpdateInput>;

export type TopicCreateSchemaType = z.infer<typeof TopicCreateSchema>;
export type TopicUpdateSchemaType = z.infer<typeof TopicUpdateSchema>;
