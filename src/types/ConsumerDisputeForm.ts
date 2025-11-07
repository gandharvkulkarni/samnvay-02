export type ConsumerDispute = {
    // === Section 1: Case Details ===
    caseId: string
    submissionDate: string
    disputeType: string
    legalProceedings?: string
    legalDetails?: string

    // === Section 2: Consumer / Complainant Details ===
    consumerName: string
    consumerId?: string
    consumerContact: string
    consumerEmail: string
    consumerAddress: string

    // === Section 3: Company / Seller Details ===
    companyName: string
    companyRepresentative?: string
    companyContact: string
    companyEmail?: string
    companyAddress?: string

    // === Section 4: Product / Service Details ===
    productService: string
    purchaseDate: string
    orderNo?: string
    amountPaid: string
    paymentMethod: string
    warranty?: string
    issue: string
    summary: string

    // === Section 5: Supporting Documents ===
    documentType?: string // e.g. ["Invoice", "Order Confirmation"]

    // === Section 6: Steps Already Taken ===
    stepsToResolve?: string

    // === Section 7: Relief Sought ===
    reliefSought?: string // e.g. ["Full Refund", "Compensation"]

    // === Section 8: Mediation ===
    mediationWillingness: string,
    mediationConditions: string,

    // === Section 9: Declaration ===
    declarationName: string
    declarationDate: string
}