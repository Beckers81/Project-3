import React, { Component } from 'react';
import "./BlogPost.css";
import {Form, FormGroup, Input, Label, Col, Container, Row, Jumbotron} from 'reactstrap'

export default class BlogPost extends Component {





  state = {
    title: '',
    blogPost: '',
  }
  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.name) {
      // Call the API
    }
  };


  render() {
    return (
      

      <Container>
      <Jumbotron>
      <h1>Please Feel Free to Share Some Positivity!</h1>
      
      <Form>
        {/* <input */}
          {/* type="text"
          name="title" */}

          <FormGroup row>


          <Label for="exampleText" sm={2}>Tell Us What Brought You Here Today</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        
        <FormGroup row>

{/* <Jumbotron> */}
<Label for="exampleText" sm={2}>Please Feel Free to Share Your Positive Thought or Words - Pay Positivity Forward. :) </Label>
<Col sm={10}>
  <Input type="textarea" name="text" id="exampleText" className="blogtextarea" bsSize="lg"/>
</Col>
</FormGroup>

     
          {/* name="body" */}
          {/* value={ this.state.title } */}
        

        <button>Submit</button>

    </Form>
    </Jumbotron>
    </Container>
    )
  }


};

