import React, { Component } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const Login = props => {
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggleLogin}>
      <ModalHeader toggle={props.toggleLogin}>Please Log In Using Email and Password:</ModalHeader>
        <ModalBody>
          {/* <form> */}
            <input
              value={ props.email }
              type="text"
              name="email"
              onChange={ e => props.handleInputChange(e.target.name, e.target.value) }
            />
            <input
              value={ props.password }
              type="password"
              name="password"
              onChange={ e => props.handleInputChange(e.target.name, e.target.value) }
              
            />
             {/* <Button color="primary" type="submit">Do Something</Button>{' '}
             </form > */}
        
        </ModalBody>

        <ModalFooter>
        <Button variant="outline-secondary" size="lg" type="submit" href="/blog">Log In</Button>{' '}   
          
          <Button variant="outline-secondary" size="lg"  onClick={props.toggleLogin}>Cancel</Button>
        </ModalFooter>
    </Modal>
  )
};

export default Login;