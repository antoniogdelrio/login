import React from "react";

interface IButton {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    label: string,
    customClasses?: string
}

function Button ({
    onClick,
    label,
    customClasses
} : IButton) {
    return <button
        className={`block px-2 py-2 transition bg-customRed text-white rounded-sm hover:bg-lightRed ${customClasses}`}
        onClick={onClick}
    >
        {label}
    </button>
}

export default Button;