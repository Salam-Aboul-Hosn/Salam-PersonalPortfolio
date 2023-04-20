import Contactcss from "../styles/components/Contact.module.css"
import HeaderLabel from "./HeaderLabel";
function Contact() {
    return (
        <section id="Contact">
            <HeaderLabel title="Contact Me" />
            <p className={Contactcss.contactDescription}>Whether it's for a job or bussiness opportunity, a question, my inbox is always open</p>
            <div className={Contactcss.container}>
                <a className={Contactcss.btn} href="mailto:salamaboulhosn581@gmail.com">Send Message</a>            
            </div>
            <footer>
                <h2 className={Contactcss.footer}>good work</h2>
            </footer>
        </section>
    );
    
}
export default Contact;