
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import {Link,Route,Routes} from 'react-router-dom'
import Aboutme from './Aboutme';
import Projects from './Projects';
import Contactme from './Contactme';
import Profile from './Profile';
import { useState } from 'react';


function App() {
  const [headerStyle1,setheaderstyle1]=useState(false)
  const [headerStyle2,setheaderstyle2]=useState(false)
  const [headerStyle3,setheaderstyle3]=useState(false)
  function Style1(){
    setheaderstyle1(true)  
    setheaderstyle2(false) 
    setheaderstyle3(false) 
  }
  function Style2(){
    setheaderstyle2(true)  
    setheaderstyle1(false)
    setheaderstyle3(false)  
  }
  function Style3(){
    setheaderstyle3(true) 
    setheaderstyle1(false) 
    setheaderstyle2(false)  
  }
  function style4(){
    setheaderstyle3(false) 
    setheaderstyle1(false) 
    setheaderstyle2(false) 
  }
  return (
    <div >
      <div className='row'>
        <div className='col-4'><Link style={{textDecoration:'none',color:'black',backgroundColor:'black'}} onClick={style4}to=''><h1 className='name'>Harsha vardhan</h1></Link></div>
        <div className='col-2'></div>
        <div className='col-1' ><Link className={`${headerStyle1?'header1':''}`} onClick={Style1} style={{textDecoration:'none',color:'black'}} to='Aboutme'><h5 className='aboutme'>About me</h5></Link></div>
        <div className='col-1'></div>
        <div className='col-1' ><Link className={`${headerStyle2?'header1':''}`} onClick={Style2} style={{textDecoration:'none',color:'black'}}to='Projects'><h5 className='projects'>Projects</h5></Link></div>
        <div className='col-1'></div>
        <div className='col-1' ><Link className={`${headerStyle3?'header1':''}`} onClick={Style3} style={{textDecoration:'none',color:'black'}}to='Contactme'><h5 className='contactme'>Contact me</h5></Link></div>
        <Routes>
          <Route path='' element={<Profile/>}/>
          <Route path='Aboutme' element={<Aboutme/>}/>
          <Route path='Projects' element={<Projects/>}/>
          <Route path='Contactme' element={<Contactme/>}/>
        </Routes>
      </div>
    </div>
    
  );
}

export default App;
