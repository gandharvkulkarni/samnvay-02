export type EmploymentDispute = {
  caseId: string
  submissionDate: string
  complainantName: string
  oppositeName: string
  representative?: string
  contactEmail: string
  contactPhone: string
  disputeType: string
  otherDispute?: string
  legalProceedings: string
  legalCaseDetails?: string
  designation: string
  department: string
  joinDate: string
  terminationDate?: string
  employmentType: string
  location: string
  disputeSummary: string
  documentType: string
  stepsResolved: string
  reliefSought: string
  otherRelief?: string
  mediationWillingness: string
  mediationConditions?: string
  declarationName: string
  declarationDate: string
}
