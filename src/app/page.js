import { NextUIProvider } from "@nextui-org/react";
import SectionHeading from "./components/sectionHeading";
import Fagomraader from "./components/fagomraader";
import Projekter from "./components/projekter";
import { PiArrowRightFill } from "react-icons/pi";
import Link from "next/link";
import CtaButton from "./components/cta-btn";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="mx-auto">
        <header
          className="w-full h-screen bg-no-repeat bg-center bg-cover mx-auto justify-center items-start grid grid-cols-4 grid-rows-3"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 25, 0.25), rgba(0, 0, 25, 0.25)), url('/heroImage.jfif')`,
          }}
        >
          <div className="flex flex-col font-medium max-w-6xl uppercase text-heroText col-start-2 col-span-2 row-start-2 pt-10">
            <h1 className="text-6xl md:text-4xl lg:text-[85px]">willum cph.</h1>
            <h2 className="text-4xl md:text-3xl mt-20">bygherrerådgivning &amp; <br /> styringsentreprise</h2>
            <CtaButton to="#ekspertise" content="læs mere" />
          </div>
        </header>

        <section className="py-20 max-w-7xl mx-auto" id="ekspertise">
          <SectionHeading heading="vores ekspertise" />
          <div className="flex gap-10 pt-10 text-lg">
            <p className="flex-1">Bygningskonstruktion og Design er vores specialitet, og vi er stolte af at tilbyde skræddersyede løsninger til vores kunder. Som erfarne bygningsingeniører forstår vi vigtigheden af at levere højkvalitetsarbejde inden for tidsplanen og budgettet.
              Vi har en dokumenteret track record af succesfulde projekter, lige fra boligbyggeri til kommercielle faciliteter. Vores ekspertise omfatter alt fra konceptudvikling og design til konstruktionsovervågning og kvalitetskontrol.
              Uanset om du har brug for rådgivning om nybyggeri, renovering af eksisterende strukturer eller løsninger til bæredygtigt byggeri, er vi her for at imødekomme dine behov og sikre, at dit projekt realiseres med succes.</p>
            <p className="flex-1"><span className="font-semibold">Vores Tilgang:</span><br />
              Vi tror på at skabe tætte samarbejdsrelationer med vores kunder og lytte nøje til deres behov og visioner. Ved at forstå dine mål og krav kan vi skræddersy løsninger, der opfylder dine forventninger og overstiger dine forventninger.
              Vores dedikerede team af ingeniører og designere er passionerede og engagerede i at levere enestående resultat, der ikke kun opfylder tekniske standarder, men også skaber værdi og skønhed i det byggede miljø.</p>
          </div>
        </section>

        <section className="py-20 bg-accentBg">
          <div className="max-w-7xl mx-auto">
            <SectionHeading heading="vores fagområder" />
            <div className="flex gap-10 pt-10 text-lg">
              <p className="flex-1">Bygningskonstruktion og Design er vores specialitet, og vi er stolte af at tilbyde skræddersyede løsninger til vores kunder. Som erfarne bygningsingeniører forstår vi vigtigheden af at levere højkvalitetsarbejde inden for tidsplanen og budgettet.
                Vi har en dokumenteret track record af succesfulde projekter, lige fra boligbyggeri til kommercielle faciliteter. Vores ekspertise omfatter alt fra konceptudvikling og design til konstruktionsovervågning og kvalitetskontrol.
                Uanset om du har brug for rådgivning om nybyggeri, renovering af eksisterende strukturer eller løsninger til bæredygtigt byggeri, er vi her for at imødekomme dine behov og sikre, at dit projekt realiseres med succes.</p>
              <p className="flex-1"><span className="font-semibold">Vores Tilgang:</span><br />
                Vi tror på at skabe tætte samarbejdsrelationer med vores kunder og lytte nøje til deres behov og visioner. Ved at forstå dine mål og krav kan vi skræddersy løsninger, der opfylder dine forventninger og overstiger dine forventninger.
                Vores dedikerede team af ingeniører og designere er passionerede og engagerede i at levere enestående resultat, der ikke kun opfylder tekniske standarder, men også skaber værdi og skønhed i det byggede miljø.</p>
            </div>
            <article className="pt-20 flex gap-5">
              <Fagomraader />
            </article>
          </div>
        </section>

        <section className="py-20 max-w-7xl mx-auto flex gap-5">
          <article className="grid grid-cols-2 gap-y-5 flex-1 ">
            <Projekter />
          </article>
          <div className="flex-1">
            <SectionHeading heading="vores ekspertise" />
            <div className="flex flex-col gap-10 pt-10 text-lg">
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

        <section className="py-10 bg-accentBg">
          <div className="max-w-7xl mx-auto text-center flex flex-col items-center gap-5">
            <SectionHeading heading="skal vi arbejde sammen?" />
            <p className="text-2xl font-semibold">Ta&apos; en uforpligtende samtale med os, og se hvad vi kan gøre for jeres projekter.</p>
            <CtaButton to="/kontakt" content="kontakt os" />
          </div>
        </section>
      </main>
    </NextUIProvider>
  );
}
