import { getHighlightsByExpId } from "~/server/queries";
import HighlightBox from "../@description/[expId]/HighlightBox";

export default async function ServerSideHighlights(props: {id: number}) {
    const highlights = await getHighlightsByExpId(props.id);
    return <HighlightBox highlights={highlights} />;
}