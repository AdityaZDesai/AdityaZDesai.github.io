import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Navi from "./navbar";
import "./VipBlog.css"
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function VipBlog(){
    const location = useLocation();
    const authenticated = location.state || false
    const [message, setMessage] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = "https://3.24.134.28:8000/blog";
    useEffect(() => {fetch(url).then((res) => res.json())
    .then((data) => {setMessage((data)); setLoading(false)})
    .catch((err) => {console.log(err); setLoading(false)});
    }, [])

    console.log(authenticated);
    if (authenticated === true){
        if (loading){
        return (<h1>Loading...</h1>)
    }

        return (
            <div className="Div">
            <Navi />
            <Container className="Container">
            <h1 className="Title">NOT BLOGS   
            <br />
        <Link to="CreateBlog" state={true} style={{ color: '#FFF' }}>
        <Button variant="danger" type= "button">New Blog</Button>

        </Link>
    </h1>
            <ul className="Links">
                {[...message].reverse().map((blog) => {return (
                    <li key={blog._id}>
                        <Link to={`/${blog._id}`} state={true}>- {blog.title}</Link>
                    </li>
                );
                })}
            </ul>
        </Container>
        </div>
        )
    }
    else{
        return(
            <Navigate to="/Login"></Navigate>
        )
    }
}
