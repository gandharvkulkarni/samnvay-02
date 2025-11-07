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
  loandocument?: boolean
  paymentReceipts?: boolean
  demandNotice?: boolean
  emailCommunication?: boolean
  settlementOffer?: boolean
  otherDocuments?: string
  stepsAlreadyTaken?: string

  restructuring?: boolean
  waiverReduction?: boolean
  settlementDues?: boolean
  closure?: boolean
  otherRelief?: string

  mediationWillingness?: string
  mediationPreferences?: string

  declarationName?: string
  declarationDate?: string
  declarationAccepted?: boolean
}