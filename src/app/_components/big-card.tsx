"use client";

import Link from "next/link";
import Image from "next/image";

type ImageProps = {
    id: number;
    name: string;
    imageUrl: string;
    translation: number;
    hovered: boolean;
}

export default function BigCard({id, imageUrl, name, translation, hovered}: ImageProps) {

    const baseTranslateNumber = hovered ? translation * 14 - 22 : translation * 4 - 4;
    const baseRotateNumber = hovered ? (translation - 1) * 5 : (translation - 1) * 2;

    return (
        <div key={id} 
        className="w-1/6 aspect-[5/7] bg-white bg-opacity-5 rounded-xl absolute transition-transform duration-500 ease-in-out" 
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