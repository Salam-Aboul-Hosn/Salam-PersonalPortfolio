import Projectscss from '../styles/components/Projects.module.css';
import GameHub from '../images/GameHub.png';
import ProjectCard from './ProjectCard';
import ToDoList from '../images/ToDoList.png';
import FoodStore from '../images/FoodStore.png';
import Hoobank from '../images/Hoobank.png';
import Bookstore from '../images/Bookstore.png';

function Projects() {
  return (
    <section className='section' id='Projects'>
      <h1 className='header'>Projects</h1>

      <div className={Projectscss.allProjectContainer}>
        <ProjectCard
          image={Bookstore}
          title='Book Store'
          description='Developed front-end with React and server with Express allowing users to create, read, update & delete books. 
          Integrated MongoDB as the database and used Mongoose to define data models and a schema to store book
          information efficiently. Leveraged Tailwind for a responsive UI and Axios for data fetching with a Node back-end.'
          code='https://github.com/Salam-Aboul-Hosn/BookStore'
          website=''
        />

        <ProjectCard
          image={GameHub}
          title='Game Hub'
          description='Displayed game data from RAWG Database API by using HTTP get
              requests and useEffect Hook. Responsive website design that adapts
              to devices such as phones, tablets, computers, etc. Created search
              bar component, saved its data with useRef, and sent it to the back
              end to look for searched data. Made custom hooks for organized and
              modular code. Deployed to production using vercel to allow users
              to look for their favorite games.'
          code='https://github.com/Salam-Aboul-Hosn/game-hub'
          website='https://game-hub-rik7-rdkdhhq50-salam-aboul-hosn.vercel.app/'
        />
        <ProjectCard
          image={ToDoList}
          title='To Do List'
          description='Allows users to add and delete daily tasks by storing them into an array. Utilized useState Hook to update the state of the UI using onClick Events. Incorporated Data Structures such as Map to add tasks and Filter to delete tasks from the array. Had clean and readable code by using the ES6 Spread Operator. Deployed to vercel increasing my productivity by 20%.'
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
          such as display flex for responsive positioning. Added hidden drop down menu until the user hovers over a specified element using :hover, display block, 
          and display none. Made a contact form at the bottom using input tags so that the user can fill in 
          contact information.'
          code='https://github.com/Salam-Aboul-Hosn/React-JS-Complete-Guide-for-Frontend-Web-Development-UdemyCourse/tree/main/Vegan%20Store%20Project'
          website='https://salam-aboul-hosn.github.io/React-JS-Complete-Guide-for-Frontend-Web-Development-UdemyCourse/Vegan%20Store%20Project/index.html'
        />
      </div>
    </section>
  );
}
export default Projects;
