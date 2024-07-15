import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navi from "./navbar.js"
import "./LoadBlog.css"
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup'

export default function LoadBlog(){
    const {id} = useParams();
    const location = useLocation();
    const authenticated = location.state; 
    const [blog, setBlog] = useState({})
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`http://3.24.134.28:8000/${id}`)
        .then(res => res.json())
        .then(data => {setBlog(data); setLoading(false); console.log(data)})
        .catch(err => {console.log(err); setLoading(false);});
    }, [])

    if (loading){
        return <h1>Loading...</h1>
    }
    if (authenticated){
    return (
        <div className="DivBlog">
        <Navi />
        <div className="PopupContainer">
        <Link to="/EditBlog" state={{title: blog.title, body: blog.body, id: id} } style={{ color: '#FFF' }}>
        <Button variant="danger" type= "button">Edit</Button>
        </Link>
        <Popup trigger={<Button variant="danger" type= "button">Delete</Button>} position="right center">
        <div className="Popup" ><p className="TitleBlog">Are you sure you want to delete this blog?
        <br />
        <br />
        <Link to="/DeleteBlog" state={id} style={{ color: '#FFF' }}>
            Yes this blog sucks
        </Link>


        </p>
        
        </div>
        </Popup>
        </div>
        <Container className="ContainerBlogs">
        <h1 className="TitleBlog">{blog.title}</h1>
        <p className="BodyBlog">{blog.body}</p>
        </Container>
        </div>
    )
}
    else{
        return(
        <div className="Div">
        <Navi /> 
        <Container className="ContainerBlogs">
        <h1 className="TitleBlog">{blog.title}</h1>
        <p className="BodyBlog">{blog.body}</p>
        </Container>
        </div>
        )
    }
}