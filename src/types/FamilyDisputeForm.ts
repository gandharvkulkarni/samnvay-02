export type FamilyDispute = {
    caseId: string,
    dateOfSubmission: string,
    caseCategory: string,
    existingLegalProceedings: string,
    courtDetails: string,

    // Section 2: Relationship Details
    dateOfMarriage: string,
    placeOfMarriage: string,
    typeOfMarriage: string,
    durationOfMarriage: string,
    currentLivingArrangement: string,
    separatedSince: string,
    reconciliationAttempts: string,
    reconciliationDetails: string,
    childrenDetails: string,

    // Section 3: Applicant Details
    applicantName: string,
    applicantGender: string,
    applicantAge: string,
    applicantDOB: string,
    applicantOccupation: string,
    applicantMonthlyIncome: string
    applicantAddress: string,
    applicantContact: string,
    applicantEmail: string,
    applicantIdProof: string,
    applicantRepresentative: string,

    // Section 3: Respondent Details
    respondentName: string,
    respondentGender: string,
    respondentAge: string,
    respondentDOB: string,
    respondentOccupation: string,
    respondentMonthlyIncome: string,
    respondentAddress: string,
    respondentContact: string,
    respondentEmail: string,
    respondentIdProof: string,
    respondentRepresentative: string,

    // Section 4: Financial Information
    jointlyOwnedProperty: string,
    propertyDetails: string,
    individualPropertyDetails: string,
    existingLoans: string,
    dependents: string,

    // Section 5: Issues/Reliefs
    otherRelief: string,
    reliefSought: string

    // Section 6: Respondent's Response
    respondentVersion: string,
    respondentLegalRepresentation: string,

    // Section 7: Legal Proceedings
    typeOfCase: string,
    caseNumber: string,
    courtName: string,
    currentStatus: string,
    previousMediation: string,

    // Section 9: Mediation Willingness
    mediationWillingness: string,
    mediationConditions: string,

    // Section 10: Declaration
    declarationAccepted?: boolean,
    declarationName: string,
    declarationDate: string,
}