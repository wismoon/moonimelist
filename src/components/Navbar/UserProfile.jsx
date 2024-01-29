import authUserSession from '@/libs/auth-libs'
import Link from 'next/link'
import React from 'react'

const UserProfile = async () => {
    const user = await authUserSession()

    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="flex gap-2 justify-between">
            { 
                user ? <Link href="/users/dashboard" className="py-1" >Dashboard</Link> : null
            }
            <Link href={actionURL} className="bg-color-secondary text-color-electricBlue py-1 px-4">{actionLabel}</Link>
        </div>
    )
}

export default UserProfile