import { getAnimeResponse } from '@/libs/api-libs'
import VideoPlayer from '@/components/Utilities/VideoPlayer'
import Image from 'next/image'
import React from 'react'

const Page = async ({ params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    return (
        <>
            <div className="pt-4 px-4">
                <h1 className="text-color-primary text-2xl">
                    {anime.data.title} - {anime.data.year}
                </h1>
            </div>
            <div className="pt-4 px-4 flex gap-2 sm:flex-nowrap flex-wrap text-color-primary">
                <Image
                    src={anime.data.images.webp.image_url}
                    alt={anime.data.images.jpg.image_url}
                    width={250}
                    height={250}
                    className="w-full rounded object-cover"
                />
                <p className="text-justify text-xl">
                    {anime.data.synopsis}
                </p>
            </div>
            <div className="pt-4 px-4 flex gap-2 text-color-primary">
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary">
                    <h3>Peringkat</h3>
                    <p>{anime.data.rank}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary">
                    <h3>Score</h3>
                    <p>{anime.data.score}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary">
                    <h3>Episode</h3>
                    <p>{anime.data.episodes}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary">
                    <h3>Members</h3>
                    <p>{anime.data.members}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary">
                    <h3>Trailer</h3>
                    <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
                </div>
            </div>
        </>
    )
}

export default Page