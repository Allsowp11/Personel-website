import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Blogs} from './pages/blogpage'
import {Main} from './pages/mainpage'
import { Accounts } from './pages/Accounts';
import { Blog } from './pages/blog';
import { Test } from './pages/Test';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Main/>}></Route>  
        <Route path="/" element={<Main/>}></Route>  
        <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path="/Accounts" element={<Accounts/>}></Route>
        <Route path="/blog/:id" element={<Blog/>}></Route>
        <Route path="/test" element={<Test/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
reportWebVitals();