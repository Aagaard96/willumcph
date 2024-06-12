import { Image, Link } from "@nextui-org/react"
import { LuLinkedin } from "react-icons/lu";

export default function Footer() {
    return (
        <footer className="bg-accent">
            <div className="mx-auto w-full max-w-screen-lg p-8 py-6 lg:py-8">
                <div className="md:flex md:justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center justify-left">
                            <Image src="/logos/willumlogoWhite.png"
                                height={150}
                                width={150}
                                className="rounded-none" alt="Willum Logo" />
                        </Link>
                    </div>
                    <div className="flex justify-between sm:gap-6">
                        <div>
                            <h2 className="text-sm font-semibold text-white uppercase ">willum cph.</h2>
                            <ul className="text-white font-medium">
                                <li>
                                    <p>c/o Morph House</p>
                                </li>
                                <li>
                                    <p>Sortedam Dossering 55</p>
                                </li>
                                <li>
                                    <p >2100 København Ø.</p>
                                </li>
                                <li>
                                    <p>CVR: 4426 9678</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold text-white uppercase ">Kontakt:</h2>
                            <ul className="text-white font-medium">
                                <li>
                                    <Link className="text-white" href="mailto:abw@willumcph.com">abw@willumcph.com</Link>
                                </li>
                                <li>
                                    <Link className="text-white" href="tel:">+45 5384 8415</Link>
                                </li>
                                <li>
                                    <Link
                                        isExternal
                                        href="https://www.linkedin.com/company/willumcph/"
                                    >
                                        <LuLinkedin fill="white" stroke="white" className="size-6" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>



    )
}