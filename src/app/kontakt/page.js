import React from 'react'
import SectionHeading from '../components/sectionHeading'
import Hero from '../components/hero'
import KontaktForm from '../components/kontakt-form';

const formaal = [
    {
        title: "privat",
        content: "for dig der gerne vil have hjælp i det private"
    },
    {
        title: "erhverv",
        content: "for dig der gerne vil have hjælp i det private"
    },
    {
        title: "business",
        content: "for dig der gerne vil have hjælp i det private"
    },
    {
        title: "øvrige",
        content: "for dig der gerne vil have hjælp i det private"
    }
]

export const metadata = {
    title: 'Kontakt Os',
  };

export default function Kontakt() {
    return (
        <>
            <Hero backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="kontakt os" />

            <article className="py-20 mx-auto max-w-7xl px-5">
                <SectionHeading heading="hvad kan vi gøre for dig?" />
                <div className="flex flex-col md:flex-row gap-10 pt-10 text-lg">
                    <p className="flex-1">Bygningskonstruktion og Design er vores specialitet, og vi er stolte af at tilbyde skræddersyede løsninger til vores kunder. Som erfarne bygningsingeniører forstår vi vigtigheden af at levere højkvalitetsarbejde inden for tidsplanen og budgettet.
                        Vi har en dokumenteret track record af succesfulde projekter, lige fra boligbyggeri til kommercielle faciliteter. Vores ekspertise omfatter alt fra konceptudvikling og design til konstruktionsovervågning og kvalitetskontrol.
                        Uanset om du har brug for rådgivning om nybyggeri, renovering af eksisterende strukturer eller løsninger til bæredygtigt byggeri, er vi her for at imødekomme dine behov og sikre, at dit projekt realiseres med succes.</p>
                    <p className="flex-1"><span className="font-semibold">Vores Tilgang:</span><br />
                        Vi tror på at skabe tætte samarbejdsrelationer med vores kunder og lytte nøje til deres behov og visioner. Ved at forstå dine mål og krav kan vi skræddersy løsninger, der opfylder dine forventninger og overstiger dine forventninger.
                        Vores dedikerede team af ingeniører og designere er passionerede og engagerede i at levere enestående resultat, der ikke kun opfylder tekniske standarder, men også skaber værdi og skønhed i det byggede miljø.</p>
                </div>
            </article>

            <section className='py-20 bg-accentBg px-5'>
                <div className='max-w-7xl mx-auto'>
                    <SectionHeading heading="hvilket formål?" />
                    <div className='flex flex-col lg:flex-row mt-10 gap-10 lg:gap-0 max-w-7xl'>
                        <div className='flex flex-col justify-evenly gap-y-5 lg:gap-y-0 flex-1'>
                            {formaal.map((item, i) => (
                                <article key={i} className='lg:w-[400px] h-[100px] bg-white rounded p-4 flex flex-col justify-evenly border-1 border-accent/50 shadow-md shadow-accent/50'>
                                    <h4 className='uppercase font-semibold'>{item.title}</h4>
                                    <p>{item.content}</p>
                                </article>
                            ))}
                        </div>
                        <article className='flex-1'>
                            <KontaktForm />
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}
