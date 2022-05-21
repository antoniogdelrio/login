interface ITextField {
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string,
    type?: "text" | "password",
    customClasses?: string
}

function TextField ({
    placeholder,
    onChange,
    value,
    type='text',
    customClasses
} : ITextField) {
    return <input
        className={`p-2 border rounded w-full mb-2 transition focus:outline-0 focus:border-slate-700 ${customClasses}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={type}
    />
}

export default TextField