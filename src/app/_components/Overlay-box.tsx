import React from "react";

type OverlayBoxProps = {
    isVisible: boolean;
    name: string;
}

export default function OverlayBox( { isVisible, name }: OverlayBoxProps) {

    if (!isVisible) return null;

    return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 p-4 rounded-lg shadow-lg z-20">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
    </div>
    )
}