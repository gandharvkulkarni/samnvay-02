import { useForm, Controller, useWatch } from "react-hook-form"
import { Home } from "lucide-react"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { addDataToGoogleSheet, getFormData } from "@/lib/utils"
import { RadioGroup } from "@/components/ui/radio-group"
import { FormField } from "./ui/FormField"
import { SectionCard } from "./ui/SectionCard"
import { YesNoField } from "./ui/YesNoField"
import { RadioOption } from "./ui/RadioOption"
import { FamilyDispute } from "@/types/FamilyDisputeForm"
import { familyCaseCategory, familyDocumentType, marriageType } from "@/enums/enums"
import FileUploadForm from "./ui/FileUploadForm"

export default function FamilyDisputeForm() {

    const {
        register,
        handleSubmit,
        control,
        reset,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<FamilyDispute>({
        defaultValues: { declarationAccepted: true },
    })

    const onSubmit = async (data: any) => {
        try {

            const formData = getFormData(data)

            const API_URL = import.meta.env.VITE_API_ENDPOINT;
            const response = await fetch(`${API_URL}/family`, {
                method: "POST",
                body: formData,
            })

            if (!response.ok) {
                const err = await response.json().catch(() => ({}))
                throw new Error(err.message || "Failed to submit dispute form")
            }
            toast.success('Dispute Submitted')
            await addDataToGoogleSheet(data, 'Family')

            console.log("Dispute Submitted:", data)
            reset()
        } catch (error: any) {
            toast.error(error.message)
            console.error(" Submission Error:", error)
        }
    }


    return (
        <section className="relative py-20 px-6 bg-linear-to-br from-[#ECFDF5] via-[#E0F7FA] to-[#EFF6FF]">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <header className="flex items-center gap-3 py-4 px-6 rounded-xl z-10">
                    <div className="p-3 rounded-lg bg-linear-to-br from-emerald-500 to-teal-500 text-white">
                        <Home className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Family Dispute — Intake Form</h2>
                        <p className="text-sm text-gray-600">
                            Kindly provide accurate details to help us assign your case efficiently.
                        </p>
                    </div>
                </header>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">

                    {/* SECTION CARD */}
                    <SectionCard number="1" title="Basic Case Information">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField label="Case Id">
                                <Input
                                    placeholder="Case ID"
                                    {...register("caseId")}
                                />
                            </FormField>

                            <FormField label="Date of Submission">
                                <Input
                                    type="date"
                                    {...register("dateOfSubmission")}
                                />
                            </FormField>

                            <FormField label="Case Category" required error={errors.caseCategory?.message}>
                                <Controller
                                    control={control}
                                    name="caseCategory"
                                    rules={{ required: "Please select a case category" }}
                                    render={({ field }) => (
                                        <Select value={field.value} onValueChange={field.onChange}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Case Category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {familyCaseCategory.map(v => (
                                                    <SelectItem key={v} value={v}>{v}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </FormField>

                            <FormField label="Existing Legal Proceedings" required error={errors.existingLegalProceedings?.message}>
                                <YesNoField
                                    name="existingLegalProceedings"
                                    control={control}
                                    register={register}
                                    detailsName="courtDetails"
                                    detailsPlaceholder="Court / Case No. details"
                                />
                            </FormField>
                        </div>
                    </SectionCard>


                    {/* RELATIONSHIP DETAILS */}
                    <SectionCard number="2" title="Relationship Details">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            {/* Date of Marriage */}
                            <FormField label="Date of Marriage">
                                <Input type="date" id="dateOfMarriage" {...register("dateOfMarriage")} />
                            </FormField>

                            {/* Place of Marriage */}
                            <FormField label="Place of Marriage">
                                <Input id="placeOfMarriage" placeholder="Enter place of marriage" {...register("placeOfMarriage")} />
                            </FormField>

                            {/* Type of Marriage */}
                            <MarriageType control={control} />

                            {/* Duration */}
                            <FormField label="Duration of Marriage (years)">
                                <Input id="durationOfMarriage" placeholder="e.g., 8 years" {...register("durationOfMarriage")} />
                            </FormField>

                            {/* Current Living Arrangement */}
                            <LivingArrangement control={control} register={register} />

                            {/* Previous Reconciliation Attempts */}
                            <ReconciliationField control={control} register={register} />
                        </div>

                        {/* Children Details */}
                        <FormField label="Children Details" className="mt-6">
                            <Textarea
                                id="childrenDetails"
                                placeholder="Enter names, ages, education, and who they live with"
                                {...register("childrenDetails")}
                                className="mt-2"
                            />
                        </FormField>
                    </SectionCard>


                    {/* APPLICANT DETAILS */}
                    <SectionCard number="3" title="Applicant Details">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            {/* Full Name */}
                            <FormField label="Full Name" required error={errors.applicantName?.message}>
                                <Input
                                    id="applicantName"
                                    placeholder="Enter applicant’s full name"
                                    className={errors.respondentName && "border-red-500 focus:ring-red-400"}
                                    {...register("applicantName", { required: "Full name is required" })}
                                />
                            </FormField>

                            {/* Gender */}
                            <FormField label="Gender" required error={errors.applicantGender?.message}>
                                <GenderField control={control} name="applicantGender" />
                            </FormField>

                            {/* Age */}
                            <FormField label="Age" required error={errors.applicantAge?.message}>
                                <Input
                                    id="applicantAge"
                                    placeholder="Enter age"
                                    className={errors.applicantAge && "border-red-500 focus:ring-red-400"}
                                    {...register("applicantAge", {
                                        required: "Age is required",
                                        pattern: { value: /^[0-9]+$/, message: "Age must be a number" },
                                    })}
                                />
                            </FormField>

                            {/* Date of Birth */}
                            <FormField label="Date of Birth" required error={errors.applicantDOB?.message}>
                                <Input
                                    id="applicantDOB"
                                    type="date"
                                    className={errors.applicantDOB && "border-red-500 focus:ring-red-400"}
                                    {...register("applicantDOB", { required: "Date of birth is required" })}
                                />
                            </FormField>

                            {/* Occupation */}
                            <FormField label="Occupation" required error={errors.applicantOccupation?.message}>
                                <Input
                                    id="applicantOccupation"
                                    placeholder="Enter occupation"
                                    className={errors.applicantOccupation && "border-red-500 focus:ring-red-400"}
                                    {...register("applicantOccupation", { required: "Occupation is required" })}
                                />
                            </FormField>

                            {/* Monthly Income */}
                            <FormField label="Monthly Income" required error={errors.applicantMonthlyIncome?.message}>
                                <Input
                                    id="applicantMonthlyIncome"
                                    placeholder="e.g., ₹50,000/month"
                                    className={errors.applicantMonthlyIncome && "border-red-500 focus:ring-red-400"}
                                    {...register("applicantMonthlyIncome", { required: "Monthly income is required" })}
                                />
                            </FormField>

                            {/* Address */}
                            <FormField label="Address" required error={errors.applicantAddress?.message}>
                                <Textarea
                                    id="applicantAddress"
                                    placeholder="Enter complete address"
                                    className={errors.applicantAddress && "border-red-500 focus:ring-red-400"}
                                    {...register("applicantAddress", { required: "Address is required" })}
                                />
                            </FormField>

                            {/* Contact Number */}
                            <FormField label="Contact Number" required error={errors.applicantContact?.message}>
                                <Input
                                    id="applicantContact"
                                    placeholder="e.g., +91 9876543210"
                                    className={errors.applicantContact && "border-red-500 focus:ring-red-400"}
                                    {...register("applicantContact", {
                                        required: "Contact number is required",
                                        pattern: {
                                            value: /^[0-9+\-\s()]{10,15}$/,
                                            message: "Enter a valid phone number",
                                        },
                                    })}
                                />
                            </FormField>

                            {/* Email Address */}
                            <FormField label="Email Address" required error={errors.applicantEmail?.message}>
                                <Input
                                    id="applicantEmail"
                                    type="email"
                                    placeholder="e.g., your@email.com"
                                    className={errors.applicantEmail && "border-red-500 focus:ring-red-400"}
                                    {...register("applicantEmail", {
                                        required: "Email address is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Enter a valid email address",
                                        },
                                    })}
                                />
                            </FormField>

                            {/* ID Proof */}
                            <FormField label="ID Proof (Aadhaar / PAN)" required error={errors.applicantIdProof?.message}>
                                <Input
                                    id="applicantIdProof"
                                    placeholder="Enter Aadhaar or PAN number"
                                    className={errors.applicantIdProof && "border-red-500 focus:ring-red-400"}
                                    {...register("applicantIdProof", { required: "ID proof is required" })}
                                />
                            </FormField>

                            {/* Authorized Representative */}
                            <FormField label="Authorized Representative (if any)" error={errors.applicantRepresentative?.message}>
                                <Input
                                    id="applicantRepresentative"
                                    placeholder="Enter representative name"
                                    {...register("applicantRepresentative")}
                                />
                            </FormField>
                        </div>
                    </SectionCard>

                    {/* Respondent Details */}
                    <SectionCard number="4" title="Respondent Details">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Full Name */}
                            <FormField label="Full Name" required error={errors.respondentName?.message}>
                                <Input
                                    placeholder="Enter respondent's full name"
                                    className={errors.respondentName && "border-red-500 focus:ring-red-400"}
                                    {...register("respondentName", { required: "Full name is required" })}
                                />
                            </FormField>

                            {/* Gender */}
                            <FormField label="Gender" required error={errors.respondentGender?.message}>
                                <GenderField control={control} name="respondentGender" />
                            </FormField>

                            {/* Age */}
                            <FormField label="Age" required error={errors.respondentAge?.message}>
                                <Input
                                    placeholder="Enter age"
                                    className={errors.respondentAge && "border-red-500 focus:ring-red-400"}
                                    {...register("respondentAge", {
                                        required: "Age is required",
                                        pattern: { value: /^[0-9]+$/, message: "Age must be a number" },
                                    })}
                                />
                            </FormField>

                            {/* Date of Birth */}
                            <FormField label="Date of Birth" required error={errors.respondentDOB?.message}>
                                <Input
                                    type="date"
                                    className={errors.respondentDOB && "border-red-500 focus:ring-red-400"}
                                    {...register("respondentDOB", { required: "Date of birth is required" })}
                                />
                            </FormField>

                            {/* Occupation */}
                            <FormField label="Occupation" required error={errors.respondentOccupation?.message}>
                                <Input
                                    placeholder="Enter occupation"
                                    className={errors.respondentOccupation && "border-red-500 focus:ring-red-400"}
                                    {...register("respondentOccupation", { required: "Occupation is required" })}
                                />
                            </FormField>

                            {/* Monthly Income */}
                            <FormField label="Monthly Income" required error={errors.respondentMonthlyIncome?.message}>
                                <Input
                                    placeholder="e.g., ₹50,000/month"
                                    className={errors.respondentMonthlyIncome && "border-red-500 focus:ring-red-400"}
                                    {...register("respondentMonthlyIncome", { required: "Monthly income is required" })}
                                />
                            </FormField>

                            {/* Address */}
                            <FormField label="Address" required error={errors.respondentAddress?.message}>
                                <Textarea
                                    placeholder="Enter complete address"
                                    className={errors.respondentAddress && "border-red-500 focus:ring-red-400"}
                                    {...register("respondentAddress", { required: "Address is required" })}
                                />
                            </FormField>

                            {/* Contact */}
                            <FormField label="Contact Number" required error={errors.respondentContact?.message}>
                                <Input
                                    placeholder="e.g., +91 9876543210"
                                    className={errors.respondentContact && "border-red-500 focus:ring-red-400"}
                                    {...register("respondentContact", {
                                        required: "Contact number is required",
                                        pattern: {
                                            value: /^[0-9+\-\s()]{10,15}$/,
                                            message: "Enter a valid phone number",
                                        },
                                    })}
                                />
                            </FormField>

                            {/* Email */}
                            <FormField label="Email Address" required error={errors.respondentEmail?.message}>
                                <Input
                                    type="email"
                                    placeholder="e.g., your@email.com"
                                    className={errors.respondentEmail && "border-red-500 focus:ring-red-400"}
                                    {...register("respondentEmail", {
                                        required: "Email address is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Enter a valid email address",
                                        },
                                    })}
                                />
                            </FormField>

                            {/* ID Proof */}
                            <FormField label="ID Proof (Aadhaar / PAN)" required error={errors.respondentIdProof?.message}>
                                <Input
                                    placeholder="Enter Aadhaar or PAN number"
                                    className={errors.respondentIdProof && "border-red-500 focus:ring-red-400"}
                                    {...register("respondentIdProof", { required: "ID proof is required" })}
                                />
                            </FormField>

                            {/* Authorized Representative */}
                            <FormField label="Authorized Representative (if any)" error={errors.respondentRepresentative?.message}>
                                <Input
                                    placeholder="Enter representative name"
                                    {...register("respondentRepresentative")}
                                />
                            </FormField>
                        </div>
                    </SectionCard>

                    {/* FINANCIAL INFO */}
                    <SectionCard number="5" title="Financial Information">
                        <div className="space-y-5">
                            {/* Jointly Owned Property */}

                            <FormField label="Jointly Owned Property">
                                <YesNoField
                                    name="jointlyOwnedProperty"
                                    control={control}
                                    register={register}
                                    detailsName="propertyDetails"
                                    detailsPlaceholder="Describe the details of jointly owned property"
                                />
                            </FormField>

                            {/* Individual Property Details */}
                            <FormField label="Individual Property Details">
                                <Textarea
                                    id="individualPropertyDetails"
                                    placeholder="Provide details about properties individually owned by either party"
                                    {...register("individualPropertyDetails")}
                                />
                            </FormField>

                            {/* Existing Loans / Liabilities */}
                            <FormField label="Existing Loans / Liabilities">
                                <Textarea
                                    id="existingLoans"
                                    placeholder="Mention existing loans, EMIs, or financial obligations"
                                    {...register("existingLoans")}
                                />
                            </FormField>

                            {/* Dependents */}
                            <FormField label="Dependents (Children / Parents)">
                                <Input
                                    id="dependents"
                                    placeholder="List dependents with relation, e.g., 2 children, 1 dependent parent"
                                    {...register("dependents")}
                                />
                            </FormField>
                        </div>
                    </SectionCard>

                    {/* ISSUES / RELIEFS */}
                    <SectionCard number="6" title="Issues / Reliefs Sought">
                        <FormField label="Issues or Reliefs Sought">
                            <Textarea placeholder="Describe issues or reliefs sought" {...register("otherRelief")} />
                        </FormField>
                    </SectionCard>

                    {/* RESPONDENT’S PRELIMINARY RESPONSE */}
                    <SectionCard number="7" title="Respondent’s Response">
                        <FormField label="Summary of Respondent’s version">
                            <Textarea {...register("respondentVersion")} />
                        </FormField>
                        <FormField label="Legal Representation Details" className="mt-6">
                            <Input {...register("respondentLegalRepresentation")} />
                        </FormField>
                    </SectionCard>

                    {/* Legal Proceedings */}
                    <SectionCard number="8" title="Existing Legal Proceedings">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField label="Type of Case">
                                <Controller
                                    control={control}
                                    name="typeOfCase"
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger><SelectValue placeholder="Select case type" /></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Divorce">Divorce</SelectItem>
                                                <SelectItem value="Maintenance">Maintenance</SelectItem>
                                                <SelectItem value="Custody">Custody</SelectItem>
                                                <SelectItem value="Domestic Violence">Domestic Violence</SelectItem>
                                                <SelectItem value="Other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </FormField>
                            <FormField label="Case Number"><Input placeholder="Enter case number" {...register("caseNumber")} /></FormField>
                            <FormField label="Court Name"><Input placeholder="Enter court name" {...register("courtName")} /></FormField>
                            <FormField label="Current Status"><Input placeholder="Enter current status" {...register("currentStatus")} /></FormField>
                            <FormField label="Previous Mediation Attempts"><Input placeholder="Enter previous mediation attempts" {...register("previousMediation")} /></FormField>
                        </div>
                    </SectionCard>

                    {/* Documents */}
                    <SectionCard number="9" title="Supporting Documents">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {
                                familyDocumentType?.map((doc) =>
                                    <FormField label={doc.value} key={doc.key}>
                                        <FileUploadForm register={register} watch={watch} fieldName={doc.key} />
                                    </FormField>
                                )
                            }
                        </div>
                    </SectionCard>

                    {/* Mediation Willingness */}
                    <SectionCard number="10" title="Mediation Willingness">
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

                    {/* DECLARATION */}
                    <SectionCard number="11" title="Declaration">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField label="Full Name" required error={errors?.declarationName?.message}>
                                <Input placeholder="Enter your full name" {...register("declarationName", {required: "Please provide your name"})} />
                            </FormField>
                            <FormField label="Date" required error={errors?.declarationDate?.message}>
                                <Input type="date" {...register("declarationDate", {required:"Please enter declaration date"})} />
                            </FormField>
                        </div>
                    </SectionCard>

                    {/* Submit Buttons */}
                    <div className="flex gap-4 justify-end">
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-linear-to-r from-emerald-500 to-teal-500 hover:opacity-90 text-white"
                        >
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

/* ----------------- Sub Components ------------------ */

function GenderField({ control, name }: any) {
    return (
        <div className="flex flex-col gap-2">
            <Controller
                name={name}
                control={control}
                rules={{ required: "Gender selection is required" }}
                render={({ field }) => (
                    <RadioGroup onValueChange={field.onChange} value={field.value} className="flex gap-4">
                        <RadioOption value="Male" label="Male" id={`${name}-male`} />
                        <RadioOption value="Female" label="Female" id={`${name}-female`} />
                        <RadioOption value="Other" label="Other" id={`${name}-other`} />
                    </RadioGroup>
                )}
            />
        </div>
    )
}

function MarriageType({ control }: any) {
    return (
        <div className="flex flex-col gap-2">
            <Label className="font-semibold">Type of Marriage</Label>
            <Controller
                name="typeOfMarriage"
                control={control}
                render={({ field }) => (
                    <RadioGroup onValueChange={field.onChange} value={field.value} className="grid grid-cols-2 gap-3">
                        {marriageType.map(type => (
                            <RadioOption key={type} value={type} label={type} id={`marriage-${type}`} />
                        ))}
                    </RadioGroup>
                )}
            />
        </div>
    )
}

function LivingArrangement({ control, register }: any) {
    const living = useWatch({ control, name: "currentLivingArrangement" })
    return (
        <div className="flex flex-col gap-2">
            <Label className="font-semibold">Current Living Arrangement</Label>
            <Controller
                name="currentLivingArrangement"
                control={control}
                render={({ field }) => (
                    <RadioGroup onValueChange={field.onChange} value={field.value} className="flex gap-4">
                        <RadioOption value="Together" label="Together" id="living-together" />
                        <RadioOption value="Separated" label="Separated" id="living-separated" />
                    </RadioGroup>
                )}
            />
            {living === "Separated" && (
                <Input
                    placeholder="Enter month/year or date of separation"
                    {...register("separatedSince")}
                    className="mt-2"
                />
            )}
        </div>
    )
}

function ReconciliationField({ control, register }: any) {
    const recon = useWatch({ control, name: "reconciliationAttempts" })
    return (
        <div className="flex flex-col gap-2">
            <Label className="font-semibold">Previous Reconciliation Attempts</Label>
            <Controller
                name="reconciliationAttempts"
                control={control}
                render={({ field }) => (
                    <RadioGroup onValueChange={field.onChange} value={field.value} className="flex gap-4">
                        <RadioOption value="Yes" label="Yes" id="reconciliation-yes" />
                        <RadioOption value="No" label="No" id="reconciliation-no" />
                    </RadioGroup>
                )}
            />
            {recon === "Yes" && (
                <Input
                    placeholder="Please provide reconciliation details"
                    {...register("reconciliationDetails")}
                    className="mt-2"
                />
            )}
        </div>
    )
}