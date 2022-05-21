import { useEffect, useState } from "react"

const getSessionValue = (key: string, defaultValue: any) => {
    const value = sessionStorage.getItem(key)

    if (value) return JSON.parse(JSON.stringify(value))

    return defaultValue
}

const useSessionStorage  = (key: string, defaultValue: string) => {
    const [value, setValue] = useState(getSessionValue(key, defaultValue))

    useEffect(() => {
        sessionStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value))
    }, [value])

    return [value, setValue]
}

export default useSessionStorage