import { SignedIn, SignedOut } from "@clerk/nextjs";
import ServerSideImages from "./server-side/server-side-images";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
      <main>
        <SignedOut>
          <div className="h-full w-full text-center text-2xl">
            Please sign in above
          </div>
        </SignedOut>
        <SignedIn>
          <ServerSideImages />
        </SignedIn>
      </main>
  );
}
