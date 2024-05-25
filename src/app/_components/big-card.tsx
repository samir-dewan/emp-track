"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

type CardProps = {
    id: number;
    name: string;
    logoUrl: string;
    translation: number;
    hovered: boolean;
    length: number;
    experienceType: string;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onClick: () => void;
    isSelected: boolean;
}

export default function BigCard({id, logoUrl, name, translation, hovered, length, experienceType, onMouseEnter, onMouseLeave, onClick, isSelected}: CardProps) {
    const [isAnimating, setIsAnimating] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ top: 0, left: 0});

    //big cards
    const bigTranslateNumber = hovered ? translation * (length * 2) - (length * (length / 1.15)) : (translation) * (length * 1.25) - (length * length / 2);
    const bigRotateNumber = hovered ? (translation - (length / 2)) * length : (translation - (length / 2)) * 2;

    //small cards
    const smallTranslateXNumber = hovered ? translation * (length * 3) - (length * 4) : 0;
    const smallRotateNumber = hovered ? (translation - (length / 2) / 5) * length : (translation - (length / 2)) * 2;
    const smallTranslateYNumber = hovered ? -6 : 0 ;

    useEffect(() => {
        if(isAnimating && cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            console.log(rect);
            const top = (experienceType === "Professional" ? 15 : -72 )-rect.top;
            const left = -rect.left;
            setPosition({ top, left });
        }
    }, [isAnimating])



    useEffect(() => {
        if (isSelected) {
            setIsAnimating(true);
            const timer = setTimeout(() => {
                console.log(isAnimating); //adjust this when link is set
            }, 500); // Duration of the animation
            return () => clearTimeout(timer);
        }
    }, [isSelected]);

    useEffect(() => {
        if (!isSelected) {
            setIsAnimating(false);
        }
    })

    return (
        <div ref={cardRef} key={id} 
        className={`${experienceType === "Professional" ? `
        w-[12%] shadow-lg
        shadow-black z-50` : 
        `w-[5%] z-40`} aspect-[5/7] bg-white bg-opacity-5 rounded-xl
        absolute transition-all duration-500 ease-in-out ${isAnimating && 'w-[5%] aspect-square rounded-full'}`} 
        style={{
            transform: isAnimating ? 
            `
            translateY(${position.top}px)
            scale(1.25)`
             : experienceType === "Professional"
                ? `translateX(${bigTranslateNumber}rem) rotate(${bigRotateNumber}deg)`
                : `translateX(${smallTranslateXNumber}rem) translateY(${smallTranslateYNumber}rem) rotate(${smallRotateNumber}deg)`
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseDown={() => {
            setIsAnimating(true);
            onClick();
        }}
        >
        <div className="group w-full h-full block">
            {isAnimating ? (
                    <Image
                        src={logoUrl}
                        alt={name}
                        layout="fill"
                        style={{
                            objectFit: "cover",
                        }}
                        className="rounded-full transition duration-300 ease-in-out filter contrast-50 hover:contrast-100"
                    />
                ) : (
                    <Image
                    src={logoUrl}
                    alt={name}
                    layout="fill"
                    style={{
                        objectFit: "cover",
                    }}
                    className="transition duration-300 ease-in-out filter contrast-50 group-hover:contrast-100 rounded-xl"
                    />
                )}
                </div>
        </div>
    )
}