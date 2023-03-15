//import "/Users/salamaboulhosn/Documents/web-projects/personal-portfolio-react/src/components/SideBar.css"
import "./../App.css"
import {SideBarData} from "./SideBarData"

function SideBar() {
    return (
        <nav className="SideBar">
            <ul className ="SideBarList">
            {SideBarData.map((val, key)=> {
            return<li key = {key} 
                className="row"
                onClick={()=>
                {window.location.pathname = val.link} }
                >
                <div>{val.title}</div>
            </li>;
            
            })}
            </ul>
            </nav>
        );
}

export default SideBar;
