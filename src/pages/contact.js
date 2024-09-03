import "../css/contact.css"
import Sidebar from "../components/sidebar";
import ContentBigScreen from "../components/content-big-screen";
import tabs from "../components/text content/nav-tabs";
function Contact(){
    return(
<div className="contact-container">
<Sidebar/>
<div className="content-container">
<ContentBigScreen tab_name={tabs.contact}>

</ContentBigScreen>
</div>
</div>
    );
}
export default Contact;