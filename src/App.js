import React, { Component } from 'react';
import './App.css';
import { Button, Grid } from 'semantic-ui-react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      day: 0,
      hour: 0,
      min: 0,
      sec: 0,
      result: ''
    }
  }
  setDay = (e) => {
    this.setState({ day: e.target.value });
  }

  setHours = (e) => {
    this.setState({ hour: e.target.value });
  }

  setMin = (e) => {
    this.setState({ min: e.target.value });
  }

  setSec = (e) => {
    this.setState({ sec: e.target.value });
  }

  yourResult = () => {
    this.doIntervalChange();
  }

  doIntervalChange = () => {
    this.myInterval = setInterval(() => {
     if (this.state.sec !== 0) {
       this.setState(prevState => (
         {
           sec: prevState.sec -1, 
           result: ' ' + this.state.day + ' ' + this.state.hour + ' ' + this.state.min + ' ' + this.state.sec
          }
        ))
      } else if (this.state.min !== 0) {
        this.setState(prevState => (
          {
            min: prevState.min -1,
            sec: 59, 
            result: ' ' + this.state.day + ' ' + this.state.hour + ' ' + this.state.min + ' ' + this.state.sec
          }
        )) 
      } else if (this.state.hour !== 0) {
        this.setState(prevState => (
          {
            hour: prevState.hour -1,
            min: 59,
            sec: 59, 
            result: ' ' + this.state.day + ' ' + this.state.hour + ' ' + this.state.min + ' ' + this.state.sec
          }
        )) 
      } else if (this.state.day !== 0) {
        this.setState(prevState => (
          {
            day: prevState.day -1,
            hour: 23,
            min: 59,
            sec: 59, 
            result: ' ' + this.state.day + ' ' + this.state.hour + ' ' + this.state.min + ' ' + this.state.sec
          }
        ))
      } else {
        this.setState({ result: 'Time is out!'});
        clearInterval(this.myInterval);
      }

  }, 1000)
}

  render() {
    return (
      <div className="App">
        <h1>Countdown</h1>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <input type='' placeholder='Add day' onChange={this.setDay}></input>
            </Grid.Column>
            <Grid.Column>
              <input type='' placeholder='Add min' onChange={this.setMin}></input>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <input type='' placeholder='Add hours' onChange={this.setHours}></input>
            </Grid.Column>
            <Grid.Column>
              <input type='' placeholder='Add sec' onChange={this.setSec}></input>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Button primary onClick={this.yourResult}>OK</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              <div className="ui centered card">
                <div className="content">
                  {this.state.result}
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </div>
    )
  }
}

export default App;
