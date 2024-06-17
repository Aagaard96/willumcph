import React from "react";
import Link from "next/link";

export default function Stillinger({ backgroundImage, title, to, content }) {
  return (
    <section
      className="w-full h-[100px] md:h-[150px] bg-cover bg-center relative flex flex-col items-center justify-center text-heroText group border-accent border-2 rounded"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 25, 0.50), rgba(0, 0, 25, 0.50)), url(${backgroundImage})`,
      }}
    >
      <h2 className="text-2xl md:text-3xl uppercase">{title}</h2>
      <Link
        href={to}
        className="w-[5rem] h-[2.5rem] md:w-[8rem] text-xs md:text-base md:h-[3rem] bg-accent rounded-md text-mainBg group-hover:bg-accent/90 uppercase border-2 border-mainBg mt-2 md:mt-4 group-hover:scale-[105%] transition duration-200 flex items-center justify-center"
      >
        {content}
      </Link>
    </section>
  );
}
