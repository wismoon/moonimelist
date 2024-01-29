"use client"
import { ArrowLeft } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Header = ( {title} ) => {
    const router = useRouter()
    const handleBack = (Event) => {
        Event.preventDefault()
        router.back()
    }
    
    return (
        <div className='mb-4 flex justify-between items-center'>
            <h3 className='text-2xl text-color-primary'>
                {title}
            </h3>
            <button onClick={handleBack} className='text-color-primary'>
                <ArrowLeft size={32} />
            </button>
        </div>
    )
}

export default Header