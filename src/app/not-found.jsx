"use client"
import { CloudX, CodeBlock } from "@phosphor-icons/react"
import Link from "next/link"


/** custom not found page for custom purpose where we can change or add something as we wanted
 *  next js already have not found page by default
*/
const notFound = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center flex-col">
                <CloudX size={40} className="m-2 text-color-electricBlue"/>
                <h2 className="text-color-electricBlue text-2xl font-bold"> NOT FOUND ANYTHING HMMMMMMM</h2>
                <Link href="/" className="text-color-primary hover:text-color-electricBlue m-4 transition-all">Back Now</Link>
            </div>
        </div>
    )
}

export default notFound