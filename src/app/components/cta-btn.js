import Link from "next/link";

export default function CtaButton({ content, to }) {
    return (
        <Link href={to}
            className="w-[5rem] h-[2.5rem] lg:w-[10rem] lg:h-[4rem] bg-accent rounded-md text-mainBg hover:bg-accent/80 uppercase border-2 border-mainBg mt-4 flex items-center justify-center">
            {content}
        </Link>
    )
}
