import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex justify-center gap-4 overflow-x-scroll h-screen">
      {images.map((image) => (
        <div key={image.id} className="flex relative h-full w-1/4 flex-shrink-0 flex-col p-4">
          <Link href={`/img/${image.id}`} className="w-full h-full">
            <Image
              src={image.imageUrl}
              alt={image.name}
              layout="fill"
              style={{
                objectFit: "cover",
              }}
            />
              <div className="right-6 bottom-6 absolute">
                <span>
                  {image.name}
                </span>
              </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
