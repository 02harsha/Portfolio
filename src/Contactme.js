import github from './images/25231.png'
import phone from './images/455705.png'
import linkedin from './images/1384014.png'
import mail from './images/3178158.png'

function Contactme(){
    return(
       
        <div className='contact-info'>
            <hr></hr>
            <br></br>
            <h1 style={{marginLeft:'30px'}}> Contact Me</h1>
            <img style={{width:'30px',height:'30px',marginLeft:'150px',marginRight:'10px'}}src={phone}></img><span>+91 7989880682</span>
            <img style={{width:'30px',height:'30px',margin:'10px'}}src={mail}></img><span>bharshavardhan484@gmail.com</span>
            <img style={{width:'30px',height:'30px',margin:'10px'}}src={linkedin}></img><a style={{textDecoration:'none',color:'black'}} href='http://www.linkedin.com/in/harshavardhan02'><span>LinkedIn</span></a>
            <img style={{width:'30px',height:'30px',margin:'10px'}}src={github} ></img><a style={{textDecoration:'none',color:'black'}} href='http://www.github.com/02harsha'><span>Github</span></a>
            <br></br>
            <br></br>
            <div className='Quries' style={{marginLeft:'150px'}}>
                <h3>For any Quries:</h3>
                <textarea placeholder='Start writing here...' style={{height:'200px',width:'700px',borderRadius:'10px'}}></textarea>
                <br></br>
                
                <button className='btn btn-primary' >Send</button>
            </div>
        </div>
        
        
    )
    
}
export default Contactme