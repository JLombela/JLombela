"use client"

import { useState } from "react"
import { Search, Eye, FileText, Download, Clock, AlertTriangle, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function DocumentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDocument, setSelectedDocument] = useState<any>(null)

  const documents = [
    {
      id: "DOC-2025-001",
      name: "Mining License - Golden Mining Co.",
      docId: "DOC-2025-001",
      type: "License",
      format: "PDF",
      status: "ACTIVE",
      owner: "Golden Mining Co.",
      uploaded: "2025-06-15",
      expires: "2025-12-15",
      size: "2.4 MB",
      tags: ["mining", "license", "compliance"],
      statusColor: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      id: "DOC-2025-002",
      name: "Bank Statement - Swiss Refinery AG",
      docId: "DOC-2025-002",
      type: "Financial",
      format: "PDF",
      status: "EXPIRING SOON",
      owner: "Swiss Refinery AG",
      uploaded: "2025-06-14",
      expires: "2025-07-14",
      size: "1.8 MB",
      tags: ["financial", "bank", "verification"],
      statusColor: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      daysLeft: "7 days left",
    },
    {
      id: "DOC-2025-003",
      name: "Insurance Certificate - Dubai Gold Exchange",
      docId: "DOC-2025-003",
      type: "Insurance",
      format: "PDF",
      status: "EXPIRED",
      owner: "Dubai Gold Exchange",
      uploaded: "2025-05-10",
      expires: "2025-06-10",
      size: "1.2 MB",
      tags: ["insurance", "certificate", "expired"],
      statusColor: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      id: "DOC-2025-004",
      name: "KYC Documentation - London Precious Metals",
      docId: "DOC-2025-004",
      type: "Compliance",
      format: "PDF",
      status: "PENDING REVIEW",
      owner: "London Precious Metals",
      uploaded: "2025-06-16",
      expires: "2025-12-16",
      size: "3.1 MB",
      tags: ["kyc", "compliance", "review"],
      statusColor: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
  ]

  const stats = [
    { label: "TOTAL DOCUMENTS", value: "1,247", icon: FileText, color: "text-emerald-500" },
    { label: "EXPIRING SOON", value: "23", icon: Clock, color: "text-yellow-500" },
    { label: "EXPIRED", value: "8", icon: AlertTriangle, color: "text-red-500" },
    { label: "PENDING REVIEW", value: "12", icon: Shield, color: "text-blue-500" },
  ]

  const filteredDocuments = documents.filter(
    (doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-wider font-mono text-foreground uppercase">DOCUMENTS</h2>
          <p className="text-muted-foreground font-mono">Secure document storage & expiry tracking coming soon.</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-axalio-green hover:bg-axalio-green/90 text-black font-mono uppercase">
            UPLOAD DOCUMENT
          </Button>
          <Button className="bg-axalio-green hover:bg-axalio-green/90 text-black font-mono uppercase">
            BULK ACTIONS
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-card border border-border p-4 rounded">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{stat.label}</p>
                <p className={`text-2xl font-bold font-mono ${stat.color}`}>{stat.value}</p>
              </div>
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search documents by name, owner, or type..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-card border-border text-foreground font-mono placeholder:text-muted-foreground"
        />
      </div>

      <div className="bg-card border border-border rounded">
        <div className="p-4 border-b border-border">
          <h3 className="text-lg font-bold text-foreground font-mono uppercase tracking-wider">DOCUMENT REPOSITORY</h3>
        </div>
        <div className="p-4 space-y-4">
          {filteredDocuments.map((doc) => (
            <div
              key={doc.id}
              className="bg-muted/50 border border-border p-4 rounded hover:border-axalio-green/50 hover:bg-accent transition-all duration-200 cursor-pointer"
              onClick={() => setSelectedDocument(doc)}
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <FileText className="w-5 h-5 text-muted-foreground mt-1" />
                    <div className="flex-1">
                      <h4 className="text-foreground font-bold font-mono text-lg hover:text-axalio-green transition-colors">
                        {doc.name}
                      </h4>
                      <p className="text-xs text-muted-foreground font-mono">{doc.docId}</p>
                    </div>
                  </div>

                  <div className="ml-8 space-y-2">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge className="bg-secondary text-secondary-foreground font-mono text-xs">{doc.type}</Badge>
                      <Badge className="bg-secondary text-secondary-foreground font-mono text-xs">{doc.format}</Badge>
                      <Badge className={`font-mono text-xs ${doc.bgColor} ${doc.statusColor}`}>{doc.status}</Badge>
                      {doc.daysLeft && (
                        <Badge className="bg-yellow-500/20 text-yellow-500 font-mono text-xs">{doc.daysLeft}</Badge>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground font-mono">Owner:</span>
                        <span className="text-foreground ml-2 font-mono">{doc.owner}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground font-mono">Uploaded:</span>
                        <span className="text-foreground ml-2 font-mono">{doc.uploaded}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground font-mono">Expires:</span>
                        <span className="text-foreground ml-2 font-mono">{doc.expires}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground font-mono">Size:</span>
                        <span className="text-foreground ml-2 font-mono">{doc.size}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-2">
                      <span className="text-muted-foreground font-mono text-xs">Tags:</span>
                      {doc.tags.map((tag, index) => (
                        <span key={tag} className="text-muted-foreground font-mono text-xs">
                          {tag}
                          {index < doc.tags.length - 1 && ","}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border text-muted-foreground hover:text-axalio-green hover:border-axalio-green bg-transparent font-mono"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedDocument(doc)
                    }}
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    VIEW
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border text-muted-foreground hover:text-axalio-green hover:border-axalio-green bg-transparent font-mono"
                  >
                    <Download className="w-4 h-4 mr-1" />
                    DOWNLOAD
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedDocument && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedDocument(null)}
        >
          <div
            className="bg-popover border border-border rounded-lg w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between p-6 border-b border-border">
              <div>
                <h2 className="text-xl font-bold text-popover-foreground font-mono">{selectedDocument.name}</h2>
                <p className="text-sm text-muted-foreground font-mono">
                  {selectedDocument.docId} • {selectedDocument.type}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedDocument(null)}
                className="text-muted-foreground hover:text-popover-foreground"
              >
                ✕
              </Button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground tracking-wider mb-2 font-mono">
                    DOCUMENT STATUS
                  </h3>
                  <Badge className={`font-mono text-sm ${selectedDocument.bgColor} ${selectedDocument.statusColor}`}>
                    {selectedDocument.status}
                  </Badge>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground tracking-wider mb-2 font-mono">
                    DOCUMENT TAGS
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedDocument.tags.map((tag: string) => (
                      <Badge key={tag} className="bg-secondary text-secondary-foreground font-mono text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground tracking-wider mb-4 font-mono">
                  DOCUMENT INFORMATION
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground font-mono">Owner:</span>
                    <span className="text-popover-foreground font-mono">{selectedDocument.owner}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground font-mono">Type:</span>
                    <span className="text-popover-foreground font-mono">{selectedDocument.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground font-mono">Format:</span>
                    <span className="text-popover-foreground font-mono">{selectedDocument.format}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground font-mono">Size:</span>
                    <span className="text-popover-foreground font-mono">{selectedDocument.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground font-mono">Uploaded:</span>
                    <span className="text-popover-foreground font-mono">{selectedDocument.uploaded}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground font-mono">Expires:</span>
                    <span className="text-popover-foreground font-mono">{selectedDocument.expires}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                <Button className="bg-axalio-green hover:bg-axalio-green/90 text-black font-mono tracking-wider">
                  <Eye className="w-4 h-4 mr-2" />
                  VIEW DOCUMENT
                </Button>
                <Button
                  variant="outline"
                  className="border-border text-muted-foreground hover:text-foreground bg-transparent font-mono tracking-wider"
                >
                  <Download className="w-4 h-4 mr-2" />
                  DOWNLOAD
                </Button>
                <Button
                  variant="outline"
                  className="border-border text-muted-foreground hover:text-foreground bg-transparent font-mono tracking-wider"
                >
                  UPDATE EXPIRY
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
