import Image from "next/image";
import React from "react";
import ServerSideHighlights from "~/app/server-side/server-side-highlights";
import { getHighlightsByExpId } from "~/server/queries";

export const dynamic = "force-dynamic";

type DescriptionBoxProps = {
    id: number;
    name: string;
    isVisible: boolean;
    description: string;
    imageUrl?: string;
}

export default async function DescriptionBox({id, isVisible, description, imageUrl, name}: DescriptionBoxProps) {
    if (!isVisible) return null;

    const highlights = await getHighlightsByExpId(id);

    return (
        <div className="absolute w-full h-full bg-blue-500 px-8 rounded-lg shadow-lg z-20">
          <h2 className="text-xl font-bold pb-2">{name}</h2>
          <p>{description}</p>
          {imageUrl && 
          <div className="rounded-md p-2">
            <Image src={imageUrl} alt={`${name} hero image`} width={400} height={225} objectFit="fill"/>
          </div>}
          <div className="relative w-full h-full">
            {highlights.map((highlight) => (
                <div key={highlight.expId} className="w-full h-full bg-blue-500 px-8 rounded-lg shadow-lg mb-4 z-20">
                    <h2 className="text-xl font-bold pb-2">{highlight.keystat}</h2>
                    <p>{highlight.description}</p>
                    {highlight.imageUrl && 
                        <div className="rounded-md p-2">
                            <Image 
                                src={highlight.imageUrl} 
                                alt="hero image" 
                                width={400} 
                                height={225} 
                                style={{ objectFit: "fill" }}
                            />
                        </div>
                    }
                </div>
            ))}
        </div>
        </div>
      );
}