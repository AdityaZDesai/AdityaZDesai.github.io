import logo from './logo.svg';
import './App.css';
import Login from './login.js'
import Authenticate from './Authenticate.js'
import {Routes, Route, BrowserRouter, useSearchParams} from "react-router-dom"
import { useEffect, useState } from 'react';
import Blog from './blog.js';
import LoadBlog from './LoadBlog.js';
import Home from './Home.js';
import VipBlog from './VipBlog.js';
import CreateBlog from './CreateBlog.js';
import AddBlog from './AddBlog.js';
import DeleteBlog from './DeleteBlog.js';
import EditBlog from './EditBlog.js';
import UpdateBlog from './UpdateBlog.js';


function App() {
  const [message, setMessage] = useState('');
  const url = "https://3.24.134.28.nip.io/"
  useEffect(() => {fetch(url).then((res) => res.text())
    .then((data) => setMessage(data))
    .catch((err) => console.log(err));
  }, [])


  return (
    <div className="App">
      <header className="App-header">
      <Routes>
            <Route path="/" element = {<Home/>} />
            <Route path="Login" element = { <Login a= {message}/> } />
            <Route path="Login/Authenticate" element = {<Authenticate a=""/>} />
            <Route path="blog" element = {<Blog />} />
            <Route path = ":id" element = {<LoadBlog />} />
            <Route path = '/VipBlog' element = {<VipBlog/>} />
            <Route path = 'VipBlog/CreateBlog' element = {<CreateBlog/>} />
            <Route path = 'VipBlog/CreateBlog/AddBlog' element= {<AddBlog />} />
            <Route path = '/DeleteBlog' element={<DeleteBlog />} />
            <Route path = '/EditBlog' element={<EditBlog />} />
            <Route path = '/UpdateBlog' element={<UpdateBlog />} />
        </Routes>
      </header>
    </div>
  );
}


export default App;
