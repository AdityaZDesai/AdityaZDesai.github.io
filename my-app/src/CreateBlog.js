import { Navigate, Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navi from "./navbar";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
export default function CreateBlog(){
    const location = useLocation();
    const authenticated = location.state || false
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    if (authenticated=== true){
        return (
            <div className="Div">
            <Navi />
            <Container className="Container">
                <Form>
            <Form.Control size="lg" type="text" placeholder="Blog Title" 
            value= {title}
    
            onChange= {(e) => setTitle(e.target.value)}
            />
            <br />
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={20} placeholder="Blog Body" 
            value= {body}
            onChange= {(e) => setBody(e.target.value)}
        />
      </Form.Group>
      <Button as="a" variant="danger" type= "submit">
        <Link to="AddBlog" state={{title: title, body: body} } style={{ color: '#FFF' }}>
            Save
        </Link>
    </Button>
            </Form>
            </Container>
            </div>

        )
    }
    else{
        return (
            <Navigate to="/login" />
        )
    }
}