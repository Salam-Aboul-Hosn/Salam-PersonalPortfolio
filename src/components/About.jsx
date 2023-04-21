import Aboutcss from "../styles/components/About.module.css"
import imageOfMe from "../images/Salam.png"
import Header from "./Header";
function About() {
    return (
        <section className="section" id="About"> 
            <h1 style={{marginTop: "500px"}}className="header">About</h1>
            <div className = {Aboutcss.grid}>
                <div><p className = {Aboutcss.info}>Hey, I am Salam Aboul Hosn. I am currently a student at <br />University of California, San Diego and I'm studying computer  <br />science. I have a huge passion for full stack development and <br />have a huge drive to be a developer for a company. <br /> <br /> I have been self studying for months and learned HTML, CSS,  <br />Javascript and React in order to learn front end <br />web devolepment. I'm also studying Node, Express, MongoDB,<br /> and API in order to become a full stack developer.</p></div>
                <div><img src= {imageOfMe} alt= "Icon" width="200px" className = {Aboutcss.image}/></div>
            </div>
        </section>
    );
    
}
export default About;