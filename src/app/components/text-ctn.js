import React from 'react'

export default function TextCtn({ children, className }) {
    return (
        <div className={`mt-7 lg:max-w-lg flex flex-col gap-5 text-base sm:text-lg ${className}`}>
            {children}
        </div>
    )
}
