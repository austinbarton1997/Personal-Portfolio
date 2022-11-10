import * as React from 'react';
import { styled } from '@mui/material/styles';
import './About.css'
import Paper from '@mui/material/Paper';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Avatar from '@mui/material/Avatar'

const Div = styled('div')(({ theme }) => ({

    ...theme.typography.button,
    fontSize: "4em",
    fontFamily: "'Inconsolata', monospace"

}));

const Dive = styled('div')(({ theme }) => ({

    ...theme.typography.button,
    fontSize: "1.1em",
    fontFamily: "'Inconsolata', monospace"
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
        <Container>
            <Row>
                <Col sm={8}><Div>Madison Graham</Div></Col>
                <Col sm={4}><Dive>I'm a self-motivated software engineer based in Denver, Colorado who is skilled in building exceptional websites and applications. I am passionate about changing lives around me with or without tech.</Dive></Col>
            </Row>
            <Row>
                <Avatar className="author" style={{ display: 'flex', justifyContent: 'right', width: "350px", height: "350px" }} src="https://media.licdn.com/dms/image/C4E03AQEVFb2DWYiG3Q/profile-displayphoto-shrink_800_800/0/1617158508193?e=1672272000&v=beta&t=yMHd0iEjMA8Qt33td-DclrKqtFxtFj8U8ErMLVUXcHM" />
            </Row>
        </Container>
    );
}

{/* <div className="author" >
                    <Avatar style={{ width: "350px", height: "350px" }} src="https://media.licdn.com/dms/image/C4E03AQEVFb2DWYiG3Q/profile-displayphoto-shrink_800_800/0/1617158508193?e=1672272000&v=beta&t=yMHd0iEjMA8Qt33td-DclrKqtFxtFj8U8ErMLVUXcHM" />
                </div>
                <Grid xs={8}>
                    <div className="container" >
                        <Div>Madison Graham</Div>
                        <Dive>I'm a self-motivated software engineer based in Denver, Colorado who is skilled in building exceptional websites and applications. I am passionate about changing lives around me with or without tech.</Dive>
                    </div>
                </Grid> */}

export default About;