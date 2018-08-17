import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

class LastKrappe extends Component {
    componentDidMount() {
        this.setLastKrappe();
    }

    render() {
        return (
            <div>
                <div>Jäbä krappes: { localStorage.getItem("krappe") }</div>
            </div>

        )
    }

    setLastKrappe = () => {
        localStorage.setItem("krappe", new Date().toLocaleString());
    }
}

export default LastKrappe;
