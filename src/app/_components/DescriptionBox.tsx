import React from "react";

type DescriptionBoxProps = {
    name: string;
    isVisible: boolean;
    description: string;
    logoUrl?: string;
}

export default function DescriptionBox({isVisible, description, logoUrl, name}: DescriptionBoxProps) {
    if (!isVisible) return null;

    return (
        <div className="fixed right-0 top-1/4 w-1/3 bg-white p-4 rounded-lg shadow-lg z-20">
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <p>{description}</p>
        </div>
      );
}