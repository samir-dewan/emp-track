"use client";

import { useState } from "react";
import BigCard from "./big-card";
import OverlayBox from "./OverlayBox";
import DescriptionBox from "../../common/description-box";

type ImageProps = {
    id: number;
    imageUrl?: string;
    logoUrl: string;
    name: string;
    experienceType: string;
    role: string;
    dateStarted: Date;
    dateCompleted: Date;
    description: string;
}

type ImagesProps = {
    images: ImageProps[];
}

export default function Images({ images }: ImagesProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [overlayContent, setOverlayContent] = useState({name: "", role: "", dateStarted: new Date(), dateCompleted: new Date()});
    const [selectedCard, setSelectedCard] = useState<number | null>(null);

    const handleHover = (name: string, role: string, dateStarted: Date, dateCompleted: Date) => {
        setOverlayContent({name: name, role: role, dateStarted: dateStarted, dateCompleted: dateCompleted});
    }
    
    const handleLeave = () => {
        setOverlayContent({name: "", role: "", dateStarted: new Date(), dateCompleted: new Date()});
    }

    const handleClick = (id: number) => {
        setSelectedCard(id);
        console.log("Have clicked in, going into Description box with id: ", id);
    }

    const handleDeselect = () => {
        setSelectedCard(null);
    }

    const bigCardImages = images.filter(image => image.experienceType === 'Professional');
    const smallCardImages = images.filter(image => image.experienceType !== "Professional");
    const selectedImage = images.find((image) => image.id === selectedCard);

    let bigIndex = 0;
    let smallIndex = 0;

    return (
        <div className="relative h-full w-full bg-black flex justify-center items-end z-20">
            <div className="w-[10%] aspect-[5/7] mb-16" 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {selectedCard === null ? (
                    images.map((image) => {
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
                                logoUrl={image.logoUrl} 
                                name={image.name}
                                experienceType={image.experienceType}
                                onMouseEnter={() => handleHover(image.name, image.role, image.dateStarted, image.dateCompleted)}
                                onMouseLeave={handleLeave}
                                hovered={isHovered}
                                onClick={() => handleClick(image.id)}
                                isSelected={selectedCard === image.id}
                            />
                        )
                    })
                ) : (
                    <BigCard 
                        key={selectedImage!.id} 
                        translation={0} 
                        length={1}
                        id={selectedImage!.id} 
                        logoUrl={selectedImage!.logoUrl} 
                        name={selectedImage!.name}
                        experienceType={selectedImage!.experienceType}
                        onMouseEnter={() => handleHover(selectedImage!.name, selectedImage!.role, selectedImage!.dateStarted, selectedImage!.dateCompleted)}
                        onMouseLeave={handleLeave}
                        hovered={true}
                        onClick={() => handleDeselect()}
                        isSelected={true}
                    />
                )}
            </div>
            <OverlayBox
                isVisible={isHovered}
                name={overlayContent.name}
                role={overlayContent.role}
                dateStarted={overlayContent.dateStarted}
                dateCompleted={overlayContent.dateCompleted}
            />
            {selectedImage && (
                    <DescriptionBox id={selectedImage.id}
                    isVisible={selectedCard !== null}
                    name={selectedImage.name}
                    description={selectedImage.description}
                    imageUrl={selectedImage.imageUrl}/>
            )}
        </div>
    );
}