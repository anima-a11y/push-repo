import './Home.css';
import Poruka from "../Poruka";

function Home() {
    let tekst = {
        ispis: "Summer vibes!",
    }
    return (
        <div className="home">
            <div className="unutra">
                <h1>Osvježi se okusom ljeta</h1><br />

                <p>
                    Ledena pića, svježi sokovi i najbolji ljetni okusi na jednom mjestu.
                </p><br /><br />

                <div>
                    <Poruka Pr={tekst} />
                </div>

                <div className="popularno">
                    <h2>Najpopularnija pića</h2>

                    <div className="picaa">

                        <div className="pice">
                            <h3>Ice Coffee</h3>
                            <p>Hladna kava s vanilijom i ledom.</p>
                        </div>

                        <div className="pice">
                            <h3>Berry Fresh</h3>
                            <p>Mix šumskog voća i leda.</p>
                        </div>

                    </div><br /><br />
                </div>

                <div className="zastoMi">

                    <h2>Zašto baš mi?</h2>

                    <div className="razlog">
                        <h3>Svježi sastojci</h3>
                        <p>Voće i led za savršeno osvježenje.</p>
                    </div>

                    <div className="razlog">
                        <h3>Ljetna atmosfera</h3>
                        <p>Ugodan prostor za opuštanje.</p>
                    </div>

                    <div className="razlog">
                        <h3>Velik izbor pića</h3>
                        <p>Sokovi, smoothieji i ledene kave.</p>
                    </div>

                </div>


            </div>




        </div>
    );
}

export default Home;