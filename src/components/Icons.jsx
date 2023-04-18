import Iconcss from "../styles/components/Icons.module.css"
import { TbBrandLinkedin } from "react-icons/tb";
import { VscGithubAlt } from "react-icons/vsc";
import { VscGithub } from "react-icons/vsc";
import { SlSocialYoutube } from "react-icons/sl";
import { AiOutlineInstagram } from "react-icons/ai";


function Icons() {
    return (
    <ul className={Iconcss.iconList}>
        <a href="https://www.linkedin.com/in/salam-aboul-hosn-678a04257" target="_blank"><li className={Iconcss.iconItem}><TbBrandLinkedin /></li></a>
        <a href="https://github.com/Salam-Aboul-Hosn" target="_blank"><li className={Iconcss.iconItem}><VscGithubAlt /></li></a>
        <a href="https://www.youtube.com/channel/UCpP7lJ7Xby0RaFyU76xj4Wg" target="_blank"><li className={Iconcss.iconItem}><SlSocialYoutube /></li></a>
        <a href="https://www.instagram.com/salam_hosn/" target="_blank"><li className={Iconcss.iconItem}><AiOutlineInstagram /></li></a>
    </ul>
    );
    
}
export default Icons;