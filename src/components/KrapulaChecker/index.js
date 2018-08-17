import React, {Component} from 'react';

class index extends Component {
    constructor(props) {
        super(props)

        this.setKrapula = this.setKrapula.bind(this);
    }
    setKrapula(event){
        this.props.setKrapula(event.target.value)
    }
    render() {
        return (
            <div>
                <button value={true} onClick={this.setKrapula}> Damn I'm hungover </button>
                <button value={false} onClick={this.setKrapula}> Damn I'm not hungover </button>
            </div>
        );
    }
}

export default index;
