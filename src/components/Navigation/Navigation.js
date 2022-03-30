import {NavigationNav} from './Navigation_nav/Navigation_nav'
import {NavigationImg} from './Navigation_img/Navigation_img'
import './Navigation.css';
function Navigation(){
    return(
        <div className="Navigation">
            <NavigationImg/>
            <NavigationNav/>
        </div>
    )
}
export{Navigation}