import {Link} from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './header.css';
import '../../assets/style.css';


function Header() {
    return(
        <header>

                <nav className="navbar navbar-expand-md navbar-light fixed-top navbar-transparente">
                    <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-principal" aria-controls="nav-principal" aria-expanded="false" aria-label="Menu com os links principais">
                            {/* <FontAwesomeIcon icon={faBars}/> */}
                        </button>
                        <div className="collapse navbar-collapse" id="nav-principal">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Receitas</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Contato" className="nav-link">Contato</Link>
                                </li>

                                <li className="nav-item divider"></li>

                            </ul>
                        </div>
                    </div>
                </nav> 
        </header>
    );
}

export default Header;