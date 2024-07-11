import { useLocation, Navigate} from "react-router-dom";
import { useEffect, useState } from "react";

export default function UpdateBlog(){
    const location = useLocation();
    const {title, body, id} = location.state;
    const [correct, setCorrect] = useState("false");
    const [loading, setLoading] = useState(true);
    useEffect(() => {fetch('http://localhost:5000/updateBlog', 
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title: title, body: body, id: id})
        }
    ).then((res) => res.text())
        .then((data) => {setCorrect(data === "true"? "true" : "false"); setLoading(false);})
            .catch((err) => {console.log(err); setLoading(false)})}, [title, body, id])
    
    
    if (loading){
        return <div>Loading...</div>
    }

    if (correct === "true"){
        return (<Navigate to={`/${id}`} state={true}/>)
    }

}