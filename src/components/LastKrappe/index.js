import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

class LastKrappe extends Component {
    componentDidMount() {
        this.setLastKrappe();
    }

    render() {
        return (
            <div>
                <div>Last krappe: { localStorage.getItem("krappe") || 'Never.' }</div>
            </div>

        )
    }

    setLastKrappe = () => {
        localStorage.setItem("krappe", new Date().toLocaleString());
    }
}

export default LastKrappe;
