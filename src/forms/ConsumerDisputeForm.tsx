import { useForm, Controller } from "react-hook-form"
import { ShoppingCart } from "lucide-react"

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
import { addDataToGoogleSheet, getFormData } from "@/lib/utils"
import { toast } from "sonner"
import { SectionCard } from "./ui/SectionCard"
import { FormField } from "./ui/FormField"
import { YesNoField } from "./ui/YesNoField"
import { ConsumerDispute } from "@/types/ConsumerDisputeForm"
import { consumerDisputeType, consumerDocumentType, consumerReliefSought } from "@/enums/enums"
import FileUploadForm from "./ui/FileUploadForm"
import ConfidentialityNote from "@/components/ConfidentialityNote"


export default function ConsumerDisputeForm() {
    const { register, handleSubmit, control, reset, watch, formState: { errors, isSubmitting } } = useForm<ConsumerDispute>()

    const onSubmit = async (data: ConsumerDispute) => {
        try {
            const formData = getFormData(data)
            const API_URL = import.meta.env.VITE_API_ENDPOINT;
            const response = await fetch(`${API_URL}/consumer`, {
                method: "POST",
                body: formData,
            })

            if (!response.ok) {
                const err = await response.json().catch(() => ({}))
                throw new Error(err.message || "Failed to submit dispute form")
            }
            toast.success('Dispute Submitted')
            await addDataToGoogleSheet(data, 'Consumer')

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
                        <ShoppingCart className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Consumer Dispute Form</h2>
                        <p className="text-sm text-gray-600">For product / service complaints, refunds and warranty issues.</p>
                    </div>
                </header>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* === SECTION 1: CASE DETAILS === */}
                    <SectionCard number="1" title="Case Details">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField label="Case ID / Reference No.">
                                <Input placeholder="Enter case ID" {...register("caseId")} />
                            </FormField>
                            <FormField label="Date of Submission">
                                <Input type="date" {...register("submissionDate")} />
                            </FormField>
                            <FormField label="Type of Consumer Dispute" required error={errors.disputeType?.message}>
                                <Controller
                                    control={control}
                                    name="disputeType"
                                    rules={{ required: "Please select a Dispute category" }}
                                    render={({ field }) => (
                                        <Select value={field.value} onValueChange={field.onChange}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Dispute Category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {consumerDisputeType.map(v => (
                                                    <SelectItem key={v} value={v}>{v}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </FormField>
                            <FormField
                                label="Ongoing Legal Proceedings?">
                                <YesNoField
                                    name="legalProceedings"
                                    register={register}
                                    control={control}
                                    detailsName="legalDetails"
                                    detailsPlaceholder="Provide case no. / court details"
                                />
                            </FormField>
                        </div>
                    </SectionCard>

                    {/* === SECTION 2: CONSUMER DETAILS === */}
                    <SectionCard number="2" title="Consumer / Complainant Details">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField label="Full Name" required error={errors.consumerName?.message}>
                                <Input placeholder="Enter your full name" {...register("consumerName", { required: "Name is required" })} />
                            </FormField>

                            <FormField label="ID Proof No. (Aadhaar / PAN / Passport)" error={errors.consumerId?.message}>
                                <Input placeholder="Enter ID proof number" {...register("consumerId")} />
                            </FormField>

                            <FormField label="Contact Number" required error={errors.consumerContact?.message}>
                                <Input placeholder="e.g., +91 9876543210" {...register("consumerContact", { required: "Contact is required" })} />
                            </FormField>

                            <FormField label="Email Address" required error={errors.consumerEmail?.message}>
                                <Input type="email" placeholder="you@example.com" {...register("consumerEmail", { required: "Email is required" })} />
                            </FormField>

                            <FormField label="Full Address" required error={errors.consumerAddress?.message} className="md:col-span-2">
                                <Textarea placeholder="Enter your complete address" {...register("consumerAddress", { required: "Address is required" })} />
                            </FormField>
                        </div>
                    </SectionCard>

                    {/* === SECTION 3: COMPANY / SELLER DETAILS === */}
                    <SectionCard number="3" title="Opposite Party (Company / Seller / Service Provider)">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField label="Company / Seller Name" required error={errors.companyName?.message}>
                                <Input placeholder="Enter company or seller name" {...register("companyName", { required: "Company name is required" })} />
                            </FormField>

                            <FormField label="Representative (if any)" error={errors.companyRepresentative?.message}>
                                <Input placeholder="Enter representative name" {...register("companyRepresentative")} />
                            </FormField>

                            <FormField label="Contact Number" required error={errors.companyContact?.message}>
                                <Input placeholder="Enter company contact number" {...register("companyContact", { required: "Contact number is required" })} />
                            </FormField>

                            <FormField label="Email" error={errors.companyEmail?.message}>
                                <Input type="email" placeholder="company@example.com" {...register("companyEmail")} />
                            </FormField>

                            <FormField label="Company Address" className="md:col-span-2" error={errors.companyAddress?.message}>
                                <Textarea placeholder="Enter company or seller address" {...register("companyAddress")} />
                            </FormField>
                        </div>
                    </SectionCard>

                    {/* === SECTION 4: PRODUCT / SERVICE DETAILS === */}
                    <SectionCard number="4" title="Product / Service Information">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField label="Product / Service Purchased" required error={errors.productService?.message}>
                                <Input placeholder="Describe the product or service" {...register("productService", { required: "Product or service is required" })} />
                            </FormField>

                            <FormField label="Date of Purchase" required error={errors.purchaseDate?.message}>
                                <Input type="date" {...register("purchaseDate", { required: "Purchase date is required" })} />
                            </FormField>

                            <FormField label="Order No." error={errors.orderNo?.message}>
                                <Input placeholder="Enter order reference number" {...register("orderNo")} />
                            </FormField>

                            <FormField label="Amount Paid" required error={errors.amountPaid?.message}>
                                <Input placeholder="Enter amount in ₹" {...register("amountPaid", { required: "Amount is required" })} />
                            </FormField>

                            <FormField label="Payment Method" required error={errors.paymentMethod?.message}>
                                <Controller
                                    control={control}
                                    name="paymentMethod"
                                    rules={{ required: "Payment method is required" }}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select payment method" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="cash">Cash</SelectItem>
                                                <SelectItem value="card">Card</SelectItem>
                                                <SelectItem value="upi">UPI</SelectItem>
                                                <SelectItem value="online">Online Transfer</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </FormField>

                            <FormField label="Warranty / Guarantee Valid Till" error={errors.warranty?.message}>
                                <Input type="date" {...register("warranty")} />
                            </FormField>

                            <FormField label="Issue Experienced" required error={errors.issue?.message}>
                                <Textarea placeholder="Describe the issue in detail" {...register("issue", { required: "Issue is required" })} />
                            </FormField>

                            <FormField label="Summary of the Dispute" required error={errors.summary?.message}>
                                <Textarea
                                    placeholder="Explain what went wrong (max 500 words)"
                                    {...register("summary", { required: "Summary is required", maxLength: 500 })}
                                />
                            </FormField>
                        </div>

                    </SectionCard>

                    {/* === SECTION 5: SUPPORTING DOCUMENTS === */}
                    <SectionCard number="5" title="Supporting Documents">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {
                                consumerDocumentType?.map((doc) =>
                                    <FormField label={doc.value} key={doc.key}>
                                        <FileUploadForm register={register} watch={watch} fieldName={doc.key} />
                                    </FormField>
                                )
                            }
                        </div>
                    </SectionCard>

                    {/* === SECTION 6: STEPS ALREADY TAKEN === */}
                    <SectionCard number="6" title="Steps Already Taken to Resolve">
                        <FormField
                            label="Describe previous communication or complaints made to the company"
                            error={errors.stepsToResolve?.message}
                        >
                            <Textarea placeholder="Mention previous contact, calls, or complaints" {...register("stepsToResolve")} />
                        </FormField>
                    </SectionCard>

                    {/* === SECTION 7: RELIEF SOUGHT === */}
                    <SectionCard number="7" title="Relief / Outcome Sought">
                        <FormField label="Select the relief(s) you seek" required error={errors.reliefSought?.message}>
                            <Controller
                                control={control}
                                name="reliefSought"
                                rules={{ required: "Please select a relief you seek" }}
                                render={({ field }) => (
                                    <Select value={field.value} onValueChange={field.onChange}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Relief You Seek" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {consumerReliefSought.map(v => (
                                                <SelectItem key={v} value={v}>{v}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                        </FormField>

                        {watch("reliefSought") === "Other" && (
                            <FormField label="Issues or Reliefs Sought" className="mt-6">
                                <Textarea placeholder="Describe issues or reliefs sought" {...register("otherRelief")} />
                            </FormField>
                        )}
                    </SectionCard>

                    {/* === SECTION 8: MEDIATION === */}
                    <SectionCard number="8" title="Willingness for Mediation / Conciliation">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField label="Willingness to Mediate">
                                <Controller
                                    name="mediationWillingness"
                                    control={control}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger><SelectValue placeholder="Select option" /></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Yes">Yes</SelectItem>
                                                <SelectItem value="No">No</SelectItem>
                                                <SelectItem value="Unsure">Unsure</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </FormField>
                            <FormField label="Conditions or Preferences">
                                <Input placeholder="Enter conditions or preferences" {...register("mediationConditions")} />
                            </FormField>
                        </div>
                    </SectionCard>

                    {/* === SECTION 9: DECLARATION === */}
                    <SectionCard number="9" title="Declaration">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField label="Full Name" required error={errors?.declarationName?.message}>
                                <Input placeholder="Enter your full name" {...register("declarationName", { required: "Please provide your name" })} />
                            </FormField>
                            <FormField label="Date" required error={errors?.declarationDate?.message}>
                                <Input type="date" {...register("declarationDate", { required: "Please enter declaration date" })} />
                            </FormField>
                        </div>
                    </SectionCard>

                    <ConfidentialityNote />

                    <div className="flex gap-4 justify-end">
                        <Button type="submit" disabled={isSubmitting} className="bg-linear-to-r from-emerald-500 to-teal-500 hover:opacity-90 text-white">
                            {isSubmitting ? "Submitting..." : "Submit Form"}
                        </Button>
                        <Button type="button" variant="outline" onClick={() => reset()}>
                            Reset
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    )
}
