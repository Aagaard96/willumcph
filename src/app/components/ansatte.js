"use client"
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";

export default function Ansatte({ }) {

    const ansatInfo = [
        {
            name: "Jacob Udsen",
            position: "Chef for Eksterne Projekter",
            position_eng: "Chief of External Projects",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel fringilla libero. Quisque eu efficitur augue. Nulla facilisi. Sed vulputate, turpis eget cursus dictum, justo ipsum consequat nunc, sit amet tempus ligula purus vel purus.",
            img: "/employeesImg/emp_jauds.jpg",
            tel: "+45 2476 0467",
            email: "jhu@willumcph.com",
            linkedin: "https://www.linkedin.com/in/jacob-hogdal-udsen/"
        },
        {
            name: "Ferhat Avci",
            position: "Entrepriseleder",
            position_eng: "Assistant Project Manager",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel fringilla libero. Quisque eu efficitur augue. Nulla facilisi. Sed vulputate, turpis eget cursus dictum, justo ipsum consequat nunc, sit amet tempus ligula purus vel purus.",
            img: "/employeesImg/emp_ferhat.jpg",
            tel: "+45 4273 3568",
            email: "fea@willumcph.com",
            linkedin: "https://www.linkedin.com/in/andersbw/"
        },
        {
            name: "Hans Hansen",
            position: "Projektleder",
            position_eng: "Project Manager",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel fringilla libero. Quisque eu efficitur augue. Nulla facilisi. Sed vulputate, turpis eget cursus dictum, justo ipsum consequat nunc, sit amet tempus ligula purus vel purus.",
            img: "/employeesImg/emp_placeholder.jpg",
            tel: "+45 2476 0467",
            email: "abw@willumcph.com",
            linkedin: "https://www.linkedin.com/in/andersbw/"
        },
        {
            name: "Anders Bech Willumsen",
            position: "Stifter & Direktør",
            position_eng: "Founder & CEO",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel fringilla libero. Quisque eu efficitur augue. Nulla facilisi. Sed vulputate, turpis eget cursus dictum, justo ipsum consequat nunc, sit amet tempus ligula purus vel purus.",
            img: "/employeesImg/emp_abw.jpg",
            tel: "+45 2476 0467",
            email: "abw@willumcph.com",
            linkedin: "https://www.linkedin.com/in/andersbw/"
        },

    ]

    return (
        <>
            {ansatInfo.map((info, index) => (
                <Card key={index} className="place-self-center max-w-[300px] sm:max-w-[400px] mt-20 overflow-visible border-accent/50 border rounded-md text-accent">
                    <CardHeader className="justify-center flex flex-col gap-5 -mt-20">
                        <Image className="md:w-[300px] border-3 border-accent"
                            alt="Employee Profile"
                            radius="full"
                            src={info.img}
                            height={175}
                            width={175}
                            shadow="none"
                        />
                        <div className="flex justify-center text-center flex-col">
                            <h3>{info.name}</h3>
                            <h2 className="text-medium"><strong>{info.position}</strong></h2>
                            <h3 className=" text-sm text-default-500">{info.position_eng}</h3>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody className="text-neutral-600">
                        <p className="p-2">{info.description}</p>
                    </CardBody>
                    <CardFooter className="gap-2 flex justify-evenly infos-center bg-accent rounded-b-md">
                        <Link
                            isExternal
                            href={`tel:${info.tel}`}>
                            <FiPhone stroke="white" size={25} />
                        </Link>
                        <Link
                            isExternal
                            href={`mailto:${info.email}`}>
                            <FiMail stroke="white" size={32} />
                        </Link>
                        <Link
                            isExternal
                            href={info.linkedin}
                        >
                            <LuLinkedin fill="white" size={30} stroke="white" />
                        </Link>
                    </CardFooter>
                </Card>
            ))
            }
        </>
    );
}
