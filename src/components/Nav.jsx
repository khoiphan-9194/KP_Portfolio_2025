import { Link, useLocation } from "react-router-dom";
import NavTabs from "../UI/NavTabs";


const obJectArray=[
  {name:"Home",path:"/"},
  {name:"About",path:"/about"},
  {name:"Portfolio",path:"/portfolio"},
  {name:"Resume",path:"/resume"},
  {name:"Contact",path:"/contact"}

]
  


function Nav() {
  const location = useLocation().pathname;
    return (
      <div className='nav-tabs-main'>
              <NavTabs links={Object.keys(obJectArray).map((key) => (
        <li className="nav-item">
          <Link to={obJectArray[key].path} className={location === obJectArray[key].path ? "nav-link active" : "nav-link"}>
            {obJectArray[key].name}
          </Link>
        </li>
      ))
      } />
      </div>  
    );
}
export default Nav;

/*
 [
        <li className="nav-item">
          <Link to="/" className={location === "/" ? "nav-link active" : "nav-link"}>
            Home
          </Link>
        </li>,

        <li className="nav-item">
          <Link to="/about" className={location === "/about" ? "nav-link active" : "nav-link"}>
            About
          </Link>
        </li>
      ]
*/