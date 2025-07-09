"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Calendar, FileText, X, CheckCircle, Eye, Download, Upload, AlertTriangle, Clock } from "lucide-react"

interface KYCDetailsModalProps {
  application: any
  isOpen: boolean
  onClose: () => void
}

export function KYCDetailsModal({ application, isOpen, onClose }: KYCDetailsModalProps) {
  if (!application) return null

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "bg-emerald-600 text-white"
      case "pending":
        return "bg-yellow-600 text-white"
      case "rejected":
        return "bg-red-600 text-white"
      case "under_review":
        return "bg-blue-600 text-white"
      default:
        return "bg-neutral-600 text-white"
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk?.toLowerCase()) {
      case "low":
        return "border-emerald-400 text-emerald-400"
      case "medium":
        return "border-yellow-400 text-yellow-400"
      case "high":
        return "border-red-400 text-red-400"
      default:
        return "border-neutral-400 text-neutral-400"
    }
  }

  const documents = [
    { name: "Business License", status: "Verified", uploadDate: "2024-01-10", type: "PDF" },
    { name: "Tax Certificate", status: "Verified", uploadDate: "2024-01-10", type: "PDF" },
    { name: "Bank Statement", status: "Pending Review", uploadDate: "2024-01-12", type: "PDF" },
    { name: "Director ID Copy", status: "Verified", uploadDate: "2024-01-09", type: "JPG" },
    { name: "Proof of Address", status: "Verified", uploadDate: "2024-01-11", type: "PDF" },
    { name: "Company Registration", status: "Verified", uploadDate: "2024-01-08", type: "PDF" },
    { name: "Financial Statements", status: "Under Review", uploadDate: "2024-01-13", type: "PDF" },
    { name: "Beneficial Ownership", status: "Verified", uploadDate: "2024-01-09", type: "PDF" },
  ]

  const reviewHistory = [
    {
      date: "2024-01-15 14:30 UTC",
      reviewer: "COMPLIANCE TEAM A",
      action: "DOCUMENTS_VERIFIED",
      note: "All required documents have been submitted and verified. Business license and tax certificates are valid.",
      status: "approved",
    },
    {
      date: "2024-01-12 09:15 UTC",
      reviewer: "COMPLIANCE TEAM A",
      action: "ADDITIONAL_DOCS_REQUESTED",
      note: "Bank statement requires additional verification. Requested updated document from applicant.",
      status: "pending",
    },
    {
      date: "2024-01-10 16:45 UTC",
      reviewer: "SYSTEM",
      action: "APPLICATION_SUBMITTED",
      note: "Initial application submitted with 8 documents for review.",
      status: "info",
    },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl bg-neutral-900 border-neutral-700 text-white max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between pb-4 border-b border-neutral-700">
          <div>
            <DialogTitle className="text-2xl font-mono tracking-wider text-white uppercase">
              {application.id}
            </DialogTitle>
            <p className="text-neutral-400 font-mono text-sm mt-1">{application.type} COMPLIANCE APPLICATION</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-neutral-400 hover:text-white">
            
          </Button>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Application Profile Section */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-neutral-800 border border-neutral-700 p-4 rounded">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage
                    src="/placeholder.svg?height=64&width=64"
                    alt={application.applicant || application.name}
                  />
                  <AvatarFallback className="bg-emerald-600 text-white font-mono text-lg">
                    {(application.applicant || application.name)
                      ?.split(" ")
                      .map((n: string) => n[0])
                      .join("") || "A"}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold font-mono text-white">
                    {application.applicant || application.name}
                  </h3>
                  <p className="text-neutral-400 font-mono text-sm">{application.type} APPLICATION</p>
                  <div className="flex gap-2 mt-2">
                    <Badge className={`font-mono text-xs ${getStatusColor(application.status)}`}>
                      {application.status === "UNDER_REVIEW" ? "UNDER REVIEW" : application.status}
                    </Badge>
                    <Badge variant="outline" className={`font-mono text-xs ${getRiskColor(application.riskLevel)}`}>
                      {application.riskLevel} RISK
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm font-mono">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-neutral-400" />
                  <span className="text-neutral-400">APPLICATION ID:</span>
                  <span className="text-white">{application.id}</span>
                </div>

                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-neutral-400" />
                  <span className="text-neutral-400">TYPE:</span>
                  <span className="text-white">{application.type}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-neutral-400" />
                  <span className="text-neutral-400">SUBMITTED:</span>
                  <span className="text-white">{application.submittedDate}</span>
                </div>

                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-neutral-400" />
                  <span className="text-neutral-400">REVIEWED BY:</span>
                  <span className="text-white">{application.reviewedBy}</span>
                </div>

                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-neutral-400" />
                  <span className="text-neutral-400">DOCUMENTS:</span>
                  <span className="text-white">{application.documents}</span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-neutral-400" />
                  <span className="text-neutral-400">COMPLETION:</span>
                  <span className="text-white">{application.completionRate}</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-neutral-800 border border-neutral-700 p-4 rounded">
              <h4 className="text-lg font-bold text-white font-mono mb-3 uppercase tracking-wider">
                CONTACT INFORMATION
              </h4>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex justify-between">
                  <span className="text-neutral-400">EMAIL:</span>
                  <span className="text-white">
                    {application.type === "KYB"
                      ? "admin@" + application.applicant?.toLowerCase().replace(/\s+/g, "") + ".com"
                      : application.applicant?.toLowerCase().replace(/\s+/g, ".") + "@email.com"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">PHONE:</span>
                  <span className="text-white">+1 (555) 123-4567</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">LOCATION:</span>
                  <span className="text-white">New York, USA</span>
                </div>
                {application.type === "KYB" && (
                  <div className="flex justify-between">
                    <span className="text-neutral-400">INDUSTRY:</span>
                    <span className="text-white">Mining & Metals</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Details and Documents */}
          <div className="lg:col-span-2 space-y-4">
            {/* Application Status */}
            <div className="bg-neutral-800 border border-neutral-700 p-4 rounded">
              <h4 className="text-lg font-bold text-white font-mono mb-3 uppercase tracking-wider">
                APPLICATION STATUS
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 font-mono text-sm">CURRENT STATUS:</span>
                  <Badge className={`font-mono text-xs ${getStatusColor(application.status)}`}>
                    {application.status === "UNDER_REVIEW" ? "UNDER REVIEW" : application.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 font-mono text-sm">RISK LEVEL:</span>
                  <Badge variant="outline" className={`font-mono text-xs ${getRiskColor(application.riskLevel)}`}>
                    {application.riskLevel} RISK
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 font-mono text-sm">COMPLETION:</span>
                  <span className="text-white font-mono text-sm">{application.completionRate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 font-mono text-sm">DOCUMENTS:</span>
                  <span className="text-white font-mono text-sm">{application.documents} FILES</span>
                </div>
              </div>
            </div>

            {/* Document List */}
            <div className="bg-neutral-800 border border-neutral-700 p-4 rounded">
              <h4 className="text-lg font-bold text-white font-mono mb-3 uppercase tracking-wider">
                SUBMITTED DOCUMENTS
              </h4>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {documents.slice(0, application.documents).map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-neutral-700 rounded border border-neutral-600"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-neutral-400" />
                      <div>
                        <span className="text-white font-mono text-sm">{doc.name}</span>
                        <p className="text-neutral-400 font-mono text-xs">
                          {doc.type} • Uploaded: {doc.uploadDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        className={`font-mono text-xs ${
                          doc.status === "Verified"
                            ? "bg-emerald-600 text-white"
                            : doc.status === "Under Review"
                              ? "bg-blue-600 text-white"
                              : "bg-yellow-600 text-white"
                        }`}
                      >
                        {doc.status}
                      </Badge>
                      <Button size="sm" variant="ghost" className="text-neutral-400 hover:text-white p-1">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-neutral-400 hover:text-white p-1">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Review History */}
            <div className="bg-neutral-800 border border-neutral-700 p-4 rounded">
              <h4 className="text-lg font-bold text-white font-mono mb-3 uppercase tracking-wider">REVIEW HISTORY</h4>
              <div className="space-y-3 max-h-48 overflow-y-auto">
                {reviewHistory.map((review, index) => (
                  <div key={index} className="p-3 bg-neutral-700 rounded border border-neutral-600">
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          review.status === "approved"
                            ? "bg-emerald-500"
                            : review.status === "pending"
                              ? "bg-yellow-500"
                              : "bg-blue-500"
                        }`}
                      ></div>
                      <span className="text-neutral-400 font-mono text-xs">{review.date}</span>
                      <span className="text-neutral-400 font-mono text-xs">- {review.reviewer}</span>
                      {review.action === "DOCUMENTS_VERIFIED" && <CheckCircle className="w-3 h-3 text-emerald-400" />}
                      {review.action === "ADDITIONAL_DOCS_REQUESTED" && (
                        <AlertTriangle className="w-3 h-3 text-yellow-400" />
                      )}
                      {review.action === "APPLICATION_SUBMITTED" && <Clock className="w-3 h-3 text-blue-400" />}
                    </div>
                    <p className="text-white font-mono text-sm">{review.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance Checklist */}
            <div className="bg-neutral-800 border border-neutral-700 p-4 rounded">
              <h4 className="text-lg font-bold text-white font-mono mb-3 uppercase tracking-wider">
                COMPLIANCE CHECKLIST
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-white font-mono text-sm">Identity Verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-white font-mono text-sm">Address Verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-white font-mono text-sm">Business Registration</span>
                </div>
                <div className="flex items-center gap-2">
                  {application.status === "PENDING" ? (
                    <Clock className="w-4 h-4 text-yellow-400" />
                  ) : (
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  )}
                  <span className="text-white font-mono text-sm">Financial Verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-white font-mono text-sm">AML Screening</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-white font-mono text-sm">Sanctions Check</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-neutral-700">
          <Button
            variant="outline"
            className="border-neutral-600 text-neutral-400 hover:text-white hover:border-neutral-500 bg-transparent font-mono"
          >
            <Upload className="w-4 h-4 mr-2" />
            REQUEST DOCUMENTS
          </Button>
          <Button
            variant="outline"
            className="border-neutral-600 text-neutral-400 hover:text-white hover:border-neutral-500 bg-transparent font-mono"
          >
            <Eye className="w-4 h-4 mr-2" />
            VIEW ALL DOCUMENTS
          </Button>
          <Button
            variant="outline"
            className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white bg-transparent font-mono"
          >
            REJECT
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-mono">
            <CheckCircle className="w-4 h-4 mr-2" />
            APPROVE
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
