import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="naslov">
                <h2>Limunada</h2>
            </div>

            <table id="tablica">
                <nav className="links">
                    <tr>
                        <td><Link to="/home">Home</Link></td>
                        <td><Link to="/menu">Menu</Link></td>
                        <td><Link to="/contact">Contact</Link></td>
                        <td><Link to="/gallery">Gallery</Link></td>
                        <td><Link to="/sok">Sok</Link></td>
                    </tr>
                </nav>
            </table>
            <p className="ani"> Ani Matić</p>

        </div>
    );
}

export default Header;