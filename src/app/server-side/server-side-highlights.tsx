import { getHighlightsByExpId } from "~/server/queries";
import HighlightBox from "../_components/HighlightBox";
import DescriptionBox from "~/common/description-box";

type ServerSideHighlightProps = {
    id: number;
    isVisible: boolean;
    name: string;
    description: string;
    imageUrl: string;
}

export default async function ServerSideHighlights({id, isVisible, name, description, imageUrl}: ServerSideHighlightProps) {
    console.log("ServerSideHighlights running with id: ", id);
    const highlights = await getHighlightsByExpId(id);

    return (
        <DescriptionBox highlights={highlights}
        id={id}
                    isVisible={isVisible}
                    name={name}
                    description={description}
                    imageUrl={imageUrl}
                    />
    )
}