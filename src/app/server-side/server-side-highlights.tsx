import { getHighlightsByExpId } from "~/server/queries";
import HighlightBox from "../_components/HighlightBox";

export default async function ServerSideHighlights(props: {id: number}) {
    const highlights = await getHighlightsByExpId(props.id);
    return <HighlightBox highlights={highlights} />;
}