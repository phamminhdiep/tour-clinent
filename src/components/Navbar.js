import {Link} from "react-router-dom";
import "./Navbar.css"

export default function Navbar(){
    return(
        <nav className="Navitems">
            <Link className="home" to={'/'}><h1 className="home-h1">Traveloka</h1></Link>
            <ul>
                <li>
                    <Link className="nav-link" to={'/'}>
                        <i className="fa-solid fa-house"></i> Home
                    </Link>
                </li>
                
                <li>
                    <Link className="nav-link" to={'/tours'}>
                        <i class="fa-solid fa-umbrella-beach"></i> Tours
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" to={'/hotels'}>
                        <i class="fa-solid fa-hotel"></i> Hotel
                    </Link>
                </li>
                <li>
                    <Link className="nav-link">
                    <i class="fa-solid fa-user"></i> Tài Khoản
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" to={'/admin'}>
                        <i className="fa-solid fa-house"></i> Admin
                    </Link>
                </li>
            </ul>
        </nav>
    );

}