import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Navi from "./navbar.js"
import "./blog.css"
import { Container } from "react-bootstrap";


function Blog(){
    const [message, setMessage] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = "http://localhost:5000/blog";
    useEffect(() => {fetch(url).then((res) => res.json())
    .then((data) => {setMessage((data)); setLoading(false)})
    .catch((err) => {console.log(err); setLoading(false)});
  }, [])

    if (loading){
        return (<h1>Loading...</h1>)
    }
    
    return(
        <div className="Div">
            <Navi />
            <Container className="Container">
            <h1 className="Title">NOT BLOGS</h1>
            <ul className="Links">
                {[...message].reverse().map((blog) => {return (
                    <li key={blog._id}>
                        <Link to={`/${blog._id}`} state={false}>- {blog.title}</Link>
                    </li>
                );
                })}
            </ul>
        </Container>
        </div>
        )
}
export default Blog;