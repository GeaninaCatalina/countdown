import React, { Component } from 'react';
import './App.css';
import { Button, Grid, Card } from 'semantic-ui-react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      day: 0,
      hour: 0,
      min: 0,
      sec: 0,
      input:false,
      result: ''
    }
  }
  setDay = (e) => {
    this.setState({ day: e.target.value, input: true });
  }

  setHours = (e) => {
    this.setState({ hour: e.target.value, input: true });
  }

  setMin = (e) => {
    this.setState({ min: e.target.value, input: true });
  }

  setSec = (e) => {
    this.setState({ sec: e.target.value, input: true  });
  }

  yourResult = () => { 
    if (this.state.day ===0 && this.state.hour ===0 && this.state.min ===0 && this.state.sec ===0 ) {
      alert('You need to provide an input at least');
    } else {
     this.doIntervalChange();
    }
  } 

    doIntervalChange = () => {
    this.myInterval = setInterval(() => {
      if (this.state.sec !== 0) {
        this.setState(prevState => (
          {
            sec: prevState.sec - 1,
            result: 'Days ' + this.state.day + ' Hours ' + this.state.hour + ' Minutes ' + this.state.min + ' Seconds' + this.state.sec
          }
        ))
      } else if (this.state.min !== 0) {
        this.setState(prevState => (
          {
            min: prevState.min - 1,
            sec: 59,
            result: 'Days ' + this.state.day + ' Hours ' + this.state.hour + ' Minutes ' + this.state.min + ' Seconds' + this.state.sec
          }
        ))
      } else if (this.state.hour !== 0) {
        this.setState(prevState => (
          {
            hour: prevState.hour - 1,
            min: 59,
            sec: 59,
            result: 'Days ' + this.state.day + ' Hours ' + this.state.hour + ' Minutes ' + this.state.min + ' Seconds' + this.state.sec
          }
        ))
      } else if (this.state.day !== 0) {
        this.setState(prevState => (
          {
            day: prevState.day - 1,
            hour: 23,
            min: 59,
            sec: 59,
            result: 'Days ' + this.state.day + ' Hours ' + this.state.hour + ' Minutes ' + this.state.min + ' Seconds' + this.state.sec
          }
        ))
      } else {
        this.setState({ result: 'Time is out!' });
        clearInterval(this.myInterval);
      }

    }, 1000)
  }

  render() {
    return (
      <div className="App">
        <h1>Countdown</h1>
        <Grid className='Grid'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <div class="ui big icon input">
                <input type='' placeholder='Add day' onChange={this.setDay}></input>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div class="ui big icon input">
                <input type='' placeholder='Add min' onChange={this.setMin}></input>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <div class="ui big icon input">
                <input type='' placeholder='Add hours' onChange={this.setHours}></input>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div class="ui big icon input">
                <input type='' placeholder='Add sec' onChange={this.setSec}></input>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column> 
              <Button primary onClick={this.yourResult}>OK</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
             <Card size='big' centered color='olive' content={this.state.result}></Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </div>
    )
  }
}

export default App;
