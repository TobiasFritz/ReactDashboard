import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import uuid from 'react-uuid';

export default function AddApplicantModal(props) {
    const [id, setId] = useState(uuid())
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [applicationState, setApplicationState] = useState(props.defaultApplicationState)
    const [status, setStatus] = useState('typing')

    if (!props.show) {
        return null
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setStatus('submitting')
        try {
            if (
                name !== '' &&
                address !== '' &&
                phoneNumber !== '' &&
                dateOfBirth !== ''
            ) {
                props.onClose()
                props.onSave(id, name, address, phoneNumber, dateOfBirth, applicationState)
                reset()
            } else {
                setStatus('typing')
            }
        } catch (err) {
            setStatus('typing')
        }
    }

    function handleNameInputChange(e) {
        setName(e.target.value)
    }

    function handleAddressInputChange(e) {
        setAddress(e.target.value)
    }

    function handlePhoneNumberInputChange(e) {
        setPhoneNumber(e.target.value)
    }

    function handleDateOfBirthInputChange(e) {
        setDateOfBirth(e.target.value)
    }

    function reset() {
        setStatus('typing')
        setId(uuid())
        setName('')
        setAddress('')
        setPhoneNumber('')
        setDateOfBirth('')
        setApplicationState(props.defaultApplicationState)
    }

    return (
        <>
            <Modal show={props.show} onHide={props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Neuer Bewerber hinzufügen</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={props.onSave}>
                        <textarea
                            value={name}
                            onChange={handleNameInputChange}
                            disabled={status === 'submitting'}
                        />
                        <textarea
                            value={address}
                            onChange={handleAddressInputChange}
                            disabled={status === 'submitting'}
                        />
                        <textarea
                            value={phoneNumber}
                            onChange={handlePhoneNumberInputChange}
                            disabled={status === 'submitting'}
                        />
                        <textarea
                            value={dateOfBirth}
                            onChange={handleDateOfBirthInputChange}
                            disabled={status === 'submitting'}
                        />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onClose}>
                        Schließen
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Speichern
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
