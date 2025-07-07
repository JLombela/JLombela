"use client"

import { useState } from "react"
import { Search, Eye, FileText, Download, Clock, AlertTriangle, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function DocumentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDocument, setSelectedDocument] = useState(null)

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
    <div className="w-full bg-black min-h-full">
      <div className="space-y-6 w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-wider font-mono text-white uppercase">DOCUMENTS</h2>
            <p className="text-neutral-400 font-mono">Secure document storage & expiry tracking coming soon.</p>
          </div>
          <div className="flex gap-2">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-mono uppercase">
              UPLOAD DOCUMENT
            </Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-mono uppercase">BULK ACTIONS</Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-neutral-900 border border-neutral-700 p-4 rounded">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider">{stat.label}</p>
                  <p className={`text-2xl font-bold font-mono ${stat.color}`}>{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500 w-4 h-4" />
          <Input
            placeholder="Search documents by name, owner, or type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-neutral-900 border-neutral-700 text-white font-mono placeholder:text-neutral-500"
          />
        </div>

        {/* Document Repository */}
        <div className="bg-neutral-900 border border-neutral-700 rounded">
          <div className="p-4 border-b border-neutral-700">
            <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider">DOCUMENT REPOSITORY</h3>
          </div>
          <div className="p-4 space-y-4">
            {filteredDocuments.map((doc) => (
              <div
                key={doc.id}
                className="bg-neutral-800 border border-neutral-700 p-4 rounded hover:border-emerald-500/50 hover:bg-neutral-750 transition-all duration-200 cursor-pointer"
                onClick={() => setSelectedDocument(doc)}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <FileText className="w-5 h-5 text-neutral-400 mt-1" />
                      <div className="flex-1">
                        <h4 className="text-white font-bold font-mono text-lg hover:text-emerald-500 transition-colors">
                          {doc.name}
                        </h4>
                        <p className="text-xs text-neutral-400 font-mono">{doc.docId}</p>
                      </div>
                    </div>

                    <div className="ml-8 space-y-2">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge className="bg-neutral-700 text-neutral-300 font-mono text-xs">{doc.type}</Badge>
                        <Badge className="bg-neutral-700 text-neutral-300 font-mono text-xs">{doc.format}</Badge>
                        <Badge className={`font-mono text-xs ${doc.bgColor} ${doc.statusColor}`}>{doc.status}</Badge>
                        {doc.daysLeft && (
                          <Badge className="bg-yellow-500/20 text-yellow-500 font-mono text-xs">{doc.daysLeft}</Badge>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-sm">
                        <div>
                          <span className="text-neutral-500 font-mono">Owner:</span>
                          <span className="text-white ml-2 font-mono">{doc.owner}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 font-mono">Uploaded:</span>
                          <span className="text-white ml-2 font-mono">{doc.uploaded}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 font-mono">Expires:</span>
                          <span className="text-white ml-2 font-mono">{doc.expires}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 font-mono">Size:</span>
                          <span className="text-white ml-2 font-mono">{doc.size}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mt-2">
                        <span className="text-neutral-500 font-mono text-xs">Tags:</span>
                        {doc.tags.map((tag) => (
                          <span key={tag} className="text-neutral-400 font-mono text-xs">
                            {tag}
                            {doc.tags.indexOf(tag) < doc.tags.length - 1 && ","}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-neutral-600 text-neutral-400 hover:text-emerald-500 hover:border-emerald-500 bg-transparent font-mono"
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
                      className="border-neutral-600 text-neutral-400 hover:text-emerald-500 hover:border-emerald-500 bg-transparent font-mono"
                      onClick={(e) => {
                        e.stopPropagation()
                        // Handle download
                      }}
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
        {/* Document Detail Modal */}
        {selectedDocument && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <div className="bg-neutral-900 border border-neutral-700 rounded-lg w-full max-w-2xl">
              {/* Modal Header */}
              <div className="flex items-start justify-between p-6 border-b border-neutral-700">
                <div>
                  <h2 className="text-xl font-bold text-white font-mono">{selectedDocument.name}</h2>
                  <p className="text-sm text-neutral-400 font-mono">
                    {selectedDocument.docId} • {selectedDocument.type}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedDocument(null)}
                  className="text-neutral-400 hover:text-white"
                >
                  ✕
                </Button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Status and Tags */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-neutral-300 tracking-wider mb-2 font-mono">
                      DOCUMENT STATUS
                    </h3>
                    <Badge className={`font-mono text-sm ${selectedDocument.bgColor} ${selectedDocument.statusColor}`}>
                      {selectedDocument.status}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-neutral-300 tracking-wider mb-2 font-mono">
                      DOCUMENT TAGS
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedDocument.tags.map((tag) => (
                        <Badge key={tag} className="bg-neutral-700 text-neutral-300 font-mono text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Document Information */}
                <div>
                  <h3 className="text-sm font-medium text-neutral-300 tracking-wider mb-4 font-mono">
                    DOCUMENT INFORMATION
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-400 font-mono">Owner:</span>
                      <span className="text-white font-mono">{selectedDocument.owner}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400 font-mono">Type:</span>
                      <span className="text-white font-mono">{selectedDocument.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400 font-mono">Format:</span>
                      <span className="text-white font-mono">{selectedDocument.format}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400 font-mono">Size:</span>
                      <span className="text-white font-mono">{selectedDocument.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400 font-mono">Uploaded:</span>
                      <span className="text-white font-mono">{selectedDocument.uploaded}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400 font-mono">Expires:</span>
                      <span className="text-white font-mono">{selectedDocument.expires}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-neutral-700">
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-mono tracking-wider">
                    <Eye className="w-4 h-4 mr-2" />
                    VIEW DOCUMENT
                  </Button>
                  <Button
                    variant="outline"
                    className="border-neutral-600 text-neutral-400 hover:text-white hover:border-neutral-500 bg-transparent font-mono tracking-wider"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    DOWNLOAD
                  </Button>
                  <Button
                    variant="outline"
                    className="border-neutral-600 text-neutral-400 hover:text-white hover:border-neutral-500 bg-transparent font-mono tracking-wider"
                  >
                    UPDATE EXPIRY
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
