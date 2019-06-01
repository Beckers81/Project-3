import React, { Component } from 'react';
import "./BlogPost.css";
import {Form, FormGroup, Input, Label, Col, Container, Row, Jumbotron} from 'reactstrap'

export default class BlogPost extends Component {





  state = {
    title: '',
    blogPost: '',
  }

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



