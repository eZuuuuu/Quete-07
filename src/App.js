import React from 'react';
import './App.css';
import DisplayEmployee from './components/DisplayEmployee';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      simpson : null
    }
    //this.getSimpson = this.getSimpson.bind(this);
  }

  getEmployee = ()=>{
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(response => response.data)
    .then(data =>{
      console.log(data)
      this.setState({
        simpson : data[0],
      })
    })
  
  
  }
  render(){
    return (
      <div className="App">
        {this.state.simpson ? (
          <DisplayEmployee simpson={this.state.simpson} />
        ) : null}
        <button type="button" onClick={this.getEmployee}>Let's change quote !</button>
      </div>
    );
  }
  
}

export default App;