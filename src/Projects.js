

function Projects(){
    let projects=[{id:1,title:'Brain Tumour Detection',language:'MATLAB',info:"Developed a brain tumour detection system in MATLAB, achieving 95% accuracy and a 40% reduction in analysis time.Utilized image processing and machine learning tools for early diagnosis and treatment planning",link:'http://github.com/02harsha/Brain-Tumour-Detection-using-MATLAB'},
    {id:2,title:'Chat Bot',language:'Python',info:'Crafted an engaging conversational chatbot using Python, harnessing the power of natural language processing (NLP) libraries to foster dynamic interactions and deliver personalized responses. Employed machine learning algorithms to continually enhance understanding of user queries, ensuring accurate and insightful responses',link:'https://github.com/02harsha/chat-bot'},
    {id:3,title:'Voice Assistant app',language:'Python',info:'Crafted a Python voice assistant leveraging speech recognition and text-to-speech functionalities to facilitate web browsing, Wikipedia queries, and website navigation. Emphasized robust error handling and modular architecture for streamlined maintenance',link:'https://github.com/02harsha/Voice-assistant-app'},
    {id:4,title:'Multi Lingual Text Analysis translation system',language:'Python,ChatGPT API',info:'Created a language detection and translation model using Python and the ChatGPT API. This model can identify the language of entered text and translate it into the desired language based on prompts',link:'https://github.com/02harsha/Multilingual-Text-Analysis-and-Translation-System'}]
    return(
        <div className="row">
            <hr></hr>
            <h1 style={{marginLeft:'40px'}}>My Projects</h1>
            {projects.map(project=>(
                <div key={project.id} className="card" style={{width: '18rem', margin:'40px'}}>
                    <div className="card-body">
                        <h4 className="card-title" style={{color:'orange'}}>{project.title}</h4>
                        <h6 className="card-subtitle mb-3 text-muted">{project.language}</h6>
                        <p className="card-text">{project.info}</p>
                        <a href={project.link} className="card-link" style={{textDecoration:'none'}}>Project Link</a>
                    </div>
                </div>
            ))
                
            }
            
        </div>
        
    
    )
    
}
export default Projects