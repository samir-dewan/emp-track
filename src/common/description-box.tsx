import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getHighlightsByExpId, getTechStackByExpId } from "~/server/queries"; // Ensure the correct import path
import HighlightBox from "~/app/_components/HighlightBox";

type Highlight = {
  id: number;
  description: string;
  imageUrl: string;
  expId: number;
  keystat: string;
};

type HighlightsProps = Highlight[];

type TechStack = {
  id: number;
  name: string;
  imageUrl: string;
}

type TechStackProps = TechStack[];

type DescriptionBoxProps = {
  id: number;
  isVisible: boolean;
  name: string;
  description: string;
  imageUrl?: string;
};

export default function DescriptionBox({ id, isVisible, name, description, imageUrl }: DescriptionBoxProps) {
  const [highlights, setHighlights] = useState<HighlightsProps | null>(null);
  const [techStack, setTechStack] = useState<TechStackProps | null>(null);

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

  useEffect(() => {
    const fetchTechstack = async(expId: number) => {
      try {
        const data = await getTechStackByExpId(expId);
        setTechStack(data);
      } catch(error) {
        console.error("Error fetching techstack: ", error);
      }
    };

    if (id) {
      fetchTechstack(id);
    }
  }, [id]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="absolute w-full h-full bg-blue-500 px-8 rounded-lg shadow-lg z-20">
      <h2 className="text-xl font-bold pb-2">{name}</h2>
      <p>{description}</p>
      <div className="h-1/2 w-full bg-purple-500">
      {highlights ? (
        highlights.map((highlight) => (
          <HighlightBox highlight={highlight}/>
        ))
      ) : (
        <span>Loading...</span>
      )}
      </div>

      <div className="h-1/6 w-full bg-gray-500">
      {techStack ? (
        techStack.map((techS, index) => (
          <div key={index}>
            <Image 
            src={techS.imageUrl}
            alt={techS.name}
            height={100}
            width={150}
            />
          </div>
        ))
      ) : (
        <span>Loading...</span>
      )}
      </div>
    </div>
  );
}
