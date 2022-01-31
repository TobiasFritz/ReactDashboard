import './App.css';
import Dashboard from "./components/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import { Applicant, ApplicationState } from "./ts/Applicant.ts";

function App() {
    const [applicants, setApplicants] = useState([
        new Applicant(
            'lhsdfkjf',
            'Max Mustermann',
            'Musterstr. 33',
            '+49 1335 13534354',
            '1900-01-01',
            ApplicationState.application
        )
    ])
    const handleAddApplicant = (
        id: string,
        name: string,
        address: string,
        phoneNumber: string,
        dateOfBirth: string,
        applicationState: ApplicationState
    ) => {
        let list = applicants.filter(applicant => applicant.id !== id)
        setApplicants(list.concat(new Applicant(id, name, address, phoneNumber, dateOfBirth, applicationState)))
    }

    const handleMoveApplicationStateUp = (applicant) => {
        handleAddApplicant(
            applicant.id,
            applicant.name,
            applicant.address,
            applicant.phoneNumber,
            applicant.dateOfBirth,
            applicant.applicationState !== ApplicationState.accepted
                ? (applicant.applicationState + 1)
                : applicant.applicationState
        )
    }

    const handleMoveApplicationStateDown = (applicant) => {
        handleAddApplicant(
            applicant.id,
            applicant.name,
            applicant.address,
            applicant.phoneNumber,
            applicant.dateOfBirth,
            applicant.applicationState !== ApplicationState.application
                ? (applicant.applicationState - 1)
                : applicant.applicationState
        )
    }

    return (
        <div className="App">
          <header className="App-header">
              <Dashboard
                  applicants={applicants}
                  onAddApplicant={handleAddApplicant}
                  onMoveApplicantUp={handleMoveApplicationStateUp}
                  onMoveApplicantDown={handleMoveApplicationStateDown}
              />
          </header>
        </div>
    );
}

export default App;
