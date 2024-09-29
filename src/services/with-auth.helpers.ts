import { auth } from "@/auth";
import { Session } from "next-auth";

export async function withAuth<T>(
  action: (session: Session) => Promise<T>
): Promise<T> {
  const session = await auth();
  if (!session || !session.user) {
    throw new Error("Unauthorized");
  }

  // If authorized, execute the action
  return action(session);
}
