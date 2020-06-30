import React from 'react'
import { AppBar, Typography, Toolbar } from '@material-ui/core'
import RickMorty from '../images/rick-morty.png'
import { useStyles } from '../styles/useStyles'

export const Header = ({ intentos }) => {
    const classes = useStyles()
    return(
        <div className={classes.header}>
            <AppBar position="static">
                <Toolbar>
                <div className={classes.root}>
                <img src={RickMorty} className={classes.imgRickMorty} alt="rick-morty"/>
                </div>
                <Typography variant="h6" className={classes.title}>
                    Intentos: {intentos}
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}