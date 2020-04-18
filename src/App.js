import React from 'react';
import './App.css';
import DisplayEmployee from './components/DisplayEmployee';
import axios from 'axios';

const sampleEmployee = {
  name: 'Homer Simpson',
  fact: "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
  picture: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: sampleEmployee,
    };
    this.getEmployee = this.getEmployee.bind(this);
  }

  
  getEmployee = ()=>{
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(response => response.data)
    .then(data =>{
      console.log(data)
      this.setState({
        employee : data[0],
      })
    })
  }

  render() {
    return (
      <div className="App">
        <DisplayEmployee 
          employee={this.state.employee} />
        <button type="button" onClick={this.getEmployee}>Let's change !</button>
      </div>
    );
  }
}

export default App;

