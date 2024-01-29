import Header from '@/components/Dashboard/Header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
        <section className='mt-4 px-4 w-full'>
            <Header title={"Favorite Collections"}/>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                <Link className=' relative border-2 border-color-electricBlue' href="">
                    <Image className="w-full" src="" alt='' width={350} height={350}/>
                    <div className='absolute flex justify-center items-center bottom-0 w-full h-16 text-color-electricBlue bg-color-secondary'>
                        <h5 className='text-xl text-center'>Judul Anime</h5>
                    </div>
                </Link>
                <Link className=' relative border-2 border-color-electricBlue' href="">
                    <Image className="w-full" src="" alt='' width={350} height={350}/>
                    <div className='absolute flex justify-center items-center bottom-0 w-full h-16 text-color-electricBlue bg-color-secondary'>
                        <h5 className='text-xl text-center'>Judul Anime</h5>
                    </div>
                </Link>
                <Link className=' relative border-2 border-color-electricBlue' href="">
                    <Image className="w-full" src="" alt='' width={350} height={350}/>
                    <div className='absolute flex justify-center items-center bottom-0 w-full h-16 text-color-electricBlue bg-color-secondary'>
                        <h5 className='text-xl text-center'>Judul Anime</h5>
                    </div>
                </Link>
                <Link className=' relative border-2 border-color-electricBlue' href="">
                    <Image className="w-full" src="" alt='' width={350} height={350}/>
                    <div className='absolute flex justify-center items-center bottom-0 w-full h-16 text-color-electricBlue bg-color-secondary'>
                        <h5 className='text-xl text-center'>Judul Anime</h5>
                    </div>
                </Link>
                <Link className=' relative border-2 border-color-electricBlue' href="">
                    <Image className="w-full" src="" alt='' width={350} height={350}/>
                    <div className='absolute flex justify-center items-center bottom-0 w-full h-16 text-color-electricBlue bg-color-secondary'>
                        <h5 className='text-xl text-center'>Judul Anime</h5>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Page