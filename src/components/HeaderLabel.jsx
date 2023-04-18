import HeaderLabelcss from "../styles/components/HeaderLabel.module.css"

function HeaderLabel(props) {
    return (
        <section >
            <h1 className = {HeaderLabelcss.header}>{props.title}</h1>
        </section>
    );
    
}
export default HeaderLabel;