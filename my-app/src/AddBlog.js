import { useLocation, Navigate} from "react-router-dom";
import { useEffect, useState } from "react";

export default function AddBlog(){
    const location = useLocation();
    const {title, body} = location.state || {}
    const [correct, setCorrect] = useState("false");
    const [loading, setLoading] = useState(true);
    useEffect(() => {fetch('https://3.24.134.28.nip.io/addBlog', 
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title: title, body: body})
        }
    ).then((res) => res.text())
        .then((data) => {setCorrect(data === "true"? "true" : "false"); setLoading(false);})
            .catch((err) => {console.log(err); setLoading(false)})}, [title, body])
    

    if (loading){
        return <div>Loading...</div>
    }

    if (correct === "true"){
        return (<Navigate to='/VipBlog' state={true}/>)
    }
}