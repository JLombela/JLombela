// User Types
export interface User {
  id: string
  email: string
  role: "buyer" | "seller" | "broker" | "admin"
  status: "pending" | "active" | "suspended"
  createdAt: string
  lastLogin?: string
}

export interface Company {
  id: string
  name: string
  type: "buyer" | "seller" | "broker"
  country: string
  registrationNumber: string
  contactEmail: string
  contactPhone: string
  status: "pending_kyc" | "kyc_approved" | "active" | "suspended"
  kycStatus: KYCStatus
  createdAt: string
}

// KYC Types
export interface KYCApplication {
  id: string
  companyId: string
  type: "kyc" | "kyb"
  status: "pending_review" | "approved" | "rejected" | "requires_documents" | "in_verification"
  submittedAt: string
  reviewedAt?: string
  reviewedBy?: string
  documents: Document[]
  notes?: string
}

export interface KYCStatus {
  status: "pending" | "approved" | "rejected" | "expired"
  approvedAt?: string
  expiresAt?: string
  provider?: "sumsub" | "trulioo" | "manual"
}

// Deal Types
export interface Deal {
  id: string
  sellerId: string
  buyerId: string
  brokerId?: string
  commodity: string
  quantity: string
  unit: string
  pricePerUnit: number
  totalValue: number
  currency: string
  status: DealStatus
  stage: DealStage
  createdAt: string
  updatedAt: string
  contracts: Contract[]
  documents: Document[]
  commission?: Commission
}

export type DealStatus =
  | "draft"
  | "pop_verified"
  | "pof_verified"
  | "contracts_signed"
  | "in_transit"
  | "delivered"
  | "completed"
  | "cancelled"

export type DealStage =
  | "Draft"
  | "PoP Verified"
  | "PoF Verified"
  | "Contracts Signed"
  | "In Transit"
  | "Delivered"
  | "Completed"

// Contract Types
export interface Contract {
  id: string
  dealId: string
  type: "axalio_seller" | "axalio_buyer"
  status: "draft" | "sent" | "signed" | "completed"
  docusignEnvelopeId?: string
  signedAt?: string
  documentUrl?: string
  createdAt: string
}

// Document Types
export interface Document {
  id: string
  name: string
  type: DocumentType
  ownerId: string
  ownerType: "user" | "company" | "deal"
  fileUrl: string
  fileSize: number
  mimeType: string
  uploadedAt: string
  expiresAt?: string
  status: "active" | "expired" | "pending_review" | "approved" | "rejected"
  tags: string[]
  metadata?: Record<string, any>
}

export type DocumentType =
  | "business_license"
  | "tax_certificate"
  | "bank_statement"
  | "mining_license"
  | "export_permit"
  | "assay_report"
  | "insurance_certificate"
  | "proof_of_funds"
  | "proof_of_product"
  | "contract"
  | "other"

// Commission Types
export interface Commission {
  id: string
  dealId: string
  brokerId: string
  dealValue: number
  commissionRate: number
  commissionAmount: number
  status: "calculated" | "pending" | "paid" | "overdue"
  createdAt: string
  dueDate: string
  paidAt?: string
  paymentReference?: string
}

// Notification Types
export interface Notification {
  id: string
  userId: string
  type: "kyc_approved" | "deal_update" | "document_expiry" | "commission_ready" | "system_alert"
  title: string
  message: string
  read: boolean
  createdAt: string
  data?: Record<string, any>
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Form Types
export interface CreateDealForm {
  sellerId: string
  buyerId: string
  brokerId?: string
  commodity: string
  quantity: string
  unit: string
  pricePerUnit: number
  currency: string
  notes?: string
}

export interface KYCSubmissionForm {
  companyName: string
  companyType: "buyer" | "seller" | "broker"
  registrationNumber: string
  country: string
  contactEmail: string
  contactPhone: string
  documents: File[]
}

// Dashboard Types
export interface DashboardMetrics {
  activeDeals: number
  pendingKYC: number
  totalVolume: number
  successRate: number
  systemUptime: number
  documentsStored: number
  activeUsers: number
}

export interface ActivityLog {
  id: string
  timestamp: string
  userId: string
  action: string
  entity: string
  entityId: string
  details?: Record<string, any>
}
