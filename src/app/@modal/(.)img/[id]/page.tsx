
import { Modal } from "./modal";
import FullPageImageView from "~/common/full-image-page";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("invalid photo ID");

  return (
  <Modal>
    <FullPageImageView photoId={idAsNumber} />
  </Modal>
  );
}
