import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getHighlightsByExpId } from "~/server/queries"; // Ensure the correct import path

type Highlight = {
  id: number;
  description: string;
  imageUrl: string;
  expId: number;
  keystat: string;
};

type HighlightsProps = Highlight[];

type DescriptionBoxProps = {
  id: number;
  isVisible: boolean;
  name: string;
  description: string;
  imageUrl?: string;
};

export default function DescriptionBox({ id, isVisible, name, description, imageUrl }: DescriptionBoxProps) {
  const [highlights, setHighlights] = useState<HighlightsProps | null>(null);

  useEffect(() => {
    const fetchHighlights = async (expId: number) => {
      try {
        const data = await getHighlightsByExpId(expId);
        setHighlights(data);
      } catch (error) {
        console.error("Error fetching highlights:", error);
      }
    };

    if (id) {
      fetchHighlights(id);
    }
  }, [id]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="absolute w-full h-full bg-blue-500 px-8 rounded-lg shadow-lg z-20">
      <h2 className="text-xl font-bold pb-2">{name}</h2>
      <p>{description}</p>
      {imageUrl && (
        <div className="rounded-md p-2">
          <Image
            src={imageUrl}
            alt={`${name} image`}
            width={400}
            height={225}
            style={{ objectFit: "fill" }}
          />
        </div>
      )}
      {highlights ? (
        highlights.map((highlight) => (
          <div key={highlight.id}>
            <p>{highlight.description}</p>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
