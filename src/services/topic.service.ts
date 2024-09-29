import { prisma } from "@/db/prisma";
import { Prisma, Topic } from "@prisma/client";
import { Service } from "./service.interface";
import { withAuth } from "./with-auth.helpers";

export const TopicService: Service<
  Topic,
  Prisma.TopicCreateInput,
  Prisma.TopicUpdateInput
> = {
  getAll: async () => {
    return prisma.topic.findMany();
  },
  getOne: async (slug) => {
    return prisma.topic.findUnique({
      where: { slug },
    });
  },
  create: async (data) => {
    return withAuth(() => {
      return prisma.topic.create({ data });
    });
  },
  update: async (id, data) => {
    return withAuth(() => {
      return prisma.topic.update({
        where: { id },
        data,
      });
    });
  },
  delete: async (id) => {
    return withAuth(() => {
      return prisma.topic.delete({
        where: { id },
      });
    });
  },
};
