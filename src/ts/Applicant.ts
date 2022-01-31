export enum ApplicationState {
    application,
    interview,
    accepted
}

export class Applicant {
    readonly _id: string;
    readonly _name: string;
    readonly _address: string;
    readonly _phoneNumber: string;
    readonly _dateOfBirth: string;
    readonly _applicationState: ApplicationState

    constructor(
        id: string,
        name: string,
        address: string,
        phoneNumber: string,
        dateOfBirth: string,
        applicationState: ApplicationState
    ) {
        this._id = id;
        this._name = name;
        this._address = address;
        this._phoneNumber = phoneNumber;
        this._dateOfBirth = dateOfBirth;
        this._applicationState = applicationState;
    }


    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get address(): string {
        return this._address;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    get dateOfBirth(): string {
        return this._dateOfBirth;
    }

    get applicationState(): ApplicationState {
        return this._applicationState;
    }
}