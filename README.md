# Axalio MVP Platform

A comprehensive digital platform for managing gold commodity trade deals, connecting artisanal miners with global buyers through secure, compliant processes.

## 🎯 Project Overview

Axalio streamlines the onboarding of participants and management of gold commodity trade deals. The platform connects:
- **Artisanal and Small-Scale Miners (ASM)** and their agents (sellers)
- **Offtakers** (buyers such as refiners)  
- **Intermediaries** (brokers)

All under Axalio's facilitation as the principal in transactions.

## 🚀 MVP Goals

- ✅ Digital KYC/KYB onboarding
- ✅ End-to-end deal lifecycle tracking
- ✅ Role-based access controls (RBAC)
- ✅ Secure document and compliance workflows
- ✅ Admin visibility and automation tools

## 📋 Functional Requirements

### 1. User Onboarding & Compliance
- Role selection: Buyer, Seller, Broker
- Email verification and secure password setup
- KYC/KYB data collection and document upload
- Integration with third-party KYC providers (SumSub, Trulioo)
- Admin-initiated manual onboarding and alternate verification

### 2. Deal Lifecycle Management
- Admin-initiated deal creation
- Defined statuses: Draft → PoP Verified → PoF Verified → Contracts Signed → In Transit → Delivered → Completed
- Dual contract generation (Axalio ↔ Seller / Axalio ↔ Buyer)
- Embedded DocuSign integration for digital signatures
- Proof of Product (assay, export permits) and Proof of Funds (bank letter, escrow)

### 3. Document Management
- Secure cloud storage (AWS S3)
- Document tagging, expiry metadata
- Auto-expiry alerts (90/60/30 days)
- Admin override, version history, and audit trail

### 4. Commission Engine
- Per-deal broker linking
- Configurable percentage or fixed-rate
- Admin payout tracking (pending/paid)
- Broker dashboard visibility (deal status + commission log)

### 5. Role-Based Dashboards
- **Buyer**: deal status, PoF actions, contract signing
- **Seller**: PoP uploads, shipment readiness, contract status
- **Broker**: introduced deals, commission summary
- **Admin**: deal pipeline, KYC queue, document status

### 6. Admin Panel Features
- Global deal monitoring with filters
- KYC/KYB review queue with document viewer
- Manual status updates and audit logging
- User and organization profile editing
- Reporting: user activity, deals by status, commission summary

## 🏗️ Architecture & Folder Structure

\`\`\`
axalio-mvp/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   │   ├── login/
│   │   ├── register/
│   │   └── verify/
│   ├── dashboard/                # Main dashboard
│   ├── deals/                    # Deal management
│   ├── onboarding/              # KYC/KYB processes
│   ├── documents/               # Document management
│   ├── commissions/             # Commission tracking
│   ├── admin/                   # Admin panel
│   ├── api/                     # API routes
│   │   ├── auth/
│   │   ├── deals/
│   │   ├── documents/
│   │   ├── kyc/
│   │   ├── commissions/
│   │   └── integrations/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/                   # Reusable UI components
│   ├── ui/                      # shadcn/ui components
│   ├── forms/                   # Form components
│   ├── tables/                  # Data table components
│   └── charts/                  # Chart components
├── lib/                         # Utility libraries
│   ├── auth.ts                  # Authentication logic
│   ├── db.ts                    # Database connection
│   ├── integrations/            # Third-party integrations
│   │   ├── docusign.ts
│   │   ├── kyc-providers.ts
│   │   └── storage.ts
│   ├── types.ts                 # TypeScript types
│   ├── constants.ts             # App constants
│   └── utils.ts                 # Utility functions
├── hooks/                       # Custom React hooks
├── middleware.ts                # Next.js middleware
├── next.config.js
├── tailwind.config.js
└── package.json
\`\`\`

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **UI**: Tailwind CSS + shadcn/ui
- **Database**: PostgreSQL (Neon/Supabase)
- **Authentication**: NextAuth.js
- **File Storage**: AWS S3 / Vercel Blob
- **Document Signing**: DocuSign API
- **KYC Integration**: SumSub / Trulioo
- **Deployment**: Vercel

## 🎨 Design System

- **Primary Color**: Emerald (#10b981) - matching Axalio brand
- **Typography**: Inter font family
- **Components**: shadcn/ui component library
- **Theme**: Dark mode with emerald accents
- **Layout**: Responsive design with mobile-first approach

## 🔐 Security Features

- Role-based access control (RBAC)
- Secure document storage with encryption
- Audit logging for all actions
- KYC/AML compliance workflows
- API rate limiting and validation
- Secure file upload with virus scanning

## 📊 Key Features

### Dashboard
- Real-time metrics and KPIs
- Activity feed and notifications
- Quick actions and shortcuts
- System status monitoring

### Deal Management
- Complete deal lifecycle tracking
- Document attachment and verification
- Contract generation and signing
- Status updates and notifications

### KYC/KYB Onboarding
- Multi-step verification process
- Document upload and review
- Third-party provider integration
- Manual review capabilities

### Document Management
- Secure cloud storage
- Expiry tracking and alerts
- Version control and audit trail
- Bulk operations and search

### Commission Tracking
- Automated commission calculation
- Payout management and tracking
- Broker dashboard and reporting
- Payment reconciliation

### Admin Panel
- User and company management
- System monitoring and alerts
- Reporting and analytics
- Configuration management

## 🚀 Getting Started

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/axalio/mvp-platform.git
   cd mvp-platform
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   # Configure your environment variables
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📝 Environment Variables

\`\`\`env
# Database
DATABASE_URL=

# Authentication
NEXTAUTH_SECRET=
NEXTAUTH_URL=

# File Storage
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_S3_BUCKET=

# DocuSign
DOCUSIGN_CLIENT_ID=
DOCUSIGN_CLIENT_SECRET=
DOCUSIGN_REDIRECT_URI=

# KYC Providers
SUMSUB_API_KEY=
TRULIOO_API_KEY=

# Email
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by Axalio.

## 📞 Support

For support and questions, please contact the development team at dev@axalio.com
