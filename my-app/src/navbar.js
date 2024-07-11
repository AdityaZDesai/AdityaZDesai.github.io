
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'


export default function Navi(){

    return(
        <Navbar className='Top' >
            <Container>
                <Navbar.Brand href= "/"><mark className='Font'>ADITYA ZELOLOX</mark></Navbar.Brand>
                <Nav>
                    <Nav.Link href="/" ><mark className='Font'>Home</mark></Nav.Link>
                    <Nav.Link href="/blog" ><mark className='Font'>Blog</mark></Nav.Link>
                    <Nav.Link href="/login" ><mark className='Font'>Login</mark></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}