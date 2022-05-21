import { createContext, Dispatch, SetStateAction, useState } from "react";

interface IGeneralContext {
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>
}

interface IGeneralContextProvider {
    children: JSX.Element
}

export const GeneralContext = createContext<IGeneralContext>({} as IGeneralContext)

function GeneralContextProvider ({children} : IGeneralContextProvider) {

    const [loading, setLoading] = useState(false)
    
    return <GeneralContext.Provider value={{
        loading,
        setLoading
    }}>
        {loading ? 
        <div className="flex justify-center items-center gap-5 w-screen h-screen bg-slate-200 opacity-40 absolute top-0 left-0">
            <div className="rounded-full w-6 h-6 bg-customRed animate-ping"></div>
            <div className="rounded-full w-6 h-6 bg-customRed animate-ping animation-delay-100"></div>
            <div className="rounded-full w-6 h-6 bg-customRed animate-ping animation-delay-150"></div>
        </div> : null
        }
        {children}
    </GeneralContext.Provider>

}

export default GeneralContextProvider
