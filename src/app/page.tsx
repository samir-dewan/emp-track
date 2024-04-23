import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/a14c5731-9262-4bfd-b96e-01d4c03d3363-xyo0aj.jpg",
  "https://utfs.io/f/f885940e-c5fc-452a-b5df-1d46f2e73873-xyoq72.jpg",
  "https://utfs.io/f/6b120c5c-77c9-4824-84f1-6530f078edeb-xyoq72.jpg",
  "https://utfs.io/f/f4fec0fc-1d0a-43cc-9421-2b40f5c347a4-k612hv.jpg"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-1/2 p-4">
            <img src={image.url} alt={`image: ${image.id.toString}`} />
          </div>
        ))}
        <p>hello - making dummy gallery</p>
      </div>
    </main>
  );
}
