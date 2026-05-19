import './Gallery.css';
import sok1 from '../images/sok1.jpg';
import sok2 from '../images/sok2.jpg';
import sok3 from '../images/sok3.jpg';
import sok4 from '../images/sok4.jpg';
import sok5 from '../images/sok5.jpg';
import sok6 from '../images/sok6.jpg';
import sok7 from '../images/sok7.jpg';


function Gallery() {
    return (
        <div className="home">
            <div className="unutra">
                <h1>Naša galerija</h1>
                <div className="gallery">
                    <img src={sok1} alt="Sok 1" className="gallery-img img1" />
                    <img src={sok2} alt="Sok 2" className="gallery-img img2" />
                    <img src={sok3} alt="Sok 3" className="gallery-img img3" />
                    <img src={sok4} alt="Sok 4" className="gallery-img img4" />
                    <img src={sok5} alt="Sok 5" className="gallery-img img5" />
                    <img src={sok6} alt="Sok 6" className="gallery-img img6" />
                    <img src={sok7} alt="Sok 7" className="gallery-img img7" />
                </div>
            </div>
        </div>
    );
}
export default Gallery;