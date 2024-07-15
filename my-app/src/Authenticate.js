import { useLocation } from "react-router-dom"
import {useState, useEffect} from "react"
import Login from "./login"
import { Navigate } from "react-router-dom"

function Authenticate(){
    const location = useLocation()
    const {username, password} = location.state
    const [correct, setCorrect] = useState("false");
    const [loading, setLoading] = useState(true);
    useEffect(() => {fetch('https://3.24.134.28:8000/authenticate', 
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: username, pass: password})
        }
    ).then((res) => res.text())
        .then((data) => {setCorrect(data === "true"? "true" : "false"); setLoading(false);})
            .catch((err) => {console.log(err); setLoading(false)})}, [username, password])
    

    if (loading){
        return <div>Loading...</div>
    }

    if (correct === "false"){
        console.log(correct);
        return (<Navigate to='/login' />)
    }
    else{
    return (<Navigate to= '/VipBlog'  state={true}/>)
    }

}


export default Authenticate