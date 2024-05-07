import { SignedIn, SignedOut} from "@clerk/nextjs";
import { db } from "../server/db/index";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col p-4">
          <img src={image.url} alt={`image: ${image.id.toString}`} />
          <div>{image.name}</div>
        </div>
      ))}
      <p>hello - making dummy gallery</p>
    </div>
  );
}

export default async function HomePage() {

  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
