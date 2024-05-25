import Image from "next/image";
import React from "react";

type DescriptionBoxProps = {
    name: string;
    isVisible: boolean;
    description: string;
    imageUrl?: string;
}

export default function DescriptionBox({isVisible, description, imageUrl, name}: DescriptionBoxProps) {
    if (!isVisible) return null;

    return (
        <div className="fixed right-12 top-20 w-4/6 h-5/6 bg-blue-500 p-2 rounded-lg shadow-lg z-20">
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <p>{description}</p>
          {imageUrl && 
          <div className="rounded-md p-2">
            <Image src={imageUrl} alt={`${name} hero image`} width={400} height={225} objectFit="fill"/>
          </div>}
        </div>
      );
}