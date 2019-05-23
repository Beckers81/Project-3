import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Login from "../../components/Login/Login";
import Nav from "../../components/navbar/Nav";
import Register from "../../components/Register/register";

class Homepage extends React.Component {
  state = {
    modal: false
  };
  
  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render(){
    return (
      <div>
        <div className="horizontal-center">
          <h1 className="display-3">Our Amazing App!</h1>
          <p className="lead">Interested in a Free Gift?</p>
          <hr className="my-2" />
          <p>Our Home Page is Fun and Inspirational.</p>
          <div className="container">
        </div>
      </div>
      <p className="lead">
        <Button color="secondary" size="lg"onClick={this.toggle}>Login</Button>
        <Button color="secondary" size="lg"onClick={this.toggle}>Register</Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Please Select An Option!</ModalHeader>
          <ModalBody>
            <Login />
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Please Select An Option!</ModalHeader>
          <ModalBody>
            <Register updateLoggedInUser={ this.props.updateLoggedInUser }/>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </p>
      </div>
    );
  } 
};

export default Homepage;