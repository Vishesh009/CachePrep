import React, { Component } from 'react';
import Form from './Form';

class Main extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log('Thank you for your Answer!\n' + JSON.stringify(values));
        this.props.resetFeedbackForm();
        this.props.postFeedback(values);
        alert('Thank you for your Answer!\n' + JSON.stringify(this.props.feedback));
    }
       
        render() {
            return(
                <div className="container">
                    <div className="row row-header" >
                    <img src='assets/images/cacheprepLogo.png' height="60" width="200" alt='CachePrep' />
                        <h1> Hello from CachePrep!!!!! </h1>
                    </div>
                    <div class="container" id="container">
                        <Form />
                    </div>
                </div>
            );
        }
    }
    
    export default Main;