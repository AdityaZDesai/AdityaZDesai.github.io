import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Navi from "./navbar";
import { Container, Form} from "react-bootstrap";
import "./EditBlog.css"
import Button from "react-bootstrap/Button"

export default function EditBlog(){
    const location = useLocation();
    const {title, body, id} = location.state;
    const [intialTitle, setTitle] = useState(title);
    const [initialBody, setBody] = useState(body);
    return(
            <div className="Div">
            <Navi />
            <Container className="Container">
                <Form>
            <Form.Control size="lg" type="text" placeholder="Blog Title" 
            value= {intialTitle}

            onChange= {(e) => setTitle(e.target.value)}
            />
            <br />
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={20} placeholder="Blog Body" 
            value= {initialBody}
            onChange= {(e) => setBody(e.target.value)}
        />
    </Form.Group>
    <Button as="a" variant="danger" type= "submit">
        <Link to="/UpdateBlog" state={{title: intialTitle, body: initialBody, id: id} } style={{ color: '#FFF' }}>
            Save
        </Link>
    </Button>
            </Form>
            </Container>
            </div>


    );

}