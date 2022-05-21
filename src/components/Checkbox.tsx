interface CheckboxStyleI {
    input?: string,
    label?: string
}

interface ICheckbox {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    checked: boolean,
    placeholder: string,
    id: string,
    customClasses?: CheckboxStyleI
}

function Checkbox ({
    checked,
    placeholder,
    id,
    onChange,
    customClasses
} : ICheckbox) {
    return <div className="flex items-center gap-1">
        <input
            type="checkbox"
            id={id || placeholder}
            checked={checked}
            onChange={onChange}
            className={customClasses?.input}
        />
        <label
            htmlFor={id || placeholder}
            className={`select-none	${customClasses?.label}`}
        >
            {placeholder}
        </label>
    </div>
}

export default Checkbox