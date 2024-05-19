import { getMyImages } from "~/server/queries";
import Images from "../_components/Images";

export default async function ServerSideImages() {
  const images = await getMyImages();
  return <Images images={images} />;
}