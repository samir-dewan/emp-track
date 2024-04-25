import { db } from "../server/db/index";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "-" + index} className="flex w-48 flex-col p-4">
            <img src={image.url} alt={`image: ${image.id.toString}`} />
            <div>{image.name}</div>
          </div>
        ))}
        <p>hello - making dummy gallery</p>
      </div>
    </main>
  );
}
