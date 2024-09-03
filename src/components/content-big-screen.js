import './content-big-screen.css'
import xIcon from './icons/X.png'

function ContentBigScreen({tab_name, children}){
    return(
    <div className="big-screen">
        <div className="topbar">
            <div>{tab_name}</div>
            <img src={xIcon} id="exit" alt="x-icon"/>
        </div>
        {children}
    </div>
    );
}
export default ContentBigScreen;