"use client"
import React from "react";
import Hero from "../components/hero";
import Ansatte from "../components/ansatte";
import SectionHeading from "../components/sectionHeading";


export default function Team() {
    return (
        <>
            <Hero backgroundImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="vores team" />

            <article className="py-20 bg-accentBg">
                <div className="mx-auto max-w-7xl ">
                    <SectionHeading heading="willum består af dette fantastiske team:" />
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 mt-20">
                        <Ansatte />
                    </div>
                </div>
            </article>
        </>

    )
}
