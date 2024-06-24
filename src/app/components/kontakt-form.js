"use client"
import React from 'react'
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

export default function KontaktForm() {
    return (
        <form
            name="contact"
            method="POST"
            action="/kontakt/besked-sendt"
            netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
            data-netlify="true"
            className="rounded-md bg-mainBg shadow-sm shadow-accent text-mainText"
        >
            <input type="hidden" name="form-name" value="contact"/>
            <div className="px-5 py-5 mb-8 bg-accent rounded-t-md text-mainBg">
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
                    label="Navn:"
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
                    label="E-mail:"
                />
            </div>
            <div className="mb-8 px-5">
                <Select
                    name="Role[]"
                    variant="faded"
                    radius="sm"
                    isRequired
                    className="max-w-full"
                    label="Formål:"
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
                    label="Besked:"
                    className="max-w-full"
                />
            </div>
            <div data-netlify-recaptcha="true"></div>
            <div className="flex justify-center rounded-b-md bg-accent hover:bg-accent/50 transition-colors duration-200 text-mainBg">
                <button className='py-5 text-2xl uppercase' type='submit'>send besked</button>
            </div>
        </form>
    )
}
