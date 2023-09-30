import Experiencecss from '../styles/components/Experience.module.css';
import Button from '@mui/material/Button';
import { backdropClasses } from '@mui/material';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ExperienceSmartTwig } from '../data/ExperienceData';
import { ExperienceMicrosoft } from '../data/ExperienceData';
function Experience() {
  //what youc an do is have a funciton that updates the style. So the orignal style is display none and then when u click the button u do display block and it can work for all of them
  const [smartTwigJob, setSmartTwigJob] = useState(true);

  const [microsoftJob, setMicrosoftJob] = useState(false);

  function smartTwigClick() {
    if (smartTwigJob === true) {
      return null;
    } else {
      setSmartTwigJob(!smartTwigJob);
    }
  }
  return (
    <section className='section' id='Experience'>
      <h1 className='header'>Experience</h1>
      <div className={Experiencecss.container}>
        <ul
          style={{ listStyleType: 'none' }}
          className={Experiencecss.jobButtonList}
        >
          <button className={Experiencecss.btn}>Smart Twigs</button>
        </ul>
        <ul style={{ maxWidth: '36rem' }} className={Experiencecss.jobList}>
          {smartTwigJob && <ExperienceSmartTwig />}
        </ul>
      </div>
    </section>
  );
}
export default Experience;
