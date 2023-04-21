import Headercss from "../styles/components/Header.module.css"
import HeaderAnimation from "./HeaderAnimation"
function Header() {
    return (
    <header className = {Headercss.headers}>
        <div>
            <p className={Headercss.name}>Hey, my name is</p>
            <h1 className = {Headercss.title}>Salam Aboul Hosn</h1>
            <h1 className = {Headercss.title}>A {<HeaderAnimation />}</h1>
        </div>
    </header>
    );
    
}
export default Header;