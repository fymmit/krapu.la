import React, {Component} from 'react';
import SweetAlert from 'sweetalert2-react';

class index extends Component {
    constructor(props) {
        super(props)
        this.setKrapula = this.setKrapula.bind(this);
    }
    setKrapula(userHasKrapula){
        this.props.setKrapula(userHasKrapula)
    }
    render() {
        return (
            <div>
                <SweetAlert
                    show={true}
                    title="Huomio!"
                    text="Onko sinulla krapula?"
                    confirmButtonText={"ON"}
                    showCancelButton
                    cancelButtonText={"ei"}
                    onConfirm={() => this.setKrapula(true)}
                    onCancel={() => this.setKrapula(false)}
                />
            </div>
        );
    }
}

export default index;
