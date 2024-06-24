import React from "react";
import Hero from "../components/hero";
import SectionHeading from "../components/sectionHeading";
import Stillinger from "../components/stillinger";
import { PiArrowDownFill } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Job & Karriere",
};

const opslag = [
    {
        stilling: "Entrepriseleder",
        link: "/job-karriere/entrepriseleder",
        image:
            "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        stilling: "Byggesagkyndig",
        link: "/kontakt",
        image:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        stilling: "Sekretær",
        link: "/kontakt",
        image:
            "https://images.unsplash.com/photo-1713947506179-baa795d9c893?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        stilling: "Studiemedhjælper",
        link: "/kontakt",
        image:
            "https://images.unsplash.com/photo-1507537509458-b8312d35a233?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

export default function JobKarriere() {
    return (
        <>
            <Hero
                backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="JOB & KARRIERE"
            />

            <article className="py-20 mx-auto max-w-7xl px-5">
                <SectionHeading heading="skal du med på holdet?" />
                <div className="flex flex-col md:flex-row pt-10 text-lg">
                    <div className="flex-1 flex flex-col gap-5">
                        <p>
                            Vi er altid på udkig efter engagerede og talentfulde mennesker, der vil være med til at drive vores vision fremad. Hos os handler det ikke kun om at finde en dygtig medarbejder, men også om at finde en, der deler vores værdier og passion for det, vi gør.
                        </p>
                        <p>
                            Vi tror på, at nyskabelse og kreativitet er nøglen til succes. Vi opfordrer vores team til at tænke uden for boksen og bringe nye ideer til bordet. Hos os er samarbejde ikke bare en arbejdsmetode – det er en kerneværdi.
                        </p>
                        <p>Vi tror på styrken i teamwork og værdsætter de unikke bidrag, hver enkelt person kan bringe. Vi handler med integritet og tager ansvar for vores handlinger. Vi stræber efter at være et eksempel på etisk og bæredygtig forretningspraksis. Vi er dedikerede til kontinuerlig læring og personlig udvikling.</p>
                        
                        <p>Vi søger individer, der er klar til at tage initiativ, arbejde hårdt og dele i vores succeser. <br />Send os din ansøgning, og lad os sammen skabe noget fantastisk!
                        </p>
                        <Link
                            href="#stillinger"
                            className="text-accent font-bold inline-flex items-center hover:underline pt-5"
                        >
                            Se ledige stillinger herunder
                            <span>
                                <PiArrowDownFill className="text-2xl" />
                            </span>
                        </Link>
                    </div>
                    <div className="flex-1 items-start justify-end hidden lg:flex">
                        <Image
                            className="rounded w-5/6"
                            src="https://images.unsplash.com/photo-1607748838605-ebcbe8f15772?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            width={400}
                            height={800}
                            alt="test"
                        />
                    </div>
                </div>
            </article>

            <section className="bg-accentBg py-20 px-5">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading heading="ledige stillinger:" />
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10"
                        id="stillinger"
                    >
                        {opslag.map((job, i) => (
                            <Stillinger
                                key={i}
                                backgroundImage={job.image}
                                title={job.stilling}
                                to={job.link}
                                content="Læs mere"
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
