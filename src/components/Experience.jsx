import Experiencecss from '../styles/components/Experience.module.css';
import Button from '@mui/material/Button';
import { backdropClasses } from '@mui/material';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ExperienceSmartTwig } from '../data/ExperienceData';
import { ExperiencePending } from '../data/ExperienceData';
import { ExperienceBCP } from '../data/ExperienceData';

function Experience() {
  //what youc an do is have a funciton that updates the style. So the orignal style is display none and then when u click the button u do display block and it can work for all of them
  const [job, setJob] = useState('BCP');
  const [start, setStart] = useState('start');

  function handleSmartClick() {
    setJob('smart');
    setStart('');
  }
  function handleMicroClick() {
    setJob('mymicrojourney');
    setStart('');
  }

  function handleBCPClick() {
    setJob('BCP');
    setStart('');
  }

  return (
    <section className='section' id='Experience'>
      <h1 className='header'>Experience</h1>
      <div className={Experiencecss.container}>
        <ul
          style={{ listStyleType: 'none' }}
          className={Experiencecss.jobButtonList}
        >
          {job == 'BCP' ? (
            <button className={Experiencecss.btnFocused}>BCP</button>
          ) : (
            <button onClick={handleBCPClick} className={Experiencecss.btn}>
              BCP
            </button>
          )}
          {job == 'mymicrojourney' ? (
            <button className={Experiencecss.btnFocused}>MyMicrojourney</button>
          ) : (
            <button onClick={handleMicroClick} className={Experiencecss.btn}>
              MyMicrojourney
            </button>
          )}

          {job == 'smart' ? (
            <button
              onClick={handleSmartClick}
              className={Experiencecss.btnFocused}
            >
              Smart Twigs
            </button>
          ) : (
            <button onClick={handleSmartClick} className={Experiencecss.btn}>
              Smart Twigs
            </button>
          )}
        </ul>
        <ul style={{ maxWidth: '36rem' }} className={Experiencecss.jobList}>
          {job == 'smart' && <ExperienceSmartTwig />}
          {job == 'mymicrojourney' && <ExperiencePending />}
          {job == 'BCP' && <ExperienceBCP />}
        </ul>
      </div>
    </section>
  );
}
export default Experience;
