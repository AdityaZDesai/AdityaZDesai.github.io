import { Container } from "react-bootstrap"
import Navi from "./navbar.js"
import './Home.css'

export default function Home(){ 
    return ( 
        <div className="Div">
        <Navi />
        <Container className="Container">
            <h1 className="IntroTitle">----HELLO-------</h1>
            <p className="BodyText">My name is Aditya, and I am a Computer Science and Commerce student at Monash University.
            <br />
            I've created this website just as a cool passion project and a place to post my thoughts and clearly well thought out blogs.
            <br />
            <br />
            Visit the following links to my GitHub, or see a bunch of projects which I've made &lt; I'll make that soon as I just got done making this site &gt;
            <br />
            <br />
            <a href="https://github.com/AdityaZDesai">github</a>

            </p>
        </Container>
        </div>

    )
}