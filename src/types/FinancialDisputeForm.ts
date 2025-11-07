export type FinancialForm = {
  caseId: string
  dateOfSubmission: string
  disputeType: string
  ongoingProceedings: string
  courtDetails?: string

  applicantName: string
  applicantRole: string
  applicantOccupation?: string
  applicantContact?: string

  respondentName: string
  respondentRole: string
  respondentContact?: string
  respondentRepresentative?: string

  loanType: string
  loanAmount: string
  disbursalDate?: string
  tenure?: string
  emiAmount?: string
  totalPaid?: string
  outstanding?: string
  collateral?: string

  disputeSummary?: string
  stepsAlreadyTaken?: string

  otherRelief?: string
  reliefSought: string
  

  mediationWillingness?: string
  mediationPreferences?: string

  declarationName?: string
  declarationDate?: string
  declarationAccepted?: boolean
}