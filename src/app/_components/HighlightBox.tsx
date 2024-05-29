import Image from "next/image";
import React from 'react';

type HighlightProps = {
    id: number;
    expId: number;
    keystat: string;
    description: string;
    imageUrl: string;
}

type HighlightBoxProps = { highlight: HighlightProps };

export default function HighlightBox({ highlight }: HighlightBoxProps) {
    return (
                <div key={highlight.expId} className="w-full h-full bg-blue-500 px-8 rounded-lg shadow-lg mb-4 z-20">
                    <h2 className="text-xl font-bold pb-2">{highlight.keystat}</h2>
                    <p>{highlight.description}</p>
                    {highlight.imageUrl && 
                        <div className="rounded-md p-2">
                            <Image 
                                src={highlight.imageUrl} 
                                alt="hero image" 
                                width={400} 
                                height={225} 
                                style={{ objectFit: "fill" }}
                            />
                        </div>
                    }
                </div>
            )}