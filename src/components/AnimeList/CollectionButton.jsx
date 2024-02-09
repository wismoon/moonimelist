"use client"

import React, { useState } from 'react'

const CollectionButton = ({ anime_mal_id, user_email, anime_image, anime_title }) => {

    const [isCreated, setIsCreated] = useState(false)

    const handleCollections = async (Event) => {
        Event.preventDefault()

        const data = { anime_mal_id, user_email, anime_image, anime_title }

        const response = await fetch("/api/v1/collection", {
            method: "POST",
            body: JSON.stringify(data)
        })

        const collection = await response.json()
        if (collection.status == 200) {
            setIsCreated(collection.isCreated)
        } return
    }

    return (
        <>
            {
                isCreated
                    ?
                    <p className='text-color-primary'>Adding to collections</p>
                    :
                    <button
                        onClick={handleCollections}
                        className='px-4 text-color-primary'>
                        colec
                    </button>
            }
        </>
    )
}

export default CollectionButton