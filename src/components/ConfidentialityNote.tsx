import { Lock } from "lucide-react"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

const ConfidentialityNote = () => {
    return (
        <Alert variant="info">
            <Lock />
            <AlertTitle>Confidentiality Note</AlertTitle>
            <AlertDescription>
                <p>This document is confidential and intended solely for the use of the
                    mediator and the ODR platform. It should not be shared publicly or used
                    as evidence in any other legal proceeding without consent.</p>
            </AlertDescription>
        </Alert>
    )
}

export default ConfidentialityNote