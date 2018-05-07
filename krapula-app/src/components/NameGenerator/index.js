import React, {Component} from 'react';
import {Panel, InputGroup, FormControl, Button} from 'react-bootstrap';

class NameGenerator extends Component {
  state = {
    value: null,
    result: null
  }

  /**
   * Generate a name of the give type
   */
  generate(name) {
    const result = `${this.props.type}-${name}`
    this.setState({ result })
  }

  render() {
    const title = `${this.props.type}nimigeneraattori`;
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title>{title}</Panel.Title>
        </Panel.Heading>
        
        {
          this.state.result
            ? <Panel.Body>
                {this.props.type}nimesi on:
                <h2>{this.state.result}!</h2>
              </Panel.Body>
            : <Panel.Body>
                <p>Generoi itsellesi {this.props.type}nimi syöttämällä etunimesi</p>
                <InputGroup>
                  <FormControl 
                    type='text' 
                    placeholder="Etunimi"
                    value={this.state.value} 
                    onChange={e => this.setState({ value: e.target.value })}/>
                  <InputGroup.Button>
                    <Button onClick={() => this.generate(this.state.value)}>Generoi!</Button>
                  </InputGroup.Button>
                </InputGroup>
              </Panel.Body>
        }
      </Panel>
    );
  }
}

export default NameGenerator;