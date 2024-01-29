import React from 'react'


/**
 * reusable api where put variable fetch like resource and query
 * the two variable used if the api dont have many nested data
 * resource is where you get the main data
 * query is where you get query data
 * and then the response json stored at anime 
 * and we can use anime to other pages without needed fetching again
 * 
 */
export const getAnimeResponse = async(resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const anime = await response.json()
    return anime
}

export const getNestedResponse = async(resource, objetProperty) => {
    const response = await getAnimeResponse(resource)
    return response.data.flatMap(item => item[objetProperty])
}

export const randomizeAnime = (data, gap) => {
    const first = ~~(Math.random() * (data.length - gap) +1)
    const last = first + gap
    
    const result = {
        data: data.slice(first, last)
    }

    return result
}
