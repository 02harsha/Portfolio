import profile from './images/photo_2024-03-31_20-36-00.jpg'
import linkedinIcon from './images/1384014.png';
import githubIcon from './images/25231.png'
import "bootstrap/dist/css/bootstrap.css"
import './Profile.css'
import downloadimg from './images/532.png'


function Profile(){
  return(
    <div className='row'>
        <div className='col-6' style={{height:'400px'}}>
          <img className='photo'src={profile}></img>
        </div>
        <div className='col-6' style={{height:'400px'}}>
          <h1 style={{marginTop:'20%'}}>"Hello, I'm Harsha"</h1>
          <body>
            <div class="container">
              <div class="typed-out">I'm a Software Developer</div>
            </div>
            
            
          </body>
          <br></br>
          <br></br>
          {/* <img style={{width:'50px',height:'50px',marginRight:'10px'}} src={linkedinIcon}></img><span style={{fontWeight:'500',marginRight:'10px'}}>LinkedIn</span> */}
          {/* <img style={{width:'50px',height:'50px',marginRight:'10px'}} src={githubIcon}></img><span style={{fontWeight:'500',marginRight:'10px'}}>Github</span> */}
          <label for='resume'><h3>Here is my CV,</h3></label><button className='download' to='resuem'>Check it out</button>
        </div>
    </div>

  )
    
}
export default Profile