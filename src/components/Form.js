import React, { Component } from 'react';
import { ReactMic } from 'react-mic';
import Audio from './Audio';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {    fontSize:"64",  value: '                           Write your Answer here.'  , record: false  };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
      alert('Answer was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="form">
        <form onSubmit={this.handleSubmit}>
          <label>
            <div className="quiz">
                <ul>Ques. What is meant by Java garbage Collection?</ul>
                <img src='assets/images/java.png' height="250" width="800" alt='quesimg' />
            </div>
            <textarea id="answer" rows="6" cols="80" value={this.state.value} onChange={this.handleChange} />
            <Audio />
            <div class="center">
            <button type="Submit" class="button" value="Submit">Submit</button>
            </div>     
          </label>
        </form>
        </div>
      );
    }
  }

export default Form;