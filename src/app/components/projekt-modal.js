"use client"
import Image from 'next/image'
import { IoCloseCircleSharp } from "react-icons/io5"
import React, { useState } from 'react'

const projekter = [
    {
        title: "Storstrøm & Co. Centeret",
        assignment: "Som partner og bygherrerådgiver har vores firma for nylig været involveret i et omfattende boligprojekt i hjertet af København. Projektet omhandlede opførelsen af en ny boligblok med 100 lejligheder samt tilhørende fællesområder og parkeringsfaciliteter",
        year: "2023",
        projectImage: "https://images.unsplash.com/photo-1554435493-93422e8220c8?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        customer: "Fjeldsø A/S",
        customerLogo: "/logos/willumlogoBlue.png",
    },
    {
        title: "ABC Holding A/S",
        assignment: "Som partner og bygherrerådgiver har vores firma for nylig været involveret i et omfattende boligprojekt i hjertet af København. Projektet omhandlede opførelsen af en ny boligblok med 100 lejligheder samt tilhørende fællesområder og parkeringsfaciliteter",
        year: "2023",
        projectImage: "https://images.unsplash.com/photo-1496851473196-e26508c21494?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        customer: "Fjeldsø A/S",
        customerLogo: "/logos/willumlogoBlue.png",
    },
    {
        title: "Hotel Del Sol",
        assignment: "Som partner og bygherrerådgiver har vores firma for nylig været involveret i et omfattende boligprojekt i hjertet af København. Projektet omhandlede opførelsen af en ny boligblok med 100 lejligheder samt tilhørende fællesområder og parkeringsfaciliteter",
        year: "2023",
        projectImage: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        customer: "Fjeldsø A/S",
        customerLogo: "/logos/willumlogoBlue.png",
    },
    {
        title: "Parken Rebirthed",
        assignment: "Som partner og bygherrerådgiver har vores firma for nylig været involveret i et omfattende boligprojekt i hjertet af København. Projektet omhandlede opførelsen af en ny boligblok med 100 lejligheder samt tilhørende fællesområder og parkeringsfaciliteter",
        year: "2023",
        projectImage: "https://images.unsplash.com/photo-1626365266370-fd7cb073c7d9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        customer: "Fjeldsø A/S",
        customerLogo: "/logos/willumlogoBlue.png",
    },
]

const Modal = ({ isOpen, onClose, imageSrc }) => {
    if (!isOpen) return null

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
            onClick={handleBackgroundClick}
        >
            <div className="relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-white rounded-full text-2xl font-bold"
                >
                    <IoCloseCircleSharp className='text-accent' />
                </button>
                <Image
                    src={imageSrc}
                    alt="Full Size"
                    width={600}
                    height={400}
                    className="rounded"
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
        </div>
    )
}

export default function ModalProjekt() {
    const [modalOpen, setModalOpen] = useState(false)
    const [modalImage, setModalImage] = useState('')

    const handleImageClick = (imageSrc) => {
        setModalImage(imageSrc)
        setModalOpen(true)
    }

    const handleCloseModal = () => {
        setModalOpen(false)
        setModalImage('')
    }

    return (
       <>
            {projekter.map((projekt, index) => (
       
                <article key={index} className="flex flex-col sm:flex-row shadow-lg rounded shadow-accent/50 bg-mainBg h-full">
                    <Image
                        className='w-full sm:w-1/2 rounded-t sm:rounded-l sm:rounded-tr-none cursor-pointer'
                        src={projekt.projectImage}
                        width={300}
                        height={300}
                        alt={projekt.title}
                        onClick={() => handleImageClick(projekt.projectImage)}
                    />

                    <div className='flex-1 rounded relative max-w-full flex flex-col'>
                        <h3 className='text-heroText uppercase text-lg font-semibold p-5 bg-accent sm:rounded-tr'>{projekt.title}</h3>
                        <section className='p-5 flex-grow flex flex-col justify-between' aria-labelledby="project-details">
                            <div className='flex-col items-baseline hidden sm:flex text-sm md:text-base lg:text-sm mb-2'>
                                <p className='font-semibold text-lg uppercase'>Arbejdsopgave:</p>
                                <p>{projekt.assignment}</p>
                            </div>
                            <div className='flex justify-between items-center text-lg lg:text-base'>
                                <div>
                                    <div className='flex gap-x-4 uppercase'>
                                        <p className='font-semibold'>Opført:</p>
                                        <p>{projekt.year}</p>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex gap-x-4'>
                                            <p className='font-semibold uppercase'>Kunde:</p>
                                            <p>{projekt.customer}</p>
                                        </div>
                                    </div>
                                </div>
                                <Image
                                    className='lg:w-[60px]'
                                    src={projekt.customerLogo}
                                    height={100}
                                    width={80}
                                    alt="Customer logo"
                                />
                            </div>
                        </section>
                    </div>
                </article>
            ))}
            <Modal isOpen={modalOpen} onClose={handleCloseModal} imageSrc={modalImage} />
        </>
    )
}
