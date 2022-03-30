import {FoterInfo} from "./Footer_info/Footer_info"
import {FooterCont} from "./Footer_cont/Footer_cont"
import './Footer.css';
function Footer(){
    return(
        <div className="Footer">
            <FoterInfo/>
            <FooterCont/>
        </div>
    )
}
export {Footer}