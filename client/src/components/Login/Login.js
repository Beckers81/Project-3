import React, { Component } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Login = props => {
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggleLogin}>
      <ModalHeader toggle={props.toggleLogin}>Please Select An Option!</ModalHeader>
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
          <Button color="primary" type="submit">Do Something</Button>{' '}
          <Button color="danger" onClick={props.toggleLogin}>Cancel</Button>
        </ModalFooter>
    </Modal>
  );
}

export default Login;