import React, { Component } from "react";
import { Link } from 'react-router-dom';
import sok3 from '../images/sok3.jpg';
import './Sok.css';

export class Sok extends Component {
    state = {
        ime: '',
        omiljenoPice: '',
    }
    onSubmit = e => { e.preventDefault(); console.log("Forma je potvrđena ", this.state.ime); }
    render() {
        return (
            <div className="home">
                <div className="sok">
                    <form>
                        <input placeholder="ime" value={this.state.ime} onChange={e => this.setState({ ime: e.target.value })} />
                        <input placeholder="omiljenoPice" value={this.state.omiljenoPice} onChange={e => this.setState({ omiljenoPice: e.target.value })} />
                        <button onClick={e => this.onSubmit(e)}>Potvrdi</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Sok;