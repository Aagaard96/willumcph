"use client"
import React, { useEffect, useState } from "react";
import { FiMail } from "react-icons/fi";
import { IoChevronForward } from "react-icons/io5";
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, Dropdown, DropdownTrigger, DropdownItem, DropdownMenu, Link, Image } from "@nextui-org/react";

const menuItems = [
    { label: "forside", href: "/" },
    {
        label: "fagområder", href: "/#fagomraader", dropdown: true, dropdownItems: [
            { label: "bygherrerådgivning", href: "/fagomraader/bygherreraadgivning" },
            { label: "byggeteknisk rådgivning", href: "/fagomraader/byggeteknisk-raadgivning" },
            { label: "byggetilsyn", href: "/fagomraader/byggetilsyn" },
            { label: "totalrådgivning", href: "/fagomraader/totalraadgivning" },
            { label: "sikkerhedsrepræsentation", href: "/fagomraader/sikkerheds-repraesentantion" },
            { label: "entrepriseret", href: "/fagomraader/entrepriseretslig-raadgivning" },
        ]
    },
    { label: "kunder & projekter", href: "/kunder-projekter" },
    { label: "vores team", href: "/teamet-bag" },
    { label: "job & karriere", href: "/job-karriere" },
    { label: "kontakt", href: "/kontakt" }
];

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const [rotate, setRotate] = useState(0); // Initial rotation angle
    const [placement, setPlacement] = useState("bottom");

    useEffect(() => {
        const handleResize = () => {
            const newRotate = window.innerWidth >= 768 ? -90 : 0;
            const newPlacement = window.innerWidth >= 768 ? "right" : "bottom";

            setRotate(newRotate);
            setPlacement(newPlacement);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} className="bg-accent fixed top-0">
            <NavbarContent >
                <NavbarMenuToggle className="text-white" aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarBrand className="justify-center">
                <Link className="text-white hover:opacity-1 text-3xl md:text-4xl font-bold gap-0.5 items-baseline uppercase" href="/">
                    <h1>willum</h1><div className=" flex items-baseline bg-white w-[12px] h-[12px] rounded-full"></div>
                </Link>
            </NavbarBrand>

            <NavbarMenu
                className="gap-5 lg:gap-10 items-center justify-center bg-accent/50 ">
                {menuItems.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <Link
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white uppercase text-2xl md:text-4xl md:hover:underline"
                            href={item.href}
                        >
                            {item.label}
                        </Link>
                        {item.dropdown && (
                            <Dropdown
                                showArrow
                                offset={15}
                                key={`dropdown-${index}`}
                                placement={placement}
                                className="bg-accent/80 p-2 uppercase rounded text-white"
                            >
                                <DropdownTrigger>
                                    <Image style={{ transform: `rotate(${rotate}deg)` }}
                                        className="ml-2 cursor-pointer"
                                        src="/chevron-down.svg"
                                        width={30}
                                        height={30}
                                        alt="Vis fagområder"
                                    />
                                </DropdownTrigger>
                                <DropdownMenu
                                >

                                    {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                        <DropdownItem
                                            className="rounded"
                                            key={`dropdown-item-${dropdownIndex}`}
                                            href={dropdownItem.href}
                                        >
                                            {dropdownItem.label}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        )}
                    </div>
                ))}
            </NavbarMenu>

            <NavbarBrand className="justify-end">
                {/* <Link className="text-white hover:opacity-1 text-2xl md:text-4xl font-bold gap-0.5 items-baseline uppercase" href="/">
                    <Image
                        height={50}
                        width={50}
                        radius="none"
                        src="/logos/willumlogoWhite.png"
                    />
                </Link> */}
                <Link className="text-white" href="/kontakt">
                    <FiMail className="size-9" />
                </Link>

            </NavbarBrand>
        </Navbar >
    )
}
