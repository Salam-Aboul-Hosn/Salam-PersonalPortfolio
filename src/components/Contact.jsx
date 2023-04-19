import Contactcss from "../styles/components/Contact.module.css"
import HeaderLabel from "./HeaderLabel";
function Contact() {
    return (
        <section >
            <HeaderLabel title="Contact Me"/>
            <p className={Contactcss.contactDescription}>Filler words</p>
            <a className={Contactcss.sendMessage} href="mailto:salamaboulhosn581@gmail.com">Send Message</a>
        </section>
    );
    
}
export default Contact;