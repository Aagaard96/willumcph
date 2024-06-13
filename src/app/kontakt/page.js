"use client"
import React from 'react'
import SectionHeading from '../components/sectionHeading'
import Hero from '../components/hero'
import { Input, Select, SelectItem, Textarea } from '@nextui-org/react'

const options = [
    {
        label: "Privat",
        value: "privat",
    },
    {
        label: "Erhverv",
        value: "erhverv",
    },
    {
        label: "Business",
        value: "business",
    },
    {
        label: "Øvrige",
        value: "øvrige",
    },
];

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

export default function Kontakt() {
    return (
        <>
            <Hero backgroundImage="/heroOverlay.jpg" title="kontakt os" />

            <article className="py-20 mx-auto max-w-7xl">
                <SectionHeading heading="hvad kan vi gøre for dig?" />
                <div className="flex gap-10 pt-10 text-lg">
                    <p className="flex-1">Bygningskonstruktion og Design er vores specialitet, og vi er stolte af at tilbyde skræddersyede løsninger til vores kunder. Som erfarne bygningsingeniører forstår vi vigtigheden af at levere højkvalitetsarbejde inden for tidsplanen og budgettet.
                        Vi har en dokumenteret track record af succesfulde projekter, lige fra boligbyggeri til kommercielle faciliteter. Vores ekspertise omfatter alt fra konceptudvikling og design til konstruktionsovervågning og kvalitetskontrol.
                        Uanset om du har brug for rådgivning om nybyggeri, renovering af eksisterende strukturer eller løsninger til bæredygtigt byggeri, er vi her for at imødekomme dine behov og sikre, at dit projekt realiseres med succes.</p>
                    <p className="flex-1"><span className="font-semibold">Vores Tilgang:</span><br />
                        Vi tror på at skabe tætte samarbejdsrelationer med vores kunder og lytte nøje til deres behov og visioner. Ved at forstå dine mål og krav kan vi skræddersy løsninger, der opfylder dine forventninger og overstiger dine forventninger.
                        Vores dedikerede team af ingeniører og designere er passionerede og engagerede i at levere enestående resultat, der ikke kun opfylder tekniske standarder, men også skaber værdi og skønhed i det byggede miljø.</p>
                </div>
            </article>

            <section className='py-20 bg-accentBg'>
                <div className='max-w-7xl mx-auto'>
                    <SectionHeading heading="hvilket formål?" />
                    <div className='flex justify-between pt-10 max-w-7xl mx-auto'>
                        <div className='flex flex-col justify-evenly'>
                            {formaal.map((item, i) => (
                                <article key={i} className='w-[400px] h-[100px] bg-white rounded p-4 flex flex-col justify-evenly border-1 border-accent/50 shadow-md shadow-accent/50'>
                                    <h4 className='uppercase font-semibold'>{item.title}</h4>
                                    <p>{item.content}</p>
                                </article>
                            ))}
                        </div>
                        <form
                            id="formular"
                            name="contact"
                            method="POST"
                            action="/kontakt-os"
                            netlify-honeypot="bot-field"
                            data-netlify="true"
                            className="lg:w-[800px] max-w-lg mx-auto lg:mx-0 rounded-md bg-white shadow-sm shadow-accent text-white"
                        >
                            <input type="hidden" name="form-name" value="contact" />
                            <div className="px-5 py-5 mb-5 bg-accent rounded-t-md">
                                <h3 className="text-2xl font-extrabold uppercase">
                                    Skriv til os:
                                </h3>
                                <span className="font-medium">Vi bestræber os på at svare indenfor 1-3 hverdage.</span>
                            </div>
                            {/* Bot-trigger field */}
                            <div className="hidden">
                                <label>
                                    Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                                </label>
                            </div>
                            <div className="mb-8 px-5">
                                <Input
                                    isRequired
                                    radius='sm'
                                    variant="faded"
                                    type="text"
                                    name="name"
                                    id="name"
                                    label="Navn"
                                    />
                            </div>
                            <div className="mb-8 px-5">
                                <Input
                                    isRequired
                                    radius="sm"
                                    variant="faded"
                                    type="email"
                                    name="email"
                                    id="email"
                                    label="E-mail"
                                />
                            </div>
                            <div className="mb-8 px-5">
                                <Select
                                    name="Role[]"
                                    variant="faded"
                                    radius="sm"
                                    isRequired
                                    label="Emne:"
                                    className="max-w-full"
                                >
                                    {options.map((option, i) => (
                                        <SelectItem key={i} value={option.value}>
                                            {option.label}
                                        </SelectItem>
                                    ))}
                                </Select>
                            </div>
                            <div className="mb-8 px-5">
                                <Textarea
                                    variant="faded"
                                    radius="sm"
                                    isRequired
                                    name="message"
                                    id="message"
                                    placeholder="Skriv din besked her.."
                                    label="Indhold"
                                    className="max-w-full"
                                />
                            </div>
                            <div className="flex justify-center rounded-b-md bg-accent">
                                <button className='py-5 text-2xl' type='submit'>SEND</button>
                            </div>
                            <div data-netlify-recaptcha="true"></div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
