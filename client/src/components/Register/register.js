import React, { Component } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import "./register.css";

const Register = props => {

    return (
     
        <Modal isOpen={props.isOpen} toggle={props.toggleRegister}>
          <ModalHeader>Please Select An Option!</ModalHeader>
          <ModalBody>
            
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                required
                name="firstName"
                id="firstName"
                onChange={ e => props.handleInputChange(e.target.name, e.target.value) }
              />
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                required
                name="lastName"
                id="lastName"
                onChange={ e => props.handleInputChange(e.target.name, e.target.value) }
              />
            </div>

            <div>
            <label htmlFor="email">Email</label>
              <input
                type="email"
                required
                id="email"
                name="email"
                onChange={ e => props.handleInputChange(e.target.name, e.target.value) }
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                required
                type="password"
                name="password"
                onChange={ e => props.handleInputChange(e.target.name, e.target.value) }
              />
            </div>

          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={ props.register }>Do Something</Button>{' '}
            <Button color="danger" onClick={props.toggleRegister}>Cancel</Button>
          </ModalFooter>
        </Modal>
    );
}

export default Register;