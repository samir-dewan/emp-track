import Image from "next/image";
import React from "react";
import HighlightBox from "./HighlightBox";
import ServerSideHighlights from "../server-side/server-side-highlights";

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

    return (
        <div className="absolute w-full h-full bg-blue-500 px-8 rounded-lg shadow-lg z-20">
          <h2 className="text-xl font-bold pb-2">{name}</h2>
          <p>{description}</p>
          {imageUrl && 
          <div className="rounded-md p-2">
            <Image src={imageUrl} alt={`${name} hero image`} width={400} height={225} objectFit="fill"/>
          </div>}
        </div>
      );
}