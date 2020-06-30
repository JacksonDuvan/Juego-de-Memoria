import React from 'react'
import { Grid } from '@material-ui/core'
import ReactCardFlip from 'react-card-flip'
import logo from '../images/logo4.png'
import Sound from 'react-sound'
import { useResponsive } from '../hooks/useResponsive'
import { useStyles } from '../styles/useStyles'
import { useButtonCard } from '../hooks/useButtonCard'

export const Characters = ({name, image, compareCard, id, card, urlSound}) => {
    const classes = useStyles()
    const { letter } = useResponsive(classes)

    const { isFlipped, playing, buttonCard } = useButtonCard(compareCard, id, card)

    return (
        <Grid item>
            <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={0.2}>   
                    <img 
                        className={letter} 
                        onClick={buttonCard} 
                        src={logo} 
                        alt="logo1"
                    />
                    <img 
                        src={image} 
                        className={letter}
                        alt={name}
                     />
            </ReactCardFlip >
            <Sound
                url={urlSound}
                playStatus={playing}
                onPlay={buttonCard}
            />

        </Grid>
    )
}