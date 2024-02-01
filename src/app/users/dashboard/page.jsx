import authUserSession from '@/libs/auth-libs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = async () => {
    //get data users if signin proccess data to dashboard
    const user = await authUserSession()

    return (
        <div className='mt-8 text-color-primary flex flex-col justify-center items-center '>
            <h4 className='text-2xl'>Welcome, {user.name}</h4>
            <Image src={user.image} alt='..' width={250} height={250} />
            <div className='py-8 flex gap-4'>
                <Link
                    className='py-4 px-2 font-bold bg-color-secondary text-color-electricBlue'
                    href="/users/dashboard/collection"
                >My Collection</Link>
                <Link
                    className='py-4 px-2 font-bold bg-color-secondary text-color-electricBlue'
                    href="/users/dashboard/comment"
                >My Comment</Link>
            </div>

        </div>
    )
}

export default Page