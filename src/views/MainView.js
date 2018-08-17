import React, {Component} from 'react';
import KrapulaView from './KrapulaView'
import NoKrapulaView from './NoKrapulaView'
import KrapulaChecker from '../components/KrapulaChecker'

class MainView extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasKrapula: null,
        }
        this.setKrapula = this.setKrapula.bind(this);
    }

    setKrapula(hasKrapula) {
        this.setState({ hasKrapula: hasKrapula });
    }

    render() {
        return (
            <div>
            { this.state.hasKrapula === null ? <KrapulaChecker setKrapula={this.setKrapula}/>
                : this.state.hasKrapula ? <KrapulaView/> : <NoKrapulaView/> }
            </div>
        );
    }
}

export default MainView;
