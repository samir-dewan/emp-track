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
}

export default function SmallCard({id, imageUrl, name, translation, hovered, length}: CardProps) {

    const baseTranslateXNumber = hovered ? translation * (length * 3) - (length * 4) : 0;
    const baseRotateNumber = hovered ? (translation - (length / 2) / 5) * length : (translation - (length / 2)) * 2;
    const translateYNumber = hovered ? -6 : 0 ;

    return (
        <div key={id} 
        className="w-[5%] aspect-[5/7] bg-white bg-opacity-5 rounded-xl absolute transition-transform duration-500 ease-in-out z-0" 
        style={{
                transform: `translateX(${baseTranslateXNumber}rem) translateY(${translateYNumber}rem) rotate(${baseRotateNumber}deg)`
            }}
        >
            <Link href={`/img/${id}`} className=" group w-full h-full block">
            <Image
              src={imageUrl}
              alt={name}
              layout="fill"
              style={{
                objectFit: "cover",
                transform: `rotate(${baseRotateNumber}deg)`
              }}
              className="transition duration-300 ease-in-out filter contrast-50 group-hover:contrast-100 rounded-xl"
            />
              <div className="right-6 bottom-6 absolute">
                <span>
                  {name}
                </span>
              </div>
          </Link>
        </div>
    )
}