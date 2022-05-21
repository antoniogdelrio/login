interface ITypography {
    type: "h1" | "h2" | "h3" | "p" | "span"
    value: string,
    customClasses?: string
}

function Typography ({
    type,
    value,
    customClasses
} : ITypography) {
    const CustomTypography = type

    return <CustomTypography className={customClasses}>{value}</CustomTypography>
}

export default Typography