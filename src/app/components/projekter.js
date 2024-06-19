import Image from 'next/image';
import React from 'react'

const projekter = [
    {
        title: "det ny gymnasie",
        img: "/dummy-skyscraper.jpg",
        link: "/projekter"
    },
    {
        title: "peder lykkes institut",
        img: "/dummy-stairs.jpg",
        link: "/projekter"
    },
    {
        title: "højhuset hemgaard",
        img: "/dummy-skyscraper.jpg",
        link: "/projekter"
    },
    {
        title: "trin for trin",
        img: "/dummy-stairs.jpg",
        link: "/projekter"
    }
];

export default function Projekter() {
    return (
        <>
            {projekter.map((projekt, index) => (
                <article key={index} className="w-[165px] h-[245px]  md:w-[210px] md:h-[310px] lg:w-full lg:h-[360px] place-self-center bg-cover bg-no-repeat rounded shadow-lg shadow-accent/50 relative" style={{ backgroundImage: `url(${projekt.img})` }}>
                    <h3 className='text-heroText uppercase absolute bottom-0 p-2 text-sm md:text-lg bg-accent w-full rounded-b'>{projekt.title}</h3>
                </article>
            ))}
        </>


    )
}
