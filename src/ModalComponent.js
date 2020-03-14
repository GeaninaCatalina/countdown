import React  from 'react';
import { Modal, Button, Header } from 'semantic-ui-react';


const ModalComponent = (props) => {
  
    return (
      <Modal open={props.openModal}>
        <Header.Content>Error</Header.Content>
        <Modal.Content><h3>You should have at least one input!</h3></Modal.Content>
        <Modal.Actions><Button color='red' onClick={props.closeModal}>OK</Button></Modal.Actions>
      </Modal>
    )
}

export default ModalComponent