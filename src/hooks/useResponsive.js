import { useState, useEffect } from 'react'
import { useMediaQuery } from '@material-ui/core'

export const useResponsive = (classes) => {
    const matches = useMediaQuery('(max-width:450px)')
    const [media, setMedia] = useState()
    const [letter, setLetter] = useState()
    const [spacing, setSpacing] = useState()
    const [fontsize, setFontsize] = useState("h2")

    const mediaQuery = () => {
        if(matches){
            setMedia(classes.container1)
            setLetter(classes.item2)
            setSpacing(1)
            setFontsize("h6")
        }else {
            setMedia(classes.container)
            setLetter(classes.item)
            setSpacing(2)
            setFontsize("h2")
        }
    }
    useEffect(() => {
        mediaQuery()
    }, [matches])

    return { media, spacing, fontsize, letter }
}