import React from 'react'

export default function Hero({ backgroundImage, title }) {
    return (
        <section
            className=" mt-[64px] w-full h-[150px] md:h-[200px] lg:h-[250px] bg-cover bg-center relative flex items-center justify-center text-heroText border-b-accent border-b-4"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 25, 0.50), rgba(0, 0, 25, 0.50)), url(${backgroundImage})`,
            }}

        >
            <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase'>{title}</h2>
        </section>
    )
}
