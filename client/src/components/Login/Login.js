import React, { Component } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Login = props => {
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggleLogin}>
      <ModalHeader toggle={props.toggleLogin}>Please Log In!</ModalHeader>
        <ModalBody>
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
        
        </ModalBody>

        <ModalFooter>
        <Button variant="outline-secondary" size="lg" type="submit">Do Something</Button>{' '}
          
          <Button variant="outline-secondary" size="lg"  onClick={props.toggleLogin}>Cancel</Button>
        </ModalFooter>
    </Modal>
  );
}

export default Login;