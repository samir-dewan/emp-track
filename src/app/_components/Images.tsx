"use client";

import { useState } from "react";
import BigCard from "./big-card";
import SmallCard from "./small-card";

type ImageProps = {
    id: number;
    imageUrl: string;
    name: string;
    experienceType: string;
}

type ImagesProps = {
    images: ImageProps[];
}
export default function Images({ images }: ImagesProps) {
        const [isHovered, setIsHovered] = useState(false);

        const bigCardImages = images.filter(image => image.experienceType === 'Professional');
        const smallCardImages = images.filter(image => image.experienceType !== "Professional");
        
        return (
          <div className="relative h-screen w-screen bg-black flex justify-center items-end overflow-hidden"
          >
            <div className="w-[10%] aspect-[5/7] mb-14" 
            onMouseEnter={() => {
            setIsHovered(true)
          }}
          onMouseLeave={() => {
            setIsHovered(false)
          }}>
            {bigCardImages.map((image, index) => (
                <BigCard 
                key={image.id} 
                translation={index} 
                length={bigCardImages.length}
                id={image.id} 
                imageUrl={image.imageUrl} 
                name={image.name}
                hovered={isHovered}/>
              ))}
            {smallCardImages.map((image, index) => (
                <SmallCard
                key={image.id}
                translation={index}
                length={smallCardImages.length}
                id={image.id}
                imageUrl={image.imageUrl}
                name={image.name}
                hovered={isHovered}
                />
            ))}
            </div>
          </div>
        );
      }