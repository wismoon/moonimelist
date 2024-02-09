import Header from '@/components/Dashboard/Header'
import { authUserSession } from '@/libs/auth-libs'
import prisma from '@/libs/prisma'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = async () => {
    const user = await authUserSession()
    const collection = await prisma.collection.findMany({
        where: { user_email: user.email }
    })


    return (
        <section className='mt-4 px-4 w-full'>
            <Header title={"Favorite Collections"} />
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                {collection.map((collect, index) => {
                    return (
                        <Link key={index} href={`/anime/${collect.anime_mal_id}`} className='relative' >
                            <Image className="w-full" src={collect.anime_image} alt='' width={350} height={350} />
                            <div className='absolute flex justify-center items-center bottom-0 w-full h-16 text-color-electricBlue bg-color-secondary'>
                                <h5 className='text-xl text-center'>{collect.anime_title}</h5>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Page