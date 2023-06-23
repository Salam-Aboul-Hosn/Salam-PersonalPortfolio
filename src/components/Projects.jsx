import Projectscss from '../styles/components/Projects.module.css';
import GameHub from '../images/GameHub.png';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ProjectCard from './ProjectCard';
import ToDoList from '../images/ToDoList.png';
import FoodStore from '../images/FoodStore.png';
import Hoobank from '../images/Hoobank.png';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  backgroundColor: '#333333',
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

function Projects() {
  return (
    <section className='section' id='Projects'>
      <h1 className='header'>Projects</h1>

      <div className={Projectscss.allProjectContainer}>
        <ProjectCard
          image={GameHub}
          title='Game Hub'
          description=' Displayed game data from RAWG Database API by using HTTP get
              requests and useEffect Hook. Responsive website design that adapts
              to devices such as phones, tablets, computers, etc. Created search
              bar component, saved its data with useRef, and sent it to the back
              end to look for searched data. Made custom hooks for organized and
              modular code. Deployed to production using vercel to allow users
              to look for their favorite games'
          code='https://github.com/Salam-Aboul-Hosn/game-hub'
          website='https://game-hub-rik7-rdkdhhq50-salam-aboul-hosn.vercel.app/'
        />
        <ProjectCard
          image={ToDoList}
          title='To Do List'
          description='Allows users to add and delete daily tasks by storing them into an array. Utilized useState Hook to update the state of the UI using onClick Events. Incorporated Data Structures such as Map to add tasks and Filter to delete tasks from the array. Had clean and readable code by using the ES6 Spread Operator. Deployed to vercel increasing my productivity by 20% .'
          code='https://github.com/Salam-Aboul-Hosn/todo-list-app1'
          website='https://todo-list-app1.vercel.app/'
        />
        <ProjectCard
          image={Hoobank}
          title='HooBank'
          description='Created a landing page for users to join a banking system (prototype). Developed multiple reusable Components and imported/exported them in order to develop the UI. Passed data from parent components to child components by utilizing Props. Fully responsive modern user interface with css animations for sidebar on mobile devices.'
          code='https://github.com/Salam-Aboul-Hosn/bank-project'
          website='https://bank-project-five.vercel.app/'
        />
        <ProjectCard
          image={FoodStore}
          title='Vegan Food Store'
          description='Developed a static website using HTML and CSS for optimal user experience. Designed a top bar using CSS properties 
          such as display flex for responsive positioning and position fixed so that it remains at the top whilst the user scrolls. 
          Added hidden drop down menu until the user hovers over a specified element using :hover, display block, 
          and display none. Made a contact form at the bottom using input tags so that the user can fill in 
          contact information.'
          code='https://github.com/Salam-Aboul-Hosn/React-JS-Complete-Guide-for-Frontend-Web-Development-UdemyCourse/tree/main/Vegan%20Store%20Project'
          website='https://salam-aboul-hosn.github.io/React-JS-Complete-Guide-for-Frontend-Web-Development-UdemyCourse/Vegan%20Store%20Project/index.html'
        />
      </div>

      {/* <Box sx={{ flexGrow: 1, margin: '15px' }}>
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
          <Grid xs={3}>
            <Item>
              <ProjectCard
                image={GameHub}
                title='Game Hub'
                description=' Displayed game data from RAWG Database API by using HTTP get
              requests and useEffect Hook. Responsive website design that adapts
              to devices such as phones, tablets, computers, etc. Created search
              bar component, saved its data with useRef, and sent it to the back
              end to look for searched data. Made custom hooks for organized and
              modular code. Deployed to production using vercel to allow users
              to look for their favorite games'
                code='test'
                website='test 2'
              />
            </Item>
          </Grid>
          <Grid xs={3}>
            <Item>xs=4</Item>
          </Grid>
          <Grid xs={3}>
            <Item>xs=4</Item>
          </Grid>
        </Grid>
      </Box> */}
      {/* <div className={Projectscss.allProjectContainer}>
        <div className={Projectscss.singleProjectContainer}>
          <img src={GameHub} alt='Icon' width='70%' />
          <div className={Projectscss.textContainer}>
            <h2 className={Projectscss.titleProject}>Game hub </h2>
            <p className={Projectscss.projectText}>
              Displayed game data from RAWG Database API by using HTTP get
              requests and useEffect Hook. Responsive website design that adapts
              to devices such as phones, tablets, computers, etc. Created search
              bar component, saved its data with useRef, and sent it to the back
              end to look for searched data. Made custom hooks for organized and
              modular code. Deployed to production using vercel to allow users
              to look for their favorite games
            </p>
          </div>
        </div> */}
      {/* <div className={Projectscss.singleProjectContainer}>
          <img src={GameHub} alt='Icon' width='1000px' />
          <h2 className={Projectscss.titleProject}>Game hub</h2>
          <p></p>
        </div> */}
      {/* </div> */}
    </section>
  );
}
export default Projects;
