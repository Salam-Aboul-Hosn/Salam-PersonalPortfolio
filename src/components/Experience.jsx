import Experiencecss from '../styles/components/Experience.module.css';
import Button from '@mui/material/Button';
import { backdropClasses } from '@mui/material';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ExperienceSmartTwig } from '../data/ExperienceData';
import { ExperiencePending } from '../data/ExperienceData';
function Experience() {
  //what youc an do is have a funciton that updates the style. So the orignal style is display none and then when u click the button u do display block and it can work for all of them
  const [job, setJob] = useState('mymicrojourney');

  function handleSmartClick() {
    setJob('smart');
  }
  function handlePendingClick() {
    setJob('mymicrojourney');
  }
  return (
    <section className='section' id='Experience'>
      <h1 className='header'>Experience</h1>
      <div className={Experiencecss.container}>
        <ul
          style={{ listStyleType: 'none' }}
          className={Experiencecss.jobButtonList}
        >
          <button onClick={handlePendingClick} className={Experiencecss.btn}>
            MyMicrojourney
          </button>
          <button onClick={handleSmartClick} className={Experiencecss.btn}>
            Smart Twigs
          </button>
        </ul>
        <ul style={{ maxWidth: '36rem' }} className={Experiencecss.jobList}>
          {job == 'smart' && <ExperienceSmartTwig />}
          {job == 'mymicrojourney' && <ExperiencePending />}
        </ul>
      </div>
    </section>
  );
}
export default Experience;
