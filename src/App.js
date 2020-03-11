import React, {Component} from 'react';
import './App.css';
import { Button } from 'semantic-ui-react';

class App extends Component {
constructor() {
 super()
  this.state = {
    day: '00',
    hours: '00',
    min:'00',
    sec:'00',
    result: ''
  }
}

  setDay = (e) => {
    console.log(e.target.value)
    this.setState(
      {
        day: e.target.value
      }
      );
  } 

  setHours = (e) => {
    this.setState({hours: e.target.value}); 
  }

  setMin = (e) => {
    this.setState({min: e.target.value}); 
  }

  setSec = (e) => {
    this.setState ({sec: e.target.value}); 
  } 

  yourResult = () => {
    const result = 'Day:' + this.state.day + ' Hours:' + this.state.hours +  ' Min:' + this.state.min + ' Sec:' + this.state.sec; 
    this.setState({result: result})
  }

  render () { 
    return (
      <div className="App">
        <h1>Countdown</h1>
        <input type = '' placeholder = 'Add day' onChange={this.setDay}></input> 
        <input type = '' placeholder = 'Add hours' onChange={this.setHours}></input>
        <input type = '' placeholder = 'Add min' onChange={this.setMin}></input>
        <input type = '' placeholder = 'Add sec' onChange={this.setSec}></input> 
        <Button primary onClick={this.yourResult}>OK</Button>
        {this.state.result}

      </div>
    )
  }  
}

export default App;
