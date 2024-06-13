import React from "react";
import Hero from "../../components/hero";
import SectionHeading from "../../components/sectionHeading";
import Image from "next/image";

export default function Byggeraadgivning() {
  return (
    <>
      <Hero backgroundImage="/heroOverlay.jpg" title="bygherrerådgivning" />

      <section className=" py-20 mx-auto max-w-7xl">
        <article className="flex gap-20">
          <div className="flex-1">
            <SectionHeading heading="bygherrerådgivning" />
            <div className="mt-20">
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

          <div className="flex justify-end items-center">
            <Image
              className="rounded"
              src="/dummy-stairs.jpg"
              width={600}
              height={400}
              alt="Test"
            />
          </div>
        </article>
        <article className="flex gap-20 mt-20">
        <div className="flex justify-end items-center">
            <Image
              className="rounded"
              src="/dummy-stairs.jpg"
              width={600}
              height={400}
              alt="Test"
            />
          </div>
          <div className="flex-1">
            <SectionHeading heading="bygherrerådgivning" />
            <div className="mt-20">
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
        </article>

      </section>
    </>
  );
}
