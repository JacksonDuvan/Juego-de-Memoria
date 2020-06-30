import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import './index.css'

const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql/'
})


ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>, 
    document.getElementById('app')
)