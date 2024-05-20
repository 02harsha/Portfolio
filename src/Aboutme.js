import clang from './images/C-Programming-Language.png'
import pythonImg from './images/Python-01_2_1.png'
import htmlImg from './images/html5-logo-for-web-development.webp'
import cssImg from './images/css.webp'
import JsImg from './images/Free-Courses-to-learn-JavaScript.webp'
import reactImg from './images/images.png'
import nodeImg from './images/node.js-logo-image.webp'
import sqlimg from './images/SQL-Tutorial.png'
import graduationimg from './images/1016545.png'
import schoolimg from './images/school.png'
import collegeimg from './images/school-bag.png'
let skills=[{id:1,img:clang,language:'C language',value:60},
{id:2,img:pythonImg,language:'Python',value:90},
{id:3,img:sqlimg,language:'SQL',value:80},
{id:4,img:htmlImg,language:'HTML',value:90},
{id:5,img:cssImg,language:'CSS',value:70},
{id:6,img:JsImg,language:'Javascript',value:70},
{id:7,img:reactImg,language:'React JS',value:70},
{id:8,img:nodeImg,language:'Node js',value:60}]
function Aboutme(){
    return(
        
        <div className='skills'>
            <hr></hr>
            <div className='row' style={{display:'flex',marginLeft:'20px',marginTop:'15px'}}>
                <h1>About Me</h1>
                
                <p className='intro'>Welcome to my corner of the internet! <span className='myname' style={{color:'orange'}}>I’m Harsha</span>, I am from Kurnool.I have completed my graduation in Electrical and Electronics Engineering domain from G.Pulla Reddy Engineering college(Autonomous) with a passion for <span className='myrole' style={{color:'orange'}}>Software Development</span>. Here, you'll find a glimpse into my world of <span className='myname' style={{color:'orange'}}>creativity, innovation,<span style={{color:'black'}}>and</span> endless curiosity.</span></p>
            </div>
            <div className='row' style={{display:'flex',marginLeft:'20px',marginTop:'15px'}}>
                <h1>Education</h1>
                
                <div className='col-1' style={{marginTop:'10px'}}>
                    <img src={graduationimg} style={{width:'50px',height:'50px'}}></img>
                </div>
                <div className='col-3' style={{marginTop:'10px'}}>
                    <h3 style={{color:'orange'}}>Bachelors's of Technology</h3>
                    <h5>Electrical and Electronics Engineering</h5>
                    <h6>G.Pulla Reddy Engineering College(Autonomous),Kurnool</h6>
                    <h6>2020-2024</h6>
                </div>
                <div className='col-1' style={{marginTop:'10px'}}>
                    <img src={collegeimg} style={{width:'50px',height:'50px'}}></img>
                </div>
                <div className='col-3' style={{marginTop:'10px'}}>
                    <h3 style={{color:'orange'}}>Intermediate</h3>
                    <h5>PCM</h5>
                    <h6>Sri Chaitanya Juniour Kalasala,Hyderbad</h6>
                    <h6>2018-2020</h6>
                </div>
                <div className='col-1' style={{marginTop:'10px'}}>
                    <img src={schoolimg} style={{width:'50px',height:'50px'}}></img>
                </div>
                <div className='col-3' style={{marginTop:'10px'}}>
                    <h3 style={{color:'orange'}}>Secondary School Certificate</h3>
                    <h6>Montssory High School,Kurnool</h6>
                    <h6>2018</h6>
                </div>
            </div>
            <br></br>
            <div className='row' style={{display:'flex',marginLeft:'20px',marginTop:'15px'}}>
                {/* <h1>Welcome to my corner of the internet! I’m Harsh, a Software Developer with a passion for [Your Passion/Field]. Here, you'll find a glimpse into my world of creativity, innovation, and endless curiosity.</h1> */}
            <h1>Skills</h1>
                {
                    skills.map((skill)=>(
                        <div key={skill.id} className="card" style={{width: "18rem",marginLeft:'40px',margin:'25px'}}>
                            <img className="card-img-top" src={skill.img} alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text">{skill.language}</p><progress value={skill.value} max="100"></progress>
                            </div>
                        </div>
                    ))
                }


            </div>
            
            
        </div>
    
    )
    
}
export default Aboutme