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
                        url={'http://sonidosmp3gratis.com/sounds/bites-ta-da-winner.mp3'} 
                        playStatus={Sound.status.PLAYING}
                    />
                </div>
            )
    }else{
        return <>
        <Header intentos={intentos}/>

        <Container className={classes.div} >
        <Grid container className={media} justify="center" spacing={spacing}>
             {
                allData.map((result, index) => {
                    const Sound = sound 
                        ? 'http://sonidosmp3gratis.com/sounds/candy-crush-bomba-color.mp3' 
                        : 'http://sonidosmp3gratis.com/sounds/SD_NAVIGATE_53.mp3' 

                    return <Characters
                        key={index}
                        {...result}
                        card={card}
                        compareCard={compareCard}
                        urlSound={Sound}
                    />
                })
            }
        </Grid>
        </Container>
        </>
    }
}












