import { useForm, Controller } from "react-hook-form"
import { CreditCard } from "lucide-react"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { addDataToGoogleSheet, getFormData } from "@/lib/utils"
import { FormField } from "./ui/FormField"
import { SectionCard } from "./ui/SectionCard"
import { FinancialForm } from "@/types/FinancialDisputeForm"
import { financialDisputeType, financialDocumentType, loanType } from "@/enums/enums"
import FileUploadForm from "./ui/FileUploadForm"


export default function FinancialDisputeForm() {

    const { register, handleSubmit, control, reset, watch, formState: { errors, isSubmitting } } = useForm<FinancialForm>()

    const onSubmit = async (data: FinancialForm) => {
        try {
            const formData = getFormData(data)
            const API_URL = import.meta.env.VITE_API_ENDPOINT;
            const response = await fetch(`${API_URL}/financial`, {
                method: "POST",
                body: formData,
            })

            if (!response.ok) {
                const err = await response.json().catch(() => ({}))
                throw new Error(err.message || "Failed to submit dispute form")
            }
            toast.success('Dispute Submitted')
            await addDataToGoogleSheet(data, 'Financial')

            console.log("Dispute Submitted:", data)
            reset()
        } catch (error: any) {
            toast.error(error.message)
            console.error(" Submission Error:", error)
        }
    }

    return (
        <section className="relative py-24 px-6 bg-linear-to-br from-[#ECFDF5] via-[#E0F7FA] to-[#EFF6FF]">
            <div className="max-w-5xl mx-auto">
                <header className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-linear-to-br from-emerald-500 to-teal-400 text-white">
                        <CreditCard className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Loan & Financial Dispute Form</h2>
                        <p className="text-sm text-gray-600">Capture loan details, outstanding amounts and the resolution you seek.</p>
                    </div>
                </header>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                    {/* SECTION 1 */}
                    <SectionCard number="1" title="Case Details">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField label="Case ID / Reference No.">
                                <Input placeholder="Enter case ID" {...register("caseId")} />
                            </FormField>

                            <FormField label="Date of Submission">
                                <Input type="date" {...register("dateOfSubmission")} />
                            </FormField>

                            <FormField label="Type of Financial Dispute" required error={errors.disputeType?.message}>
                                <Controller
                                    control={control}
                                    name="disputeType"
                                    rules={{ required: "Select dispute type" }}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select dispute type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {financialDisputeType.map((v) => (
                                                    <SelectItem key={v} value={v}>
                                                        {v}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </FormField>

                            <FormField label="Ongoing Legal Proceedings?" required error={errors.ongoingProceedings?.message}>
                                <Controller
                                    control={control}
                                    name="ongoingProceedings"
                                    rules={{ required: "Select Yes/No" }}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Yes">Yes</SelectItem>
                                                <SelectItem value="No">No</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </FormField>
                        </div>

                        {watch("ongoingProceedings") === "Yes" && (
                            <FormField label="Case No. / Court / Tribunal Details" className="mt-6">
                                <Textarea placeholder="Provide court case number and details" {...register("courtDetails")} />
                            </FormField>
                        )}
                    </SectionCard>

                    {/* SECTION 2: Applicant & Respondent */}
                    <SectionCard number="2" title="Party Details">
                        <h4 className="text-amber-900 font-semibold mb-2">Applicant / Complainant</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                            <FormField label="Name" required error={errors.applicantName?.message}>
                                <Input placeholder="Full name" {...register("applicantName", { required: "Name is required" })} />
                            </FormField>
                            <FormField label="Role" required error={errors.applicantRole?.message}>
                                <Controller
                                    control={control}
                                    name="applicantRole"
                                    rules={{ required: "Select role" }}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger><SelectValue placeholder="Select role" /></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Borrower">Borrower</SelectItem>
                                                <SelectItem value="Lender">Lender</SelectItem>
                                                <SelectItem value="Guarantor">Guarantor</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </FormField>
                            <FormField label="Occupation / Organization">
                                <Input placeholder="Occupation or organization name" {...register("applicantOccupation")} />
                            </FormField>
                            <FormField label="Contact / Email / Address" required error={errors.applicantContact?.message}>
                                <Input placeholder="Contact details" {...register("applicantContact", { required: "Contact details are required" })} />
                            </FormField>
                        </div>

                        <h4 className="text-orange-900 font-semibold mb-2">Respondent (Opposite Party)</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField label="Name" required error={errors.respondentName?.message}>
                                <Input placeholder="Full name" {...register("respondentName", { required: "Name required" })} />
                            </FormField>
                            <FormField label="Role" required error={errors.respondentRole?.message}>
                                <Controller
                                    control={control}
                                    name="respondentRole"
                                    rules={{ required: "Select role" }}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger><SelectValue placeholder="Select role" /></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Borrower">Borrower</SelectItem>
                                                <SelectItem value="Lender">Lender</SelectItem>
                                                <SelectItem value="Guarantor">Guarantor</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </FormField>
                            <FormField label="Contact / Email / Address" required error={errors.respondentContact?.message}>
                                <Input placeholder="Contact details" {...register("respondentContact", { required: "Contact details are required" })} />
                            </FormField>
                            <FormField label="Representative / Advocate (if any)">
                                <Input placeholder="Representative details" {...register("respondentRepresentative")} />
                            </FormField>
                        </div>
                    </SectionCard>

                    {/* SECTION 3: Loan / Financial Details */}
                    <SectionCard number="3" title="Loan / Financial Details">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField label="Type of Loan / Facility" required error={errors.loanType?.message}>
                                <Controller
                                    control={control}
                                    name="loanType"
                                    rules={{ required: "Loan type required" }}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger><SelectValue placeholder="Select loan type" /></SelectTrigger>
                                            <SelectContent>
                                                {loanType.map((v) => (
                                                    <SelectItem key={v} value={v}>{v}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </FormField>
                            <FormField label="Loan Amount Sanctioned" required error={errors.loanAmount?.message}>
                                <Input placeholder="Amount in ₹" {...register("loanAmount", { required: "Loan amount required" })} />
                            </FormField>
                            <FormField label="Disbursal Date"><Input type="date" {...register("disbursalDate")} /></FormField>
                            <FormField label="Tenure"><Input placeholder="e.g., 5 years, 60 months" {...register("tenure")} /></FormField>
                            <FormField label="EMI Amount"><Input placeholder="Monthly amount in ₹" {...register("emiAmount")} /></FormField>
                            <FormField label="Total Amount Paid"><Input placeholder="Amount in ₹" {...register("totalPaid")} /></FormField>
                            <FormField label="Outstanding Balance"><Input placeholder="Amount in ₹" {...register("outstanding")} /></FormField>
                            <FormField label="Collateral / Security"><Input placeholder="Describe collateral" {...register("collateral")} /></FormField>
                        </div>
                    </SectionCard>

                    {/* SECTION 4: Dispute Details */}
                    <SectionCard number="4" title="Dispute & Relief">
                        <FormField label="Brief Summary of Dispute" className="mb-6">
                            <Textarea placeholder="Describe background, key events, facts..." className="min-h-32" {...register("disputeSummary")} />
                        </FormField>

                        <FormField label="Steps Already Taken" className="mb-6">
                            <Textarea placeholder="Mention negotiation, communication, or prior complaint..." className="min-h-24" {...register("stepsAlreadyTaken")} />
                        </FormField>

                        <FormField label="Other Relief (if any)">
                            <Input placeholder="Specify relief sought" {...register("otherRelief")} />
                        </FormField>
                    </SectionCard>

                    {/* Documents */}
                    <SectionCard number="5" title="Supporting Documents">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {
                                financialDocumentType?.map((doc) =>
                                    <FormField label={doc.value} key={doc.key}>
                                        <FileUploadForm register={register} watch={watch} fieldName={doc.key} />
                                    </FormField>
                                )
                            }
                        </div>
                    </SectionCard>

                    {/* SECTION 5: Mediation & Declaration */}
                    <SectionCard number="6" title="Mediation & Declaration">
                        <FormField label="Are you willing to participate in mediation?" required error={errors.mediationWillingness?.message} className="mb-6">
                            <Controller
                                control={control}
                                name="mediationWillingness"
                                rules={{ required: "Please select an option" }}
                                render={({ field }) => (
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Yes">Yes</SelectItem>
                                            <SelectItem value="No">No</SelectItem>
                                            <SelectItem value="Unsure">Unsure</SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                        </FormField>

                        <FormField label="Preferences (timing / language / confidentiality)" className="mb-6">
                            <Textarea placeholder="Specify preferences..." {...register("mediationPreferences")} />
                        </FormField>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField label="Full Name" required error={errors?.declarationName?.message}>
                                <Input placeholder="Enter your full name" {...register("declarationName", { required: "Please provide your name" })} />
                            </FormField>
                            <FormField label="Date" required error={errors?.declarationDate?.message}>
                                <Input type="date" {...register("declarationDate", { required: "Please enter declaration date" })} />
                            </FormField>
                        </div>
                    </SectionCard>

                    {/* Submit */}
                    <div className="flex justify-end gap-3">
                        <Button type="submit" disabled={isSubmitting} className="bg-linear-to-r from-emerald-500 to-teal-500 hover:opacity-90 text-white">
                            {isSubmitting ? "Submitting..." : "Submit Form"}
                        </Button>
                        <Button type="button" variant="outline">Reset</Button>
                    </div>
                </form>
            </div>
        </section>
    )
}
