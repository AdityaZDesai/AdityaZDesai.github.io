import "./login.css";
import Button from 'react-bootstrap/Button';
import { Stack } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { Routes, Route, Link } from "react-router-dom"
import {useState} from 'react'
import Navi from "./navbar.js"


function Login(message){
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')
    return(
    <div className="DivLogin">
    <Navi />
    <div className="ContainerTemp">
    <div className="center">
    <Form>
        <Form.Group className = "mb-3" controlId= "formBasicEmail" id= "user">
        <Form.Label className="FontLogin">Login (VIP ONLY)</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
            value= {username}
            onChange= {(e) => setUsername(e.target.value)}
        />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword" id= "password"
        >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
            value= {pass}
            onChange= {(e) => setPass(e.target.value)}
        />
      </Form.Group>
    <Button as="a" variant="danger" type= "submit">
        <Link to="Authenticate" state={{username: username, password: pass} } style={{ color: '#FFF' }}>
            Login {message.a}
        </Link>
    </Button>
    </Form>
    </div>
    </div>
    </div>
    )
}

export default Login;
