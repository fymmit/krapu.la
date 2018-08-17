import React, { Component } from 'react';
//json
import data from './data/slogans.json';

class Slogans extends Component {
    
    state = {
        slogan: null
    }

    /**
     * On mount generate slogan from  
    */

    componentDidMount() {
        const index = Math.floor((Math.random() * data.length-1)+0);
        this.setState({
            slogan: data[index]
        })
    }

    render() {
        const { slogan } = this.state;
        return (
            <p>
                {slogan}
            </p>
        )
    }
}

export default Slogans