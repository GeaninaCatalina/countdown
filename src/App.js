import React, { Component } from 'react';
import './App.css';
import { Button, Grid } from 'semantic-ui-react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      day: '00',
      hours: '00',
      min: '00',
      sec: '00',
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
    this.setState({ hours: e.target.value });
  }

  setMin = (e) => {
    this.setState({ min: e.target.value });
  }

  setSec = (e) => {
    this.setState({ sec: e.target.value });
  }

  yourResult = () => {
    const result = 'Day:' + this.state.day + ' Hours:' + this.state.hours + ' Min:' + this.state.min + ' Sec:' + this.state.sec;
    this.setState({ result: result })
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
              {this.state.result}
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </div>
    )
  }
}

export default App;
