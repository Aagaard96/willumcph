import React from "react";
import Link from "next/link";

export default function Stillinger({ backgroundImage, title, to, content }) {
  return (
    <section
      className="w-[600px] h-[150px] bg-cover bg-center relative flex flex-col items-center justify-center text-heroText group border-accent border-2 rounded"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 25, 0.50), rgba(0, 0, 25, 0.50)), url(${backgroundImage})`,
      }}
    >
      <h2 className="text-3xl uppercase group-hover:text-4xl transition duration-200">{title}</h2>
      <Link
        href={to}
        className="w-[5rem] h-[2.5rem] lg:w-[8rem] lg:h-[3rem] bg-accent rounded-md text-mainBg group-hover:bg-accent/90 uppercase border-2 border-mainBg mt-4 group-hover:scale-[105%] transition duration-200 flex items-center justify-center"
      >
        {content}
      </Link>
    </section>
  );
}
