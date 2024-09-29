"use server";

import { UnauthorizedError } from "@/errors/unauthorized-error";
import { TopicCreateSchema, TopicCreateSchemaType } from "@/schemas/topic";
import { TopicService } from "@/services/topic.service";
import { Prisma } from "@prisma/client";
import { ActionFormState } from "./actions.types";

export type CreateTopicFormState = ActionFormState<TopicCreateSchemaType>;

export async function createTopic(
  formState: CreateTopicFormState,
  data: FormData
): Promise<CreateTopicFormState> {
  const result = TopicCreateSchema.safeParse({
    slug: data.get("slug") as string,
    description: data.get("description") as string,
  });

  if (!result.success) {
    console.log(result.error.flatten());
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    // Attempt to create the snippet in the database
    // the form data is validated server-side using Prisma's schema extension (which leverages Zod for validation).
    await TopicService.create(result.data);
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return {
        errors: {
          general: "You must be logged in to create a topic.",
        },
      };
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return {
          errors: {
            slug: [
              "A topic with this slug already exists. Please choose another slug.",
            ],
          },
        };
      }
    }

    return {
      errors: {
        general:
          error instanceof Error
            ? error.message
            : typeof error === "string"
            ? error
            : "An error occurred while creating the topic.",
      },
    };
  }
  return { errors: {} };
}
