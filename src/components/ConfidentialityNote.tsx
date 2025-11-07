import { Lock } from "lucide-react"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

const ConfidentialityNote = () => {
    return (
        // <Alert variant="info">
        //     <Lock />
        //     <AlertTitle>Confidentiality Note</AlertTitle>
        //     <AlertDescription>
        //         <p>This document is confidential and intended solely for the use of the
        //             mediator and the ODR platform. It should not be shared publicly or used
        //             as evidence in any other legal proceeding without consent.</p>
        //     </AlertDescription>
        // </Alert>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-600 border-l-4 border-red-400">
            <p className="font-semibold mb-2 flex gap-2 items-center"><Lock className="text-red-400"/>Confidentiality Note</p>
            <p>
              This document is confidential and intended solely for the use of the mediator and the ODR platform. It
              should not be shared publicly or used as evidence in any other legal proceeding without consent.
            </p>
          </div>
    )
}

export default ConfidentialityNote