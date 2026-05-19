import './Contact.css';

function Contact() {
    return (
        <div className="home">
            <div className="unutra">
                <div className="contact">

                    <h1>Kontaktirajte nas</h1>

                    <p>
                        Imate pitanje, prijedlog ili želite rezervirati mjesto?
                        Javite nam se!
                    </p>

                    <p>📍 Maldivi</p>
                    <p>📞 +385 99 123 4567</p>
                    <p>✉️ summercafeLimunada@gmail.com</p>

                </div>

                <div className="form">
                    <input type="text" placeholder="Vaše ime" />
                    <input type="email" placeholder="Vaš email" />
                    <textarea placeholder="Vaša poruka"></textarea>
                    <button>Pošalji</button>
                </div>

            </div>
        </div>
    );
}

export default Contact;