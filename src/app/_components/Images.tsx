"use client";

import { useState } from "react";
import BigCard from "./big-card";

type ImageProps = {
    id: number;
    imageUrl: string;
    name: string;
}

type ImagesProps = {
    images: ImageProps[];
}
export default function Images({ images }: ImagesProps) {
        const [isHovered, setIsHovered] = useState(false);
      
        return (
          <div className="h-screen bg-black grid place-items-center"
          >
            <div className="w-1/6 aspect-[5/7]" 
            onMouseEnter={() => {
            setIsHovered(true)
          }}
          onMouseLeave={() => {
            setIsHovered(false)
          }}>
            {images.map((image, index) => (
                <BigCard 
                key={image.id} 
                translation={index} 
                id={image.id} 
                imageUrl={image.imageUrl} 
                name={image.name}
                hovered={isHovered}/>
              ))}
            </div>
          </div>
        );
      }