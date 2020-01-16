import React from 'react'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles(theme => ({
    div:{
        display : 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '80vw',
        padding: '10px',
    },
    per:{
        margin : '5px',
        width: '24%',
        boxShadow: '2px 2px 10px gray',
        borderRadiua: '10px',
        minWidth: '200px',
        padding: '20px',
    }
}))


const persons = [
    {
        img: 'image link1',
        name: 'name1',
        desig: 'desig'
    },
    {
        img: 'image link1',
        name: 'name1',
        desig: 'desig'
    },
    {
        img: 'image link1',
        name: 'name1',
        desig: 'desig'
    },
    {
        img: 'image link1',
        name: 'name1',
        desig: 'desig'
    },
    {
        img: 'image link1',
        name: 'name1',
        desig: 'desig'
    },
    {
        img: 'image link1',
        name: 'name1',
        desig: 'desig'
    },
    {
        img: 'image link1',
        name: 'name1',
        desig: 'desig'
    },
    {
        img: 'image link1',
        name: 'name1',
        desig: 'desig'
    },
    {
        img: 'image link1',
        name: 'name1',
        desig: 'desig'
    },
]


const MeetCouncil= () => {
    const classes = useStyles()

    const generatePerson = () => {
        return (
            persons.map((person, index) => 
                <div key={index} className={classes.per}>
                    <img src={person.img} />
                    <div>
                        Name: {person.name}
                    </div>
                    <div>
                        Desig: {person.desig}
                    </div>
                </div>
            )
        )
    }

    return (
    <div align="center">
        <h1 align="center" style={{backgroundColor: 'black', color: 'white', padding: '5px 0px 5px 0px'}}>
        <Button component={ Link } to="/" variant="contained" style={{backgroundColor: 'black', color: 'white'}}>
            <HomeRoundedIcon fontSize='large' />
        </Button>
        </h1>

        <Typography variant="h6" style={{ color: '#143D7A', fontSize: '40px' }} align='center'>
            OUR TEAM
        </Typography>
        <div className={classes.div} align="center">
            {generatePerson()}
        </div>
    </div>
    )
}      


export default MeetCouncil
