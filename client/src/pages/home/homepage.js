import React from 'react';
import { Jumbotron, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Login from "../../components/Login/Login"
import Register from "../../components/Register/register"
class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    render(){
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Our Amazing App!</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                <Button color="danger" onClick={this.toggle}>Login</Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                                <ModalBody>
                                    <Login />
                                </ModalBody>
                            <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
                </p>
            </Jumbotron>
        </div>
    );
  } 
};

export default Homepage;