"use client";

import Link from "next/link";
import Image from "next/image";

type CardProps = {
    id: number;
    name: string;
    imageUrl: string;
    translation: number;
    hovered: boolean;
    length: number;
    experienceType: string;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export default function BigCard({id, imageUrl, name, translation, hovered, length, experienceType, onMouseEnter, onMouseLeave}: CardProps) {

    //big cards
    const bigTranslateNumber = hovered ? translation * (length * 2) - (length * (length / 1.15)) : (translation) * (length * 1.25) - (length * length / 2);
    const bigRotateNumber = hovered ? (translation - (length / 2)) * length : (translation - (length / 2)) * 2;

    //small cards
    const smallTranslateXNumber = hovered ? translation * (length * 3) - (length * 4) : 0;
    const smallRotateNumber = hovered ? (translation - (length / 2) / 5) * length : (translation - (length / 2)) * 2;
    const smallTranslateYNumber = hovered ? -6 : 0 ;

    return (
        <div key={id} 
        className={`${experienceType === "Professional" ? `
        w-[12%] shadow-lg
         shadow-black z-10` : 
         `w-[5%]`} aspect-[5/7] bg-white bg-opacity-5 rounded-xl 
         absolute transition-transform duration-500 ease-in-out z-0`} 
         style={{
            transform: experienceType === "Professional" 
                ? `translateX(${bigTranslateNumber}rem) rotate(${bigRotateNumber}deg)` 
                : `translateX(${smallTranslateXNumber}rem) translateY(${smallTranslateYNumber}rem) rotate(${smallRotateNumber}deg)`
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
            <Link href={`/img/${id}`} className=" group w-full h-full block">
            <Image
              src={imageUrl}
              alt={name}
              layout="fill"
              style={{
                objectFit: "cover",
              }}
              className="transition duration-300 ease-in-out filter contrast-50 group-hover:contrast-100 rounded-xl"
            />
          </Link>
        </div>
    )
}