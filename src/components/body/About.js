import * as React from 'react';
import { styled } from '@mui/material/styles';
import './About.css'
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Author from './about/avatar/Author'


const Div = styled('div')(({ theme }) => ({

    ...theme.typography.button,
    fontSize: "3em",
    fontFamily: "'Source Sans Pro', 'sans-serif'"

}));

const Dive = styled('div')(({ theme }) => ({

    ...theme.typography.button,
    fontSize: "1em",
    fontFamily: "'Source Sans Pro', 'sans-serif'"
}));

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function About() {

    return (

        <Box sx={{ width: '100%' }}>
            <Grid container spacing={2} columns={16}>
                <Grid xs={8}>
                    <div className="container" >
                        <Div>Hi, I'm Austin</Div>
                        <Dive>I'm a self-motivated software engineer based in Denver, Colorado who is skilled in building exceptional websites and applications. I am passionate about changing lives around me with or without tech. Oh, I also took this background photo.</Dive>
                    </div>
                </Grid>
                <Grid xs={8}>
                    <div className="author" >
                        <Avatar style={{ width: "350px", height: "350px" }} src="https://i.ibb.co/xjN2hV1/IMG-8436.jpg" />
                    </div>
                </Grid>
            </Grid>

        </Box>

    );
}
export default About;