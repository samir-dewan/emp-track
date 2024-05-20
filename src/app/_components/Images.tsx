"use client";

import { useState } from "react";
import BigCard from "./big-card";
import OverlayBox from "./Overlay-box";

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
        const [overlayContent, setOverlayContent] = useState({name: ""});

        const handleHover = (name: string) => {
            setOverlayContent({name: name});
        }
        
        const handleLeave = () => {
            setOverlayContent({name: ""});
        }

        const bigCardImages = images.filter(image => image.experienceType === 'Professional');
        const smallCardImages = images.filter(image => image.experienceType !== "Professional");

        let bigIndex = 0;
        let smallIndex = 0;
        
        return (
          <div className="relative h-screen w-screen bg-black flex justify-center items-end overflow-hidden"
          >
            <div className="w-[10%] aspect-[5/7] mb-16" 
            onMouseEnter={() => {
            setIsHovered(true)
          }}
          onMouseLeave={() => {
            setIsHovered(false)
          }}>
            {images.map((image) => {
                let currentTranslation;
                let currentLength;
                if (image.experienceType === "Professional") {
                    currentTranslation = bigIndex++;
                    currentLength = bigCardImages.length;
                } else {
                    currentTranslation = smallIndex++;
                    currentLength = smallCardImages.length;
                }
            
            return (
                <BigCard 
                key={image.id} 
                translation={currentTranslation} 
                length={currentLength}
                id={image.id} 
                imageUrl={image.imageUrl} 
                name={image.name}
                experienceType={image.experienceType}
                onMouseEnter={() => handleHover(image.name)}
                onMouseLeave={handleLeave}
                hovered={isHovered}/>
              )})}
            </div>
            <OverlayBox
        isVisible={isHovered}
        name={overlayContent.name}
      />
          </div>
        );
      }