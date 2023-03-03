import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiOutlineClose } from "react-icons/ai";

const EditModal = (props) => {
  //   const { name, email, website, phone, username } = props.item;
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Basic Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-outline-primary" onClick={props.onHide}>
            Cancel
          </button>
          <Button className="btn btn-primary" onClick={props.onHide}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModal;
