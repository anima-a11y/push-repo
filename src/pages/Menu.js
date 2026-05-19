import './Menu.css';

function Menu() {
    return (
        <div className="home">
            <div className="unutra">
                <h1>Pogledajte naš meni</h1>

                <div className="menu-pica">
                    <h2>Pića</h2>

                    <h3>Obični sokovi</h3>
                    <table className="menu-tablica">
                        <tbody>
                            <tr><td>Gazirani sok (Coca‑Cola 0.33l)</td><td className="price">2.50€</td></tr>
                            <tr><td>Fanta (0.33l)</td><td className="price">2.50€</td></tr>
                            <tr><td>Mineralna voda (0.5l)</td><td className="price">1.50€</td></tr>
                        </tbody>
                    </table>

                    <h3>Cijeđeni / domaći</h3>
                    <table className="menu-tablica">
                        <tbody>
                            <tr><td>Sok od naranče (cijeđeni 0.25l)</td><td className="price">3.50€</td></tr>
                            <tr><td>Sok od jabuke (cijeđeni 0.25l)</td><td className="price">3.20€</td></tr>
                            <tr><td>Limonada domaća (0.3l)</td><td className="price">3.00€</td></tr>
                        </tbody>
                    </table>

                    <h3>Mokteli (bezalkoholni)</h3>
                    <table className="menu-tablica">
                        <tbody>
                            <tr><td>Virgin Mojito (0.3l)</td><td className="price">4.00€</td></tr>
                            <tr><td>Virgin Piña Colada (0.3l)</td><td className="price">4.20€</td></tr>
                            <tr><td>Berry Smoothie (0.33l)</td><td className="price">4.50€</td></tr>
                        </tbody>
                    </table>

                    <h3>Kokteli</h3>
                    <table className="menu-tablica">
                        <tbody>
                            <tr><td>Aperol Spritz</td><td className="price">5.50€</td></tr>
                            <tr><td>Piña Colada</td><td className="price">5.80€</td></tr>
                            <tr><td>Mojito</td><td className="price">5.00€</td></tr>
                        </tbody>
                    </table>

                    <h2>Snack</h2>
                    <table className="menu-tablica">
                        <tbody>
                            <tr><td>Sendvič (sir i šunka)</td><td className="price">4.50€</td></tr>
                            <tr><td>Panini (piletina i pesto)</td><td className="price">5.50€</td></tr>
                            <tr><td>Domaći kolačić</td><td className="price">2.00€</td></tr>
                            <tr><td>Voćna salata (porcija)</td><td className="price">3.80€</td></tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
}

export default Menu;
