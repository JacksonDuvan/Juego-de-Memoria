import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
    // Home
    container:{
        width: 800,
    },
    container1:{
        width: 300,
    },
    ancla: {
        color: '#fff',
        textDecoration: "none",
        fontWeight: "bold",
        lineHeight: 2,
        letterSpacing: 1,
        textAlign: "center",
    },
    div: {
        display: "flex",
        justifyContent: "center",
    },
    btn: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    },
    play: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh"
    },

    // Header
    root:{
        flexGrow: 1,
        paddingLeft: theme.spacing(3),
    },
    title:{
        padding: '0 30px',
    },
    imgRickMorty:{
        width: 160,
    },
    header:{
        paddingBottom: 10,
    },
    // Characters
    item:{
        borderRadius: 5,
        height: 150,
        width: 150,
        cursor: "pointer"
    },
    item2:{
        borderRadius: 5,
        height: 60,
        width: 60,
        cursor: "pointer"
    },

    // App
    loading: {
        color: 'white',
    },
    progress:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    }
}))
