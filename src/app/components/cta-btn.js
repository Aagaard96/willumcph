import Link from "next/link";

export default function CtaButton({ content, to, className }) {
    return (
        <Link href={to}
            className={`w-[7.5rem] h-[3.25rem] lg:w-[10rem] lg:h-[4rem] bg-accent rounded-md text-mainBg hover:bg-accent/80 uppercase border-2 border-mainBg mt-4 flex items-center justify-center ${className}`}>
            {content}
        </Link>
    )
}
