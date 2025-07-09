"use client"

import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, AlertTriangle, Upload, FileText, Clock } from "lucide-react"

export function KycStatus() {
  const kycData = {
    status: "Verified", // Can be 'Verified', 'Pending', 'Rejected', 'Action Required'
    lastChecked: "2023-10-26",
    documents: [
      { name: "Passport_ID.pdf", status: "Approved", icon: FileText },
      { name: "Proof_of_Address.pdf", status: "Approved", icon: FileText },
    ],
  }

  const getStatusInfo = () => {
    switch (kycData.status) {
      case "Verified":
        return {
          icon: CheckCircle,
          color: "text-green-500",
          bgColor: "bg-green-500/10",
          title: "KYC/AML Verified",
          description: "Your identity has been successfully verified. No further action is required.",
        }
      case "Pending":
        return {
          icon: Clock,
          color: "text-yellow-500",
          bgColor: "bg-yellow-500/10",
          title: "Verification Pending",
          description: "Your documents are under review. This usually takes 1-2 business days.",
        }
      case "Action Required":
        return {
          icon: AlertTriangle,
          color: "text-orange-500",
          bgColor: "bg-orange-500/10",
          title: "Action Required",
          description: "We need additional information to complete your verification. Please review the notes below.",
        }
      default:
        return {
          icon: AlertTriangle,
          color: "text-red-500",
          bgColor: "bg-red-500/10",
          title: "Verification Failed",
          description: "We were unable to verify your identity with the provided documents.",
        }
    }
  }

  const statusInfo = getStatusInfo()

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Current Status</CardTitle>
          <CardDescription>
            Your current Know Your Customer & Anti-Money Laundering verification status.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className={statusInfo.bgColor}>
            <statusInfo.icon className={`h-5 w-5 ${statusInfo.color}`} />
            <AlertTitle className="font-semibold">{statusInfo.title}</AlertTitle>
            <AlertDescription>{statusInfo.description}</AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Submitted Documents</CardTitle>
          <CardDescription>Documents you have provided for verification.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {kycData.documents.map((doc, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <doc.icon className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">{doc.name}</span>
              </div>
              <Badge
                variant={doc.status === "Approved" ? "default" : "destructive"}
                className="bg-green-500/20 text-green-700 dark:bg-green-500/30 dark:text-green-400 border-none"
              >
                {doc.status}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upload New Documents</CardTitle>
          <CardDescription>If requested by our team, you can upload additional documents here.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center w-full p-8 border-2 border-dashed rounded-lg">
            <Upload className="w-10 h-10 text-muted-foreground" />
            <p className="mt-4 text-sm text-muted-foreground">Drag & drop files here, or click to browse</p>
            <Button variant="outline" className="mt-4 bg-transparent">
              Select Files
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
