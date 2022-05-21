interface ILink {
    to: string,
    label: string,
    customClasses?: string
}

function Link ({
    to,
    label,
    customClasses
} : ILink) {
    return <a className={`underline text-customRed hover:text-lightRed ${customClasses}`} href={to}>{label}</a>
}

export default Link