"use client"

import React from 'react'

const CollectionButton = ({anime_mal_id, user_email}) => {

    const handleCollections = async (Event) => {
        Event.preventDefault()
        alert("OK")
    }

    return (
        <button
            onClick={handleCollections}
            className='px-4 text-color-primary'>
            colec
        </button>
    )
}

export default CollectionButton