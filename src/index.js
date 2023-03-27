import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Link, Navigate, Outlet, Route, Routes, useParams} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Router>
  <Routes>
    <Route path ="/"  element ={<Home/>}/>
    <Route path="/learn" element={<Learn/>}>
      <Route path="courses" element={<Courses/>}>
        <Route path=":courseId" element={<CourseId/>}/>
        </Route>

      <Route path="bundles" element={<Bundles/>}/>
      <Route/>
    </Route>
    <Route path ="/my-apps" element ={ <Navigate replace to ="/learn"/>}/>
  </Routes>
 </Router>
);

function Home(){ //home component
  return (<h1> Home Router</h1>);
}

function Learn(){
  return (
    <div>
      <h1>Learn</h1>
      <h4>All courses go here</h4>
      <Link className='btn btn-success' to ="/learn/courses">
        courses
      </Link> {" "}
<Link  className='btn btn-primary' to ="/learn/bundles"> 
Bundles
</Link>   
<Outlet/>
 </div>
  );
}

function Courses(){
  return (
    <div>
    <h1> Course List</h1>
    <h4> Course Cards</h4>
    <Outlet/>
    </div>
  );
}

function Bundles(){
  return(
    <div>
      <h1> Bundle List</h1>
      <h4> Bundle Cards</h4>

    </div>
  )
}
function CourseId(){
const {courseId} = useParams();
  return (
<div>
  <h1>The URL parameter is :{courseId}</h1>
</div>

  )
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
