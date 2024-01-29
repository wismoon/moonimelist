"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"


/**
 * this is where we make seach bar input
 * and the logic behind the search
 */
const InputSearch = () => {
    
    const searchRef = useRef()
    const router = useRouter()
    const handleSearch = (event) => {
        const keyword = searchRef.current.value
        if (!keyword || keyword.trim() == "") return
        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            router.push(`/search/${keyword}`)
        }
    }

    return (
        <div className="relative">
            <input 
                placeholder="Search..." 
                className="w-full p-2 rounded-2xl"
                ref={searchRef}
                onKeyDown={handleSearch}
            />
            <button className="absolute top-2 end-2" onClick={handleSearch}>
                <MagnifyingGlass size={25} />
            </button>
        </div>
    )
}

export default InputSearch