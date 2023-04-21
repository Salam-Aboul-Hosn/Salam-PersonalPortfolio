import Contactcss from "../styles/components/Contact.module.css"
function Contact() {
    return (
        <section className="section" id="Contact">
            <h1 className="header">Contact Me</h1>
            <p className={Contactcss.contactDescription}>Whether it's for a job or bussiness opportunity, a question, my inbox is always open</p>
            <div className={Contactcss.container}>
                <a className={Contactcss.btn} href="mailto:salamaboulhosn581@gmail.com">Send Message</a>            
            </div>
            <footer>
                <p className={Contactcss.footer}>good work</p>
            </footer>
        </section>
    );
    
}
export default Contact;