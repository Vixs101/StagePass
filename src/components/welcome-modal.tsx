import { useEffect } from "react"
import { Button } from "../components/ui/button"
import { useNavigate } from "react-router-dom"

interface WelcomeModalProps {
    isOpen: boolean
    onClose: () => void
    username: string
}

export default function WelcomeModal({ isOpen, onClose, username }: WelcomeModalProps) {
    const navigate = useNavigate()
    useEffect(() => {

        // Close modal when ESC key is pressed
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose()
            }
        }

        window.addEventListener("keydown", handleEsc)

        return () => {
            window.removeEventListener("keydown", handleEsc)
        }
    }, [onClose])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="bg-gray-800 p-4 text-white">
                    <h2 className="text-lg font-medium">Hello</h2>
                </div>

                <div className="p-6">
                    <p className="text-gray-700">Welcome, {username}!</p>
                </div>

                <div className="border-t p-4">
                    <Button
                        onClick={() => {
                            onClose()
                            navigate("/")
                        }}
                        className="w-full bg-gray-800 hover:bg-gray-700"
                    >
                        Close
                    </Button>
                </div>
            </div>
        </div>
    )
}

