import React from 'react'
import { Characters } from '../component/Characters'
import { Header } from '../component/Header'
import Sound from 'react-sound'
import { useResponsive } from '../hooks/useResponsive'
import { useStyles } from '../styles/useStyles'
import { useCompareCard } from '../hooks/useCompareCard'
import { 
    Grid, 
    Container, 
    Button, 
    Typography
} from '@material-ui/core'
import winner from '../audios/winner.mp3'
import candy from '../audios/candy.mp3'
import navigate from '../audios/navigate.mp3'


export const Home = ({ concatData }) => { 
    const classes = useStyles()
    const { 
        allData, 
        intentos, 
        counter, 
        sound, 
        card, 
        compareCard 
    } = useCompareCard(concatData)
    const { media, spacing, fontsize } = useResponsive(classes)
    console.log('counter >>',counter);
    if(counter === 8){
        return(
            <div className={classes.play}> 
                <Typography variant={fontsize} gutterBottom className={classes.ancla}>
                    Lo has logrado en {intentos} intentos.
                </Typography>
                <Button variant="contained" color="secondary" className={classes.btn}>
                    <a className={classes.ancla} href="/">Volver a Jugar</a>
                </Button>
                <Sound 
                    url={winner} 
                    playStatus={Sound.status.PLAYING}
                />
            </div>
        )
    }
  
    const SoundCard = sound 
        ? candy
        : navigate
    return (
        <>
            <Header intentos={intentos}/>

            <div className={classes.div} >
                <Grid 
                    // container 
                    className={classes.grid} 
                    spacing={spacing} 
                >

             {
                allData.map((result) => {
                   return result.map((item, index) => {

                    return <Characters
                            key={index}
                            {...item}
                            card={card}
                            compareCard={compareCard}
                            urlSound={SoundCard}
                        />
                    })
                    })
                }
                </Grid>
            </div>
        </>
    )
}











