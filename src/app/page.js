import { NextUIProvider } from "@nextui-org/react";
import SectionHeading from "./components/sectionHeading";
import Fagomraader from "./components/fagomraader";
import Projekter from "./components/projekter";
import { PiArrowRightFill } from "react-icons/pi";
import Link from "next/link";
import CtaButton from "./components/cta-btn";
import Animation from "./components/animations/SlideAnimation";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="mx-auto">
        <header
          className="w-full h-screen bg-no-repeat bg-center bg-cover mx-auto justify-center items-center flex flex-col md:grid md:grid-cols-4 md:grid-rows-3"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 25, 0.25), rgba(0, 0, 25, 0.25)), url('/herocropped.jpg')`,
          }}
        >
          <div className="flex flex-col font-medium max-w-6xl uppercase text-mainBg justify-center items-center md:items-start md:justify-start md:col-start-2 md:col-span-2 md:row-start-2 pt-10">
            <Animation as="h1" type="OnlyAppear" duration={0.75} delay={0.15} className="text-6xl lg:text-8xl text-center md:text-start">willum cph.</Animation>
            <Animation as="h2" type="OnlyAppear" duration={0.5} delay={0.35} className=" text-center md:text-start text-2xl md:text-4xl mt-10">bygherrerådgivning &amp; <br /> styringsentreprise</Animation>
            <Animation as="div" type="OnlyAppear" duration={0.5} delay={0.55}>
              <CtaButton to="#ekspertise" content="læs mere" className="text-sm md:text-lg" />
            </Animation>
          </div>
        </header>

        <section className="py-20 max-w-7xl mx-auto px-5" id="ekspertise">
          <SectionHeading heading="vores ekspertise" />
          <div className="flex flex-col md:flex-row gap-10 pt-10 text-lg">
            <p className="flex-1">Bygningskonstruktion og Design er vores specialitet, og vi er stolte af at tilbyde skræddersyede løsninger til vores kunder. Som erfarne bygningsingeniører forstår vi vigtigheden af at levere højkvalitetsarbejde inden for tidsplanen og budgettet.
              Vi har en dokumenteret track record af succesfulde projekter, lige fra boligbyggeri til kommercielle faciliteter. Vores ekspertise omfatter alt fra konceptudvikling og design til konstruktionsovervågning og kvalitetskontrol.
              Uanset om du har brug for rådgivning om nybyggeri, renovering af eksisterende strukturer eller løsninger til bæredygtigt byggeri, er vi her for at imødekomme dine behov og sikre, at dit projekt realiseres med succes.</p>
            <p className="flex-1"><span className="font-semibold">Vores Tilgang:</span><br />
              Vi tror på at skabe tætte samarbejdsrelationer med vores kunder og lytte nøje til deres behov og visioner. Ved at forstå dine mål og krav kan vi skræddersy løsninger, der opfylder dine forventninger og overstiger dine forventninger.
              Vores dedikerede team af ingeniører og designere er passionerede og engagerede i at levere enestående resultat, der ikke kun opfylder tekniske standarder, men også skaber værdi og skønhed i det byggede miljø.</p>
          </div>
        </section>

        <section className="py-20 bg-accentBg px-5">
          <div className="max-w-7xl mx-auto">
            <SectionHeading heading="vores fagområder" />
            <div className="flex flex-col md:flex-row gap-10 pt-10 text-lg">
              <p className="flex-1">Bygningskonstruktion og Design er vores specialitet, og vi er stolte af at tilbyde skræddersyede løsninger til vores kunder. Som erfarne bygningsingeniører forstår vi vigtigheden af at levere højkvalitetsarbejde inden for tidsplanen og budgettet.
                Vi har en dokumenteret track record af succesfulde projekter, lige fra boligbyggeri til kommercielle faciliteter. Vores ekspertise omfatter alt fra konceptudvikling og design til konstruktionsovervågning og kvalitetskontrol.
                Uanset om du har brug for rådgivning om nybyggeri, renovering af eksisterende strukturer eller løsninger til bæredygtigt byggeri, er vi her for at imødekomme dine behov og sikre, at dit projekt realiseres med succes.</p>
              <p className="flex-1"><span className="font-semibold">Vores Tilgang:</span><br />
                Vi tror på at skabe tætte samarbejdsrelationer med vores kunder og lytte nøje til deres behov og visioner. Ved at forstå dine mål og krav kan vi skræddersy løsninger, der opfylder dine forventninger og overstiger dine forventninger.
                Vores dedikerede team af ingeniører og designere er passionerede og engagerede i at levere enestående resultat, der ikke kun opfylder tekniske standarder, men også skaber værdi og skønhed i det byggede miljø.</p>
            </div>
            <article className="pt-20 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-y-10 place-items-center">
              <Fagomraader />
            </article>
          </div>
        </section>

        <section className="py-20 max-w-7xl mx-auto flex flex-col lg:flex-row gap-5 px-5 ">
          <article className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-5 flex-1 order-2 lg:order-1">
            <Projekter />
          </article>


          <div className="flex-1 order-1">
            <SectionHeading heading="vores projekter" />
            <div className="flex flex-col  gap-10 pt-10 text-lg">
              <p className="">Bygningskonstruktion og Design er vores specialitet, og vi er stolte af at tilbyde skræddersyede løsninger til vores kunder. Som erfarne bygningsingeniører forstår vi vigtigheden af at levere højkvalitetsarbejde inden for tidsplanen og budgettet.
                Vi har en dokumenteret track record af succesfulde projekter, lige fra boligbyggeri til kommercielle faciliteter. Vores ekspertise omfatter alt fra konceptudvikling og design til konstruktionsovervågning og kvalitetskontrol.
                Uanset om du har brug for rådgivning om nybyggeri, renovering af eksisterende strukturer eller løsninger til bæredygtigt byggeri, er vi her for at imødekomme dine behov og sikre, at dit projekt realiseres med succes.</p>
              <p className=""><span className="font-semibold">Vores Tilgang:</span><br />
                Vi tror på at skabe tætte samarbejdsrelationer med vores kunder og lytte nøje til deres behov og visioner. Ved at forstå dine mål og krav kan vi skræddersy løsninger, der opfylder dine forventninger og overstiger dine forventninger.
                Vores dedikerede team af ingeniører og designere er passionerede og engagerede i at levere enestående resultat, der ikke kun opfylder tekniske standarder, men også skaber værdi og skønhed i det byggede miljø.</p>
              <Link href="/" className="text-accent font-bold inline-flex items-center hover:underline">Se hvilke projekter vi har arbejdet på <span><PiArrowRightFill className="text-2xl" /></span></Link>
            </div>
          </div>
        </section>

        <section className="py-10 bg-accentBg px-5">
          <div className="max-w-7xl mx-auto text-center flex flex-col items-center gap-5">
            <SectionHeading heading="skal vi arbejde sammen?" className="text-2xl sm:text-3xl" />
            <p className="text-base md:text-2xl font-semibold">Ta&apos; en uforpligtende samtale med os, og se hvad vi kan gøre for jeres projekter.</p>
            <CtaButton to="/kontakt" content="kontakt os" className="mt-0 md:mt-4" />
          </div>
        </section>
      </main>
    </NextUIProvider>
  );
}
