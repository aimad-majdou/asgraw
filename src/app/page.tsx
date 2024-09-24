import * as actions from "@/actions";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Sign In</Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit">Sign Out</Button>
      </form>
      {session?.user ? (
        <div>
          <p>Signed in as {JSON.stringify(session.user)}</p>
        </div>
      ) : (
        <div>
          <p>Not signed in</p>
        </div>
      )}
    </div>
  );
}
