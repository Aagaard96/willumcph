import React from 'react'
import Hero from '../components/hero'
import SectionHeading from '../components/sectionHeading'
import Stillinger from '../components/stillinger'
import { PiArrowDownFill } from 'react-icons/pi'
import Link from 'next/link'

export const metadata = {
    title: 'Job & Karriere',
};

const opslag = [
    {
        stilling: "Entrepriseleder",
        link: "/job-karriere/entrepriseleder",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        stilling: "Byggesagkyndig",
        link: "/kontakt",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        stilling: "Sekretær",
        link: "/kontakt",
        image: "https://images.unsplash.com/photo-1713947506179-baa795d9c893?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        stilling: "Studiemedhjælper",
        link: "/kontakt",
        image: "https://images.unsplash.com/photo-1507537509458-b8312d35a233?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }

]

export default function JobKarriere() {
    return (
        <>
            <Hero backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="JOB & KARRIERE" />

            <article className="py-20 mx-auto max-w-7xl px-5">
                <SectionHeading heading="skal du med på holdet?" />
                <div className="flex flex-col md:flex-row gap-10 pt-10 text-lg">
                    <div>
                        <p className="flex-1">Bygningskonstruktion og Design er vores specialitet, og vi er stolte af at tilbyde skræddersyede løsninger til vores kunder. Som erfarne bygningsingeniører forstår vi vigtigheden af at levere højkvalitetsarbejde inden for tidsplanen og budgettet.
                            Vi har en dokumenteret track record af succesfulde projekter, lige fra boligbyggeri til kommercielle faciliteter. Vores ekspertise omfatter alt fra konceptudvikling og design til konstruktionsovervågning og kvalitetskontrol.
                            Uanset om du har brug for rådgivning om nybyggeri, renovering af eksisterende strukturer eller løsninger til bæredygtigt byggeri, er vi her for at imødekomme dine behov og sikre, at dit projekt realiseres med succes.</p>
                    </div>
                    <div>
                        <p className="flex-1"><span className="font-semibold">Vores Tilgang:</span><br />
                            Vi tror på at skabe tætte samarbejdsrelationer med vores kunder og lytte nøje til deres behov og visioner. Ved at forstå dine mål og krav kan vi skræddersy løsninger, der opfylder dine forventninger og overstiger dine forventninger.
                            Vores dedikerede team af ingeniører og designere er passionerede og engagerede i at levere enestående resultat, der ikke kun opfylder tekniske standarder, men også skaber værdi og skønhed i det byggede miljø.</p>
                        <Link href="#stillinger" className="text-accent font-bold inline-flex items-center hover:underline pt-5">Se hvilke projekter vi har arbejdet på <span><PiArrowDownFill className="text-2xl" /></span></Link>
                    </div>
                </div>
            </article>

            <section className="bg-accentBg py-20 px-5">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading heading="ledige stillinger:" />
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 pt-10' id='stillinger'>
                        {opslag.map((job, i) => (
                            <Stillinger key={i}
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
    )
}
