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

export default function BigCard({id, imageUrl, name, translation, hovered, length}: CardProps) {

    const baseTranslateNumber = hovered ? translation * (length * 2) - (length * (length / 1.15)) : (translation) * (length * 1.25) - (length * length / 2);
    const baseRotateNumber = hovered ? (translation - (length / 2)) * length : (translation - (length / 2)) * 2;

    return (
        <div key={id} 
        className="aspect-[5/7] w-[11.11%] bg-white bg-opacity-5 rounded-xl shadow-lg shadow-black absolute transition-transform duration-500 ease-in-out z-10" 
        style={{
                transform: `translateX(${baseTranslateNumber}rem) rotate(${baseRotateNumber}deg)`
            }}
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
              <div className="right-6 bottom-6 absolute">
                <span>
                  {name}
                </span>
              </div>
          </Link>
        </div>
    )
}