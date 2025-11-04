import { Controller, useForm } from "react-hook-form"
import { Calendar, Phone, FileText, AlertCircle, Mail, User } from "lucide-react"
import { useState } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner"

type FormData = {
    name: string
    email: string
    phone: string
    disputeType: string
    disputeDetails: string
}

export default function BookConsultation() {
    const [submitted, setSubmitted] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors, isSubmitting },
    } = useForm<FormData>()

    const disputeTypes = [
        "Business Disputes",
        "Commercial Contracts",
        "Intellectual Property",
        "Employment Disputes",
        "Consumer Issues",
        "Landlord-Tenant",
        "Insurance Claims",
        "Partnership Disputes",
        "Other",
    ]

    const onSubmit = async (data: FormData) => {
        try {
            await fetch("https://script.google.com/macros/s/AKfycbzIiwAF2gEae5XoDz0mw1zBitbsoYIynH7pNYouVpRYVymkh6YM1tRcKM5iYe4UYmvT/exec", {
                method: "POST",
                mode: "no-cors", // Apps Script doesn't need CORS headers
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            toast.success(" Consultation request submitted successfully!")
            setSubmitted(true)
            reset()

        } catch (error) {
            toast.error("There was an error submitting your request. Please try again.")
        }
    }


    return (
        <section
            id="book-consultation"
            className="relative py-24 px-6 bg-gradient-to-br from-[#ECFDF5] via-[#E0F7FA] to-[#EFF6FF]"
        >
            <div className="max-w-4xl mx-auto space-y-12 relative z-10">
                <div className="text-center space-y-4">
                    <div className="flex justify-center mb-4">
                        <Calendar className="w-10 h-10 text-[#00BBA1]" />
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Book Your Consultation</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Share your details, and we’ll connect you with the right dispute resolution expert.
                    </p>
                </div>

                {submitted && (
                    <div className="p-6 bg-[#00BBA1]/10 border border-[#00BBA1] rounded-lg text-center space-y-2 animate-fade-in">
                        <p className="text-gray-900 font-semibold">Consultation request received!</p>
                        <p className="text-gray-600">
                            We’ll review your case and reach out within 24 hours to discuss next steps.
                        </p>
                    </div>
                )}

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-8 bg-white/80 backdrop-blur-lg p-10 rounded-2xl border border-gray-100"
                >
                    {/* Full Name */}
                    <div>
                        <label className="flex items-center text-sm font-semibold text-gray-800 mb-2">
                            <User className="w-4 h-4 mr-2 text-[#00BBA1]" /> Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            {...register("name", { required: "Full name is required" })}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00BBA1]/50 transition"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="flex items-center text-sm font-semibold text-gray-800 mb-2">
                            <Mail className="w-4 h-4 mr-2 text-[#00BBA1]" /> Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Enter a valid email address",
                                },
                            })}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00BBA1]/50 transition"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="flex items-center text-sm font-semibold text-gray-800 mb-2">
                            <Phone className="w-4 h-4 mr-2 text-[#00BBA1]" /> Phone Number
                        </label>
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            {...register("phone", {
                                required: "Phone number is required",
                                pattern: {
                                    value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/,
                                    message: "Enter a valid phone number",
                                },
                            })}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00BBA1]/50 transition"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                    </div>

                    {/* Dispute Type */}
                    <div>
                        <label className="flex items-center text-sm font-semibold text-gray-800 mb-2">
                            <AlertCircle className="w-4 h-4 mr-2 text-[#00BBA1]" /> Type of Dispute
                        </label>

                        <Controller
                            name="disputeType"
                            control={control}
                            rules={{ required: "Please select a dispute type" }}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger className="w-full shadow-none h-14 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00BBA1]/50 transition text-left">
                                        <SelectValue placeholder="Select Type" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white border border-gray-200 shadow-lg">
                                        {disputeTypes.map((type) => (
                                            <SelectItem key={type} value={type}>
                                                {type}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            )}
                        />

                        {errors.disputeType && (
                            <p className="text-red-500 text-sm mt-1">{errors.disputeType.message}</p>
                        )}
                    </div>

                    {/* Dispute Details */}
                    <div>
                        <label className="flex items-center text-sm font-semibold text-gray-800 mb-2">
                            <FileText className="w-4 h-4 mr-2 text-[#00BBA1]" /> Dispute Details
                        </label>
                        <textarea
                            rows={5}
                            placeholder="Please describe your dispute briefly..."
                            {...register("disputeDetails", { required: "Please provide dispute details" })}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00BBA1]/50 resize-none transition"
                        />
                        {errors.disputeDetails && <p className="text-red-500 text-sm mt-1">{errors.disputeDetails.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-lg font-semibold rounded-lg hover:opacity-90 transition disabled:opacity-50"
                    >
                        {isSubmitting ? "Submitting..." : "Book Consultation"}
                    </button>
                </form>
            </div>
        </section>
    )
}
