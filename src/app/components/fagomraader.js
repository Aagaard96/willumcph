import Link from 'next/link'
import React from 'react'
import { FaHandshake } from "react-icons/fa6";
import { FaHelmetSafety } from "react-icons/fa6";
import { AiFillSchedule } from "react-icons/ai";
import { SiQuicklook } from "react-icons/si";
import { FaVest } from "react-icons/fa6";
import { GiHammerNails } from "react-icons/gi";



export default function Fagomraader() {
    const fag = [
        {
            title: "bygherrerådgivning",
            img: <FaHandshake className='text-accent' size={75} />,
            button: "til bygherrerådgivning",
            link: "/fagomraader/bygherreraadgivning",
            content: "Bygherrerådgivning sikrer optimal projektledelse, budgetstyring og kvalitetssikring i byggeprocessen. Med ekspertise og erfaring guider vi dig trygt gennem hele projektet fra planlægning til afslutning."
        },
        {
            title: "byggeteknisk rådgivning",
            img: <AiFillSchedule className='text-accent' size={75} />,
            button: "til byggeteknisk rådgivning",
            link: "/fagomraader/byggeteknisk-raadgivning",
            content: "Bygherrerådgivning sikrer optimal projektledelse, budgetstyring og kvalitetssikring i byggeprocessen. Med ekspertise og erfaring guider vi dig trygt gennem hele projektet fra planlægning til afslutning."
        },
        {
            title: "byggetilsyn",
            img: <FaVest className='text-accent' size={75} />,
            button: "til byggetilsyn",
            link: "/fagomraader/byggetilsyn",
            content: "Bygherrerådgivning sikrer optimal projektledelse, budgetstyring og kvalitetssikring i byggeprocessen. Med ekspertise og erfaring guider vi dig trygt gennem hele projektet fra planlægning til afslutning."
        },
        {
            title: "sikkerheds repræsentant",
            img: <FaHelmetSafety className='text-accent' size={75} />,
            button: "til sikkerhedsrepræsentation",
            link: "/fagomraader/sikkerhedsrepraesentant",
            content: "Bygherrerådgivning sikrer optimal projektledelse, budgetstyring og kvalitetssikring i byggeprocessen. Med ekspertise og erfaring guider vi dig trygt gennem hele projektet fra planlægning til afslutning."
        },
        {
            title: "entrepriseretslig rådgivning",
            img: <SiQuicklook className='text-accent' size={75} />,
            button: "til entrepriseret",
            link: "/fagomraader/entrepriseret",
            content: "Bygherrerådgivning sikrer optimal projektledelse, budgetstyring og kvalitetssikring i byggeprocessen. Med ekspertise og erfaring guider vi dig trygt gennem hele projektet fra planlægning til afslutning."
        },
        {
            title: "totalrådgivning",
            img: <GiHammerNails className='text-accent' size={75} />,
            button: "til totalrådgivning",
            link: "/fagomraader/totalraadgivning",
            content: "Bygherrerådgivning sikrer optimal projektledelse, budgetstyring og kvalitetssikring i byggeprocessen. Med ekspertise og erfaring guider vi dig trygt gennem hele projektet fra planlægning til afslutning."
        },
    ];

    return (
        <>
            {fag.map((fag, index) => (
                <div key={index} className='w-[200px] h-[200px] rounded border-1 border-accent bg-mainBg uppercase grid grid-rows-5 shadow-md shadow-accent'>
                    <div className='row-span-3 row-start-1 grid place-items-center'>
                        {fag.img}
                    </div>
                    <h3 className='row-start-4 grid place-content-center text-center text-sm'>{fag.title}</h3>
                    <Link href={fag.link} className='bg-accent row-start-5 text-heroText flex items-center justify-center'>læs mere</Link>
                </div>
            ))}
        </>
    )
}
