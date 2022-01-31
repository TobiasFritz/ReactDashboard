import './Dashboard.css'
import ApplicantsList from "./ApplicantsList";
import { ApplicationState } from "../ts/Applicant.ts";

export default function Dashboard(props) {
    return (
        <div className="dashboard">
            <ApplicantsList
                applicants={props.applicants}
                onAddApplicant={props.onAddApplicant}
                showApplicationState={ApplicationState.application}
                onMoveApplicantUp={props.onMoveApplicantUp}
                onMoveApplicantDown={props.onMoveApplicantDown}
            />
            <ApplicantsList
                applicants={props.applicants}
                onAddApplicant={props.onAddApplicant}
                showApplicationState={ApplicationState.interview}
                onMoveApplicantUp={props.onMoveApplicantUp}
                onMoveApplicantDown={props.onMoveApplicantDown}
            />
            <ApplicantsList
                applicants={props.applicants}
                onAddApplicant={props.onAddApplicant}
                showApplicationState={ApplicationState.accepted}
                onMoveApplicantUp={props.onMoveApplicantUp}
                onMoveApplicantDown={props.onMoveApplicantDown}
            />
        </div>
    );
}
