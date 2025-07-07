// Deal Status Flow
export const DEAL_STATUS_FLOW = [
  "draft",
  "pop_verified",
  "pof_verified",
  "contracts_signed",
  "in_transit",
  "delivered",
  "completed",
] as const

// KYC Providers
export const KYC_PROVIDERS = {
  SUMSUB: "sumsub",
  TRULIOO: "trulioo",
  MANUAL: "manual",
} as const

// Document Types
export const DOCUMENT_TYPES = {
  BUSINESS_LICENSE: "business_license",
  TAX_CERTIFICATE: "tax_certificate",
  BANK_STATEMENT: "bank_statement",
  MINING_LICENSE: "mining_license",
  EXPORT_PERMIT: "export_permit",
  ASSAY_REPORT: "assay_report",
  INSURANCE_CERTIFICATE: "insurance_certificate",
  PROOF_OF_FUNDS: "proof_of_funds",
  PROOF_OF_PRODUCT: "proof_of_product",
  CONTRACT: "contract",
  OTHER: "other",
} as const

// User Roles
export const USER_ROLES = {
  BUYER: "buyer",
  SELLER: "seller",
  BROKER: "broker",
  ADMIN: "admin",
} as const

// Commission Status
export const COMMISSION_STATUS = {
  CALCULATED: "calculated",
  PENDING: "pending",
  PAID: "paid",
  OVERDUE: "overdue",
} as const

// Notification Types
export const NOTIFICATION_TYPES = {
  KYC_APPROVED: "kyc_approved",
  DEAL_UPDATE: "deal_update",
  DOCUMENT_EXPIRY: "document_expiry",
  COMMISSION_READY: "commission_ready",
  SYSTEM_ALERT: "system_alert",
} as const

// API Endpoints
export const API_ENDPOINTS = {
  // Auth
  LOGIN: "/api/auth/login",
  REGISTER: "/api/auth/register",
  LOGOUT: "/api/auth/logout",

  // Users
  USERS: "/api/users",
  USER_PROFILE: "/api/users/profile",

  // Companies
  COMPANIES: "/api/companies",
  COMPANY_KYC: "/api/companies/kyc",

  // Deals
  DEALS: "/api/deals",
  DEAL_CONTRACTS: "/api/deals/contracts",
  DEAL_DOCUMENTS: "/api/deals/documents",

  // Documents
  DOCUMENTS: "/api/documents",
  DOCUMENT_UPLOAD: "/api/documents/upload",

  // Commissions
  COMMISSIONS: "/api/commissions",
  COMMISSION_PAYOUT: "/api/commissions/payout",

  // Admin
  ADMIN_DASHBOARD: "/api/admin/dashboard",
  ADMIN_USERS: "/api/admin/users",
  ADMIN_SYSTEM: "/api/admin/system",

  // Integrations
  DOCUSIGN_WEBHOOK: "/api/integrations/docusign/webhook",
  KYC_WEBHOOK: "/api/integrations/kyc/webhook",
} as const

// File Upload Limits
export const FILE_UPLOAD_LIMITS = {
  MAX_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_TYPES: [
    "application/pdf",
    "image/jpeg",
    "image/png",
    "image/jpg",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ],
} as const

// Date Formats
export const DATE_FORMATS = {
  DISPLAY: "MMM dd, yyyy",
  API: "yyyy-MM-dd",
  DATETIME: "MMM dd, yyyy HH:mm",
} as const

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
} as const

// Colors (Emerald theme)
export const COLORS = {
  PRIMARY: "#10b981", // emerald-500
  PRIMARY_DARK: "#059669", // emerald-600
  SUCCESS: "#10b981",
  WARNING: "#f59e0b",
  ERROR: "#ef4444",
  INFO: "#3b82f6",
} as const
