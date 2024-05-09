import FullPageImageView from "~/app/components/full-image-page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("invalid photo ID");

  return (
    <FullPageImageView id={idAsNumber} />
  );
}
