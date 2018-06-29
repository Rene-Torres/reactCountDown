import React, { Component } from 'react';
import Clock from './clock'
import './style.css'; 
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {

 state = {
   deadline: 'December 25, 2018',
   newDeadline:''
 }

changeDeadline(){
//console.log('state', this.state)
this.setState({deadline:this.state.newDeadline})};


  render() {
    return (
      <div className='App'>
        <div className='app-title'>
          Countdown to  {this.state.deadline}
          </div>
          <Clock
          deadline={this.state.deadline}
          />
          <div>
            <Form inline>
          <FormControl
          className="deadline-input" 
          onChange={event => this.setState({newDeadline: event.target.value})}
          placeholder='new date'/>
          <Button onClick={()=>this.changeDeadline()}>Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default App;