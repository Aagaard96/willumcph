import React from 'react'
import Hero from '../components/hero'
import SectionHeading from '../components/sectionHeading'
import ModalProjekt from '../components/projekt-modal'

export const metadata = {
  title: 'Kunder & Projekter',
};

export default function Page() {
  return (
    <>
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1516174881421-64f2583616a6?q=80&w=2113&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="kunder & projekter"
      />

      <section className="py-20 max-w-7xl mx-auto px-5">
        <SectionHeading heading="projekter vi er en del af:" />
        <div className="flex flex-col md:flex-row gap-10 pt-10 text-lg">
          <p className="flex-1">
            Bygningskonstruktion og Design er vores specialitet, og vi er stolte af at tilbyde skræddersyede løsninger til vores kunder. Som erfarne bygningsingeniører forstår vi vigtigheden af at levere højkvalitetsarbejde inden for tidsplanen og budgettet.
            Vi har en dokumenteret track record af succesfulde projekter, lige fra boligbyggeri til kommercielle faciliteter. Vores ekspertise omfatter alt fra konceptudvikling og design til konstruktionsovervågning og kvalitetskontrol.
            Uanset om du har brug for rådgivning om nybyggeri, renovering af eksisterende strukturer eller løsninger til bæredygtigt byggeri, er vi her for at imødekomme dine behov og sikre, at dit projekt realiseres med succes.
          </p>
          <p className="flex-1">
            <span className="font-semibold">Vores Tilgang:</span><br />
            Vi tror på at skabe tætte samarbejdsrelationer med vores kunder og lytte nøje til deres behov og visioner. Ved at forstå dine mål og krav kan vi skræddersy løsninger, der opfylder dine forventninger og overstiger dine forventninger.
            Vores dedikerede team af ingeniører og designere er passionerede og engagerede i at levere enestående resultat, der ikke kun opfylder tekniske standarder, men også skaber værdi og skønhed i det byggede miljø.
          </p>
        </div>
      </section>

      <article className="py-20 bg-accentBg px-5">
        <div className='grid grid-cols-1 max-w-7xl lg:grid-cols-2 mx-auto gap-5'>
          <ModalProjekt />
          /</div>
      </article>
    </>
  )
}
