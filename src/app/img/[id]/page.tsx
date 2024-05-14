import FullPageImageView from "~/common/full-image-page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("invalid photo ID");

  return (
    <FullPageImageView photoId={idAsNumber} />
  );
}
