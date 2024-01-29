"use client"

import { XCircle } from '@phosphor-icons/react'
import { YoutubeLogo } from '@phosphor-icons/react/dist/ssr'
import React, { useState } from 'react'
import YouTube from 'react-youtube'

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleVideoButton = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button
                    onClick={handleVideoButton}
                    className='text-color-primary float-right'
                >

                    <XCircle size={32} />
                </button>
                <YouTube
                    videoId={youtubeId}
                    onReady={(Event) => Event.target.pauseVideo()}
                    opts={option}
                />
            </div>
        )
    }

    const ButtonPlayer = () => {
        return (
            <button onClick={handleVideoButton}>
                <YoutubeLogo className="flex justify-center items-center" size={32} />
            </button>
        )
    }

    return isOpen ? <Player /> : <ButtonPlayer/>

}

export default VideoPlayer