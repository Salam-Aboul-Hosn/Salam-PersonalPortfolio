import Experiencecss from "../styles/components/Experience.module.css"
import HeaderLabel from "./HeaderLabel";
import ExperienceData from "../data/ExperienceData"
import Button from '@mui/material/Button';
function Experience() {
//what youc an do is have a funciton that updates the style. So the orignal style is display none and then when u click the button u do display block and it can work for all of them
    return (
        <section>
            <HeaderLabel title="Experience"/>
            <div className= {Experiencecss.container}>
                <ul className = {Experiencecss.jobButtonList}>
                    <li className={Experiencecss.jobName}><button className={Experiencecss.jobButton}>Smart Twigs</button></li>
                    <li className={Experiencecss.jobName}><button className={Experiencecss.jobButton}>Smart Twigs</button></li>
                    <Button variant="outlined" style={{color:"black"}} >Smart Twigs</Button></ul>
                <ul className={Experiencecss.jobList}>
                    <div>
                        <h2 className={Experiencecss.jobNameHeader}>Smart Twigs</h2>
                        <p className={Experiencecss.jobDate}>April 18</p>
                        <li className={Experiencecss.jobDescription}>I did this and that blaw blaw blaw</li>
                    </div>
                    <div>
                        <h2 className={Experiencecss.jobNameHeader}>Smart Twigs</h2>
                        <p className={Experiencecss.jobDate}>April 18</p>
                        <li className={Experiencecss.jobDescription}>I did this and that blaw blaw blaw</li>
                    </div>
                </ul>
            </div>
            
        </section>
        
    );
    
}
export default Experience;