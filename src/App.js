import React, { useState } from 'react'
import { Home } from './pages/Home'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { CircularProgress } from '@material-ui/core'
import { useStyles } from './styles/useStyles'

const getData = gql`
    query getData{
    characters{
    results{
        id
        name
        image
    }
    }
},
`

export const App = () => {
    const { loading, error, data } = useQuery(getData)
    const classes = useStyles()

    if(loading) return <div className={classes.progress}>
        <CircularProgress className={classes.loading} />
    </div>

    const { results } = data.characters

    const results2 = JSON.parse(JSON.stringify(results))
    const concatData = results.slice(0,8).concat(results2.slice(0,8))
    concatData.sort(() => Math.random() - .5)  

    return <Home concatData={concatData}/>
}