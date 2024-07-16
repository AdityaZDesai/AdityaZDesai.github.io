import { useLocation, Navigate} from "react-router-dom"
import { useState, useEffect } from "react";

export default function DeleteBlog(){
    const location = useLocation();
    const id = location.state;
    const [correct, setCorrect] = useState("false");
    const [loading, setLoading] = useState(true);
    useEffect(() => {fetch('https://3.24.134.28.nip.io/deleteBlog', 
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: id})
        }
    ).then((res) => res.text())
        .then((data) => {setCorrect(data === "true"? "true" : "false"); setLoading(false);})
            .catch((err) => {console.log(err); setLoading(false)})}, [id])
    

    if (loading){
        return <div>Loading...</div>
    }

    if (correct === "true"){
        return (<Navigate to='/VipBlog' state={true}/>)
    }
}