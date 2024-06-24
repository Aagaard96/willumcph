import React from "react";
import Hero from "../../components/hero";
import SectionHeading from "../../components/sectionHeading";
import Image from "next/image";
import Link from "next/link";
import { PiArrowRightFill } from "react-icons/pi";

export const metadata = {
  title: 'Fagområder - Sikkerheds Repræsentation',
};

export default function Byggeraadgivning() {
  return (
    <>
      <Hero backgroundImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="sikkerheds repræsentation" />

      <section className="py-20 mx-auto max-w-7xl px-5">
        <article className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="flex-1 mx-auto">
            <SectionHeading heading="sikkerheds repræsentation" />
            <div className="mt-10 lg:max-w-lg flex flex-col gap-5 text-lg">
              <p>
                Quisque et nunc quis quam convallis luctus vel vel erat. Nulla
                facilisi. Nullam semper cursus eros, sed maximus augue varius sit
                amet. Ut sit amet turpis sed massa efficitur posuere. Ut luctus.
                Quisque et nunc quis quam convallis luctus vel vel erat. Nulla
                facilisi. Nullam semper cursus eros, sed maximus augue varius sit
                amet. Ut sit amet turpis sed massa efficitur posuere. Ut luctus.
                Quisque et nunc quis quam convallis luctus vel vel erat. Nulla
                facilisi. Nullam semper cursus eros, sed maximus augue varius sit
                amet. Ut sit amet turpis sed massa efficitur posuere. Ut luctus.
              </p>
              <p>
                Quisque et nunc quis quam convallis luctus vel vel erat. Nulla
                facilisi. Nullam semper cursus eros, sed maximus augue varius sit
                amet. Ut sit amet turpis sed massa efficitur posuere. Ut luctus.
                Quisque et nunc quis quam convallis luctus vel vel erat. Nulla
                facilisi. Nullam semper cursus eros, sed maximus augue varius sit
                amet. Ut sit amet turpis sed massa efficitur posuere. Ut luctus.
                Quisque et nunc quis quam convallis luctus vel vel erat. Nulla
                facilisi. Nullam semper cursus eros, sed maximus augue varius sit
                amet. Ut sit amet turpis sed massa efficitur posuere. Ut luctus.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end items-center">
            <Image
              className="rounded"
              src="https://images.unsplash.com/photo-1608303588026-884930af2559?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={600}
              height={400}
              alt="Test"
            />
          </div>
        </article>
        <article className="flex flex-col lg:flex-row gap-10 md:gap-20 mt-20">
          <div className="flex justify-end items-center order-2 lg:order-1">
            <Image
              className="rounded hidden lg:block"
              src="https://images.unsplash.com/photo-1542350880924-09225f70e026?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={600}
              height={400}
              alt="Test"
            />
          </div>
          <div className="flex-1 order-1 mx-auto">
            <h4 className="uppercase font-bold text-4xl">Hvordan vi arbejder</h4>
            <div className="mt-10 lg:max-w-lg flex flex-col gap-5 text-xl">
              <p>
                Quisque et nunc quis quam convallis luctus vel vel erat. Nulla
                facilisi. Nullam semper cursus eros, sed maximus augue varius sit
                amet. Ut sit amet turpis sed massa efficitur posuere. Ut luctus.
                Quisque et nunc quis quam convallis luctus vel vel erat. Nulla
                facilisi.   </p>
              <p>Nullam semper cursus eros, sed maximus augue varius sit
                amet. Ut sit amet turpis sed massa efficitur posuere. Ut luctus.
                Quisque et nunc quis quam convallis luctus vel vel erat. Nulla
                facilisi. Nullam semper cursus eros, sed maximus augue varius sit
                amet. Ut sit amet turpis sed massa efficitur posuere. Ut luctus.
              </p>
              <p>
                Quisque et nunc quis quam convallis luctus vel vel erat. Nulla
                facilisi. Nullam semper cursus eros, sed maximus augue varius sit
                amet. Ut sit amet turpis sed massa efficitur posuere. Ut luctus.
                Quisque et nunc quis quam convallis luctus vel vel erat. Nulla
                facilisi. Nullam semper cursus eros, sed maximus augue varius sit
                amet. Ut sit amet turpis sed massa efficitur posuere. Ut luctus.
                Quisque et nunc quis quam convallis luctus vel vel erat. Nulla
                facilisi. Nullam semper cursus eros, sed maximus augue varius sit
                amet. Ut sit amet turpis sed massa efficitur posuere. Ut luctus.
              </p>
              <Link href="/kontakt" className="text-accent font-bold inline-flex items-center hover:underline">Klar til et samarbejde? Klik her <span><PiArrowRightFill className="text-2xl" /></span></Link>
            </div>
          </div>
        </article>

      </section>
    </>
  );
}
