import authUserSession from '@/libs/auth-libs'
import Link from 'next/link'
import React from 'react'

const UserProfile = async () => {
    //get user auth from handle authUserSession
    const user = await authUserSession()

    /**
     * logic for singin / signout text button
     * where if users login then print Sign Out else Sign In
     * and same with URL changed
     */
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="flex gap-2 justify-between">
            {
                //return users if already signin to dashboard
                user ? <Link href="/users/dashboard" className="py-1" >Dashboard</Link> : null
            }
            <Link href={actionURL} className="bg-color-secondary text-color-electricBlue py-1 px-4">{actionLabel}</Link>
        </div>
    )
}

export default UserProfile