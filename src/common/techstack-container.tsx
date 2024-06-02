import React, { useEffect, useState } from 'react';
import { getTechStackByExpId } from '~/server/queries';
import Image from "next/image";

type TechStack = {
    id: number;
    name: string;
    imageUrl: string;
  }

type TechStackProps = TechStack[];

export default function TechstackContainer(props: {id: number}) {

    const [techStack, setTechStack] = useState<TechStackProps | null>(null);


    useEffect(() => {
        const fetchTechstack = async(expId: number) => {
          try {
            const data = await getTechStackByExpId(expId);
            setTechStack(data);
          } catch(error) {
            console.error("Error fetching techstack: ", error);
          }
        };
    
        if (props.id) {
          fetchTechstack(props.id);
        }
      }, [props.id]);

    
    return (
    <div className="h-1/6 w-full bg-gray-500 flex justify-center gap-4">
        {techStack ? techStack.map((techS: TechStack, index: any) => (
          <div key={index}>
            <Image 
            src={techS.imageUrl}
            alt={techS.name}
            height={100}
            width={150}
            />
          </div>
)) : <span>Loading...</span>
}
    </div>
    )}