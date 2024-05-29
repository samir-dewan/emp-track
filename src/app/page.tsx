import { SignedIn, SignedOut } from "@clerk/nextjs";
import ServerSideImages from "./server-side/server-side-images";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
      <main className="h-full w-full">
        <SignedOut>
          <div className="text-center text-2xl">
            Please sign in above
          </div>
        </SignedOut>
        <SignedIn>
          <ServerSideImages />
        </SignedIn>
      </main>
  );
}
