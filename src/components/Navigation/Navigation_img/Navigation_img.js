import img from '../../../Imarge/logo.png'
import './Navigation_img.css';
function NavigationImg(){
    return(
        <div className="NavigationImg"  >
            <img className="im" src={img} alt=""/>
        </div>
    )
}
export {NavigationImg}
