import Experiencecss from "../styles/components/Experience.module.css"
import experienceData from "../data/ExperienceData"
import Button from '@mui/material/Button';
import { backdropClasses } from "@mui/material";
import {useState} from "react"

function Experience() {
//what youc an do is have a funciton that updates the style. So the orignal style is display none and then when u click the button u do display block and it can work for all of them
let [jobDisplay, setJobDisplay] = useState(0);
let [jobDisplay1, setJobDisplay1] = useState();
    function handleJobAmazon() {
        setJobDisplay(jobDisplay+1);
    }

    function handleJobSmartTwig() {
        setJobDisplay1(0);
    }
    return (
    <section className="section" id="Experience">
        <h1 className="header">Experience</h1>
        <div className= {Experiencecss.container}>
            <ul className = {Experiencecss.jobButtonList}>
                <li onClick={handleJobSmartTwig} className={Experiencecss.jobName}><button className={Experiencecss.jobButton}>Smart Twigs</button></li>
                <li onClick={handleJobAmazon} className={Experiencecss.jobName}><button className={Experiencecss.jobButton}>Amazon</button></li>
                <Button variant="outlined">Smart Twigs</Button></ul>
            <ul className={Experiencecss.jobList}>
                <div>
                    <h2 className={Experiencecss.jobNameHeader}>{experienceData[0].workplace}</h2>
                    <p className={Experiencecss.jobDate}>April 18</p>
                    <li className={Experiencecss.jobDescription}>I did this and that blaw blaw blaw  and that blaw blaw blaw</li>
                    <li className={Experiencecss.jobDescription}>I did this and that blaw blaw blaw  and that blaw blaw blaw</li>
                    <li className={Experiencecss.jobDescription}>I did this and that blaw blaw blaw  and that blaw blaw blaw</li>
                    <li className={Experiencecss.jobDescription}>I did this and that blaw blaw blaw  and that blaw blaw blaw</li>
                    <li className={Experiencecss.jobDescription}>I did this and that blaw blaw blaw  and that blaw blaw blaw</li>
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