import './AddApplicant.css'
import AddApplicantModal from "./AddApplicantModal";
import {useState} from "react";

export default function AddApplicant(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleClick() {
        handleShow()
    }

    return (
        <div>
            <button onClick={handleClick}>Add</button>
            <AddApplicantModal
                show={show}
                defaultApplicationState={props.defaultApplicationState}
                onClose={handleClose}
                onSave={props.onAddApplicant}
            />
        </div>
    );
}