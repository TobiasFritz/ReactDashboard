import './ApplicantsList.css'
import AddApplicant from "./AddApplicant";
import { ApplicationState } from "../ts/Applicant.ts";

export default function ApplicantsList(props) {
    const applicants = props.applicants.map(applicant => {
        if (applicant.applicationState !== props.showApplicationState) {
            return null;
        }
        const test = () => {
            props.onMoveApplicantDown(applicant)
        }
        const test2 = () => {
            props.onMoveApplicantUp(applicant)
        }
        return(
            <div className="applicant" key={applicant.id}>
                <div>{applicant.id}</div>
                <div>{applicant.name}</div>
                <div>{applicant.address}</div>
                <div>{applicant.phoneNumber}</div>
                <div>{applicant.dateOfBirth}</div>
                <div>
                    <button
                        disabled={props.showApplicationState === ApplicationState.application}
                        onClick={test}
                    >
                        links
                    </button>
                    <button
                        disabled={props.showApplicationState === ApplicationState.accepted}
                        onClick={test2}
                    >
                        rechts
                    </button>
                </div>
            </div>
        )
    })
    return (
        <div>
            <div>Bewerbungen</div>
            <div className="applicants">{applicants}</div>
            <AddApplicant
                defaultApplicationState={props.showApplicationState}
                onAddApplicant={props.onAddApplicant}
            />
        </div>
    );
}