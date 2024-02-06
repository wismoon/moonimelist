"use client"

import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponse } from "@/libs/api-libs"
import { ArrowLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

/**
 * this is where we make fuction search from json api myanimelist 
 * by getting the components AnimeList and use api property
 * variable keyword is from inputSeach where we declare it as input from search input 
 */
const Page = async ({ params }) => {
  const route = useRouter()
  const { keyword } = params
  const decodedKeyword = decodeURI(keyword)
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)

  

  return (
    <>
      {/** list anime terpopuler */}
      <section>
        <div className="mb-4 px-2 flex justify-between items-center">
          <Header title={`Your Search ${decodedKeyword}`} />
          <button onClick={() => route.back()} className='text-color-primary'>
            <ArrowLeft size={32} />
          </button>
        </div>
        <AnimeList api={searchAnime} />
      </section>
    </>
  )
}

export default Page
