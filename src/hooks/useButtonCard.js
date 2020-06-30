import { useState } from 'react'
import Sound from 'react-sound'

export const useButtonCard = (compareCard, id, card) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [playing, setPlaying] = useState()

    const buttonCard = () => { 
        compareCard(id)
        if(card.length === 1 || card.length === 2){
            setIsFlipped(true)
            setPlaying(Sound.status.PLAYING)
        }
        setTimeout(() => {
                setIsFlipped(false)
                setPlaying(Sound.status.STOPED)
            }, 2000)
    }

    return { isFlipped, playing, buttonCard }
}