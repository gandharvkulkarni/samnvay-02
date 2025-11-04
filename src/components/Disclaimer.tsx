"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { AlertTriangle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const Disclaimer = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Auto-open disclaimer on first load
    const timer = setTimeout(() => setOpen(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => setOpen(false)

  return (
    <AnimatePresence>
      {open && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-md lg:max-w-xl bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <DialogHeader className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className="bg-amber-100 p-4 rounded-full">
                    <AlertTriangle className="w-8 h-8 text-amber-600" />
                  </div>
                </div>
                <DialogTitle className="text-2xl font-semibold text-gray-900 text-center">
                  Important Disclaimer
                </DialogTitle>
                <DialogDescription className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  <span className="block mb-2">
                    Samnvay is <strong>not a law firm</strong> and does not provide legal advice. 
                    The use of any materials or services offered through this platform 
                    <strong> does not create an attorney-client relationship.</strong>
                  </span>
                  <span className="block">
                    Only a qualified legal practitioner can provide legal advice. 
                    You should consult a licensed lawyer for any legal matter.
                  </span>
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 flex justify-center">
                <Button
                  onClick={handleClose}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  I Understand
                </Button>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  )
}

export default Disclaimer
