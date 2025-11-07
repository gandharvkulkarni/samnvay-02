export const financialDisputeType = [
    "Loan Default",
    "Recovery of Dues",
    "Overdue Interest / Penalty",
    "Settlement Negotiation",
    "Credit Card / EMI Dispute",
    "Mortgage / Hypothecation Issue",
    "Other",
]

export const financialDocumentType = [
  { key: "loan_agreement", value: "Loan Agreement / Sanction Letter" },
  { key: "payment_receipts", value: "Payment Receipts / Bank Statements" },
  { key: "demand_notice", value: "Demand / Recovery Notice" },
  { key: "communication", value: "Email or Chat Communication" },
  { key: "settlement_offer", value: "Settlement Offer / Correspondence" },
  { key: "other", value: "Other" }
];


export const loanType = ["Personal", "Business", "Home", "Vehicle", "Credit Card", "Other"]

export const familyCaseCategory = ["Family", "Matrimonial", "Custody", "Maintenance", "Property", "Other"]

export const familyDocumentType = [
  { key: "marriage_certificate", value: "Marriage Certificate" },
  { key: "aadhaar_id_proof", value: "Aadhaar / ID Proof" },
  { key: "proof_of_address", value: "Proof of Address" },
  { key: "income_proof_salary_slip", value: "Income Proof / Salary Slip" },
  { key: "child_birth_certificate", value: "Child Birth Certificate" },
  { key: "fir_court_order", value: "FIR / Court Order" },
  { key: "property_ownership_proofs", value: "Property Ownership Proofs" },
  { key: "bank_statement", value: "Bank Statement" },
  { key: "medical_counselling_report", value: "Medical / Counselling Report" },
]


export const marriageType = ["Hindu", "Muslim", "Christian", "Special Marriage Act", "Other"]

export const employmentDisputeType = [
    "Wrongful Termination",
    "Unpaid Salary / Dues",
    "Contractual Breach (Employment Agreement / NDA / Offer Letter)",
    "Workplace Harassment / Discrimination",
    "Non-Compete / Restrictive Covenants",
]

export const employmentDocumentType = [
  { key: "offer_letter", value: "Offer Letter / Employment Contract" },
  { key: "salary_slips", value: "Salary Slips / Payment Records" },
  { key: "communications", value: "Email or Chat Communications" },
  { key: "termination_letter", value: "Termination Letter / Resignation Letter" },
  { key: "performance_review", value: "Performance Review Documents" }
];

export const employmentReliefSought = [
    "Compensation",
    "Reinstatement",
    "Full & Final Settlement",
    "Apology",
    "Experience Letter",
]

export const consumerDisputeType = [
    "Product Defect",
    "Delay in Delivery",
    "Warranty Issue",
    "Refund / Replacement",
    "Misleading Advertisement",
    "Overcharging",
    "Other",
]

export const consumerDocumentType = [
  { key: "invoice_receipt", value: "Invoice / Bill / Receipt" },
  { key: "order_proof", value: "Order Confirmation / Delivery Proof" },
  { key: "warranty_card", value: "Warranty Card / Guarantee Certificate" },
  { key: "correspondence", value: "Email / Chat Correspondence" },
  { key: "complaint_ticket", value: "Complaint Ticket / Service Request" },
  { key: "media_files", value: "Photos / Videos (if applicable)" }
];

export const consumerReliefSought = [
    "Full Refund",
    "Replacement / Repair",
    "Compensation",
    "Service Completion",
    "Apology",
    "Other",
]