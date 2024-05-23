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
        <div className="fixed right-12 top-20 w-4/6 h-5/6 bg-blue-500 p-2 rounded-lg shadow-lg z-20">
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <p>{description}</p>
        </div>
      );
}