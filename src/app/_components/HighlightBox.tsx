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
                <div key={highlight.expId} className="flex flex-col w-1/3 space-between px-8 py-4 rounded-lg shadow-lg mb-4 z-20">
                    {highlight.imageUrl && 
                        <div className="rounded-md p-2 self-center">
                            <Image 
                                src={highlight.imageUrl} 
                                alt="hero image" 
                                width={320} 
                                height={180}
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    }
                    <div className="flex">
                    <span className="text-xl font-bold pb-2">{highlight.keystat}</span>
                    <p>{highlight.description}</p>
                    </div>
                </div>
            )}