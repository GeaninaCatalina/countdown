import React, { Component } from 'react';
import './App.css';
import { Button, Grid, Card, Modal, Header, Input } from 'semantic-ui-react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      day: '',
      hour: '',
      min: '',
      sec: '',
      input: false,
      result: '',
      modalIsOpen: false,
      error: false
    }
  }
  setDay = (e) => {
    if (e.target.value) {
      this.setState({ day: e.target.value, input: true, error:false});
    } else {
      clearInterval(this.myInterval)
      this.setState({ day: 0, input: false, error:true, result: ''});
    }
  }
  setHours = (e) => {
    if (e.target.value) {
      this.setState({ hour: e.target.value, input: true, error:false});
    } else {
      clearInterval(this.myInterval)
      this.setState({ hour: 0, input: false, error:true, result: ''});
    }
  }

  setMin = (e) => {
    if (e.target.value) {
      this.setState({ min: e.target.value, input: true, error:false});
    } else {
      clearInterval(this.myInterval)
      this.setState({ min: 0, input: false, error:true, result: ''});
    }
  }

  setSec = (e) => {
    if (e.target.value) {
      this.setState({ sec: e.target.value, input: true, error:false});
    } else {
      clearInterval(this.myInterval)
      this.setState({ sec: 0, input: false, error:true, result: ''});
    }
  }

  yourResult = () => { 
    if (this.state.day ===0 && this.state.hour ===0 && this.state.min ===0 && this.state.sec ===0 ) {
      this.setState({modalIsOpen: true})
    } else {
     this.doIntervalChange();
    }
  } 

  onCloseModal = () => {
    this.setState(
      {
        modalIsOpen: false, 
        error: true
      }) 
    
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

  onReset = (e) => {
    clearInterval(this.myInterval)
    this.setState(
      { 
        day: '', 
        hour: '',
        min: '',
        sec: '', 
        input: false, 
        error: true, 
        result: '',        
      }); 
  }  
 
  render() {
    return (
      <div className="App">
        <h1>Countdown</h1>
        <Grid className='Grid'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <div class="ui big icon input">
                <Input type='' placeholder='Add day' value={this.state.day} error={this.state.error} onChange={this.setDay}></Input>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div class="ui big icon input">
                <Input type='' placeholder='Add min' value={this.state.min} error={this.state.error} onChange={this.setMin}></Input>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <div class="ui big icon input">
                <Input type='' placeholder='Add hours' value={this.state.hour} error={this.state.error} onChange={this.setHours}></Input>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div class="ui big icon input">
                <Input type='' placeholder='Add sec'  value={this.state.sec} error={this.state.error} onChange={this.setSec} ></Input>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column> 
              <Button color='teal' onClick={this.yourResult}>OK</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
            <Modal open={this.state.modalIsOpen}>
              <Header content='Error' />
                <Modal.Content>
                 <h3>You should have at least one input!</h3>
                </Modal.Content>
                <Modal.Actions>
                  <Button color='red' onClick={this.onCloseModal}>OK</Button>
                </Modal.Actions>
              </Modal>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
             <Card size='big' centered color='olive' content={this.state.result}></Card> 
             </Grid.Column>
             <Grid.Column>
             <Button color='teal' onClick={this.onReset}>Reset</Button>
            </Grid.Column>            
          </Grid.Row>
        </Grid>

      </div>
    )
  }
}

export default App;
