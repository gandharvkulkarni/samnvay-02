import { useForm, Controller } from "react-hook-form"
import { Briefcase } from "lucide-react"

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
import { EmploymentDispute } from "@/types/EmploymentDisputeForm"
import { FormField } from "./ui/FormField"
import { SectionCard } from "./ui/SectionCard"
import { employmentDisputeType, employmentDocumentType, employmentReliefSought } from "@/enums/enums"
import FileUploadForm from "./ui/FileUploadForm"

export default function EmploymentDisputeForm() {
    const { register, handleSubmit, control, reset, watch, formState: { errors, isSubmitting } } = useForm<EmploymentDispute>()

    const onSubmit = async (data: EmploymentDispute) => {
        try {
            const formData = getFormData(data)
            const API_URL = import.meta.env.VITE_API_ENDPOINT;
            const response = await fetch(`${API_URL}/employment`, {
                method: "POST",
                body: formData,
            })

            if (!response.ok) {
                const err = await response.json().catch(() => ({}))
                throw new Error(err.message || "Failed to submit dispute form")
            }
            toast.success('Dispute Submitted')
            await addDataToGoogleSheet(data, 'Employment')

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
                        <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Employment Dispute Form</h2>
                        <p className="text-sm text-gray-600">Collect details for workplace disputes, harassment, termination, etc.</p>
                    </div>
                </header>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <SectionCard number="1" title="Case Information">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <FormField label="Case ID / Reference No.">
                                <Input placeholder="Enter case ID" {...register("caseId")} />
                            </FormField>

                            <FormField label="Date of Submission">
                                <Input type="date" {...register("submissionDate")} />
                            </FormField>

                            <FormField label="Name of Disputing Party (Complainant / Employee or Employer)" required>
                                <Input placeholder="Enter your full name" {...register("complainantName")} />
                            </FormField>

                            <FormField label="Name of Opposite Party" required>
                                <Input placeholder="Enter opposite party name" {...register("oppositeName")} />
                            </FormField>

                            <FormField label="Representative (if any)">
                                <Input placeholder="Enter representative name" {...register("representative")} />
                            </FormField>

                            <FormField label="Contact Email" required>
                                <Input type="email" placeholder="your.email@example.com" {...register("contactEmail")} />
                            </FormField>

                            <FormField label="Contact Phone" required>
                                <Input type="tel" placeholder="+91 XXXXX XXXXX" {...register("contactPhone")} />
                            </FormField>
                        </div>
                    </SectionCard>

                    <SectionCard number="2" title="Nature of Dispute">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

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
                                                {employmentDisputeType.map(v => (
                                                    <SelectItem key={v} value={v}>{v}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </FormField>
                            <FormField label="Other Dispute (if any)">
                                <Input placeholder="Please specify" {...register("otherDispute")} />
                            </FormField>

                            <FormField label="Are there ongoing legal proceedings?" required>
                                <Controller
                                    name="legalProceedings"
                                    control={control}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select option" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Yes">Yes</SelectItem>
                                                <SelectItem value="No">No</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </FormField>

                            {watch("legalProceedings") === "Yes" && (
                                <FormField label="Case No. / Court / Tribunal details">
                                    <Input placeholder="Enter details" {...register("legalCaseDetails")} />
                                </FormField>
                            )}
                        </div>
                    </SectionCard>

                    <SectionCard number="3" title="Employment Details">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <FormField label="Designation / Role" required>
                                <Input placeholder="Enter job title" {...register("designation")} />
                            </FormField>

                            <FormField label="Department / Team" required>
                                <Input placeholder="Enter department name" {...register("department")} />
                            </FormField>

                            <FormField label="Date of Joining" required>
                                <Input type="date" {...register("joinDate")} />
                            </FormField>

                            <FormField label="Date of Termination / Resignation (if applicable)">
                                <Input type="date" {...register("terminationDate")} />
                            </FormField>

                            <FormField label="Employment Type" required>
                                <Controller
                                    name="employmentType"
                                    control={control}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select employment type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Permanent">Permanent</SelectItem>
                                                <SelectItem value="Contractual">Contractual</SelectItem>
                                                <SelectItem value="Probation">Probation</SelectItem>
                                                <SelectItem value="Freelance">Freelance</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </FormField>

                            <FormField label="Location / Branch" required>
                                <Input placeholder="Enter work location" {...register("location")} />
                            </FormField>
                        </div>
                    </SectionCard>

                    <SectionCard number="4" title="Dispute Summary">
                        <FormField label="Brief Summary of the Dispute (max 500 words)" required error={errors.disputeSummary?.message} >
                            <Textarea
                                placeholder="Describe the background and facts..."
                                {...register("disputeSummary", { required: "Please write dispute summary" })}
                                rows={6}
                            />
                        </FormField>
                    </SectionCard>

                    <SectionCard number="5" title="Supporting Documents">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {
                                employmentDocumentType?.map((doc) =>
                                    <FormField label={doc.value} key={doc.key}>
                                        <FileUploadForm register={register} watch={watch} fieldName={doc.key} />
                                    </FormField>
                                )
                            }
                        </div>
                    </SectionCard>

                    <SectionCard number="6" title="Steps Taken to Resolve">
                        <FormField label="Steps Taken to Resolve the Dispute" required>
                            <Textarea
                                placeholder="Mention discussions or legal notices exchanged..."
                                {...register("stepsResolved")}
                            />
                        </FormField>
                    </SectionCard>

                    <SectionCard number="7" title="Relief / Outcome Sought">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                                                {employmentReliefSought.map(v => (
                                                    <SelectItem key={v} value={v}>{v}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </FormField>

                            <FormField label="Other Relief (if any)">
                                <Input placeholder="Please specify" {...register("otherRelief")} />
                            </FormField>
                        </div>
                    </SectionCard>

                    <SectionCard number="8" title="Willingness for Mediation / Conciliation">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField label="Are you willing to participate in good faith?" required>
                                <Controller
                                    name="mediationWillingness"
                                    control={control}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select option" />
                                            </SelectTrigger>
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
                                <Input
                                    placeholder="E.g., online session, language preference..."
                                    {...register("mediationConditions")}
                                />
                            </FormField>
                        </div>
                    </SectionCard>

                    <SectionCard number="9" title="Declaration">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField label="Full Name" required error={errors?.declarationName?.message}>
                                <Input placeholder="Enter your full name" {...register("declarationName", {required: "Please provide your name"})} />
                            </FormField>
                            <FormField label="Date" required error={errors?.declarationDate?.message}>
                                <Input type="date" {...register("declarationDate", {required:"Please enter declaration date"})} />
                            </FormField>
                        </div>
                    </SectionCard>

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
