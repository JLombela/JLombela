"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileUp, Palette, Bell, ShieldCheck, Files, KeyRound } from "lucide-react"

export default function SystemConfigurationPage() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Compliance Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-axalio-green" />
              <CardTitle className="font-mono uppercase tracking-wider">Compliance Settings</CardTitle>
            </div>
            <CardDescription className="font-mono">KYC/AML enforcement and document limits.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 font-mono">
            <div className="space-y-2">
              <Label htmlFor="kyc-level">KYC Enforcement Level</Label>
              <Select defaultValue="strict">
                <SelectTrigger id="kyc-level">
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="strict">Strict (All users)</SelectItem>
                  <SelectItem value="standard">Standard (Buyers & Sellers)</SelectItem>
                  <SelectItem value="relaxed">Relaxed (Sellers only)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="file-size-limit">Max File Size (MB)</Label>
              <Input id="file-size-limit" type="number" defaultValue="25" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-review">Auto-start KYC Review</Label>
              <Switch id="auto-review" defaultChecked />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-axalio-green hover:bg-axalio-green/90 text-black font-mono uppercase">
              Save Compliance
            </Button>
          </CardFooter>
        </Card>

        {/* Notification Preferences */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Bell className="w-6 h-6 text-axalio-green" />
              <CardTitle className="font-mono uppercase tracking-wider">Notifications</CardTitle>
            </div>
            <CardDescription className="font-mono">System-wide email alerts and triggers.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 font-mono">
            <div className="flex items-center justify-between">
              <Label htmlFor="new-user-email">New User Registration</Label>
              <Switch id="new-user-email" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="deal-status-email">Deal Status Change</Label>
              <Switch id="deal-status-email" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="kyc-approval-email">KYC Approval/Rejection</Label>
              <Switch id="kyc-approval-email" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="weekly-summary">Weekly Admin Summary</Label>
              <Switch id="weekly-summary" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-axalio-green hover:bg-axalio-green/90 text-black font-mono uppercase">
              Save Notifications
            </Button>
          </CardFooter>
        </Card>

        {/* Document Handling */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Files className="w-6 h-6 text-axalio-green" />
              <CardTitle className="font-mono uppercase tracking-wider">Document Handling</CardTitle>
            </div>
            <CardDescription className="font-mono">File types, storage, and expiry settings.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 font-mono">
            <div className="space-y-2">
              <Label htmlFor="supported-types">Supported File Types</Label>
              <Input id="supported-types" defaultValue="pdf, docx, jpg, png" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="storage-limit">Total Storage Limit (GB)</Label>
              <Input id="storage-limit" type="number" defaultValue="500" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="doc-expiry">Default Document Expiry (days)</Label>
              <Input id="doc-expiry" type="number" defaultValue="365" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-axalio-green hover:bg-axalio-green/90 text-black font-mono uppercase">
              Save Documents
            </Button>
          </CardFooter>
        </Card>

        {/* Theme & Branding */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Palette className="w-6 h-6 text-axalio-green" />
              <CardTitle className="font-mono uppercase tracking-wider">Theme & Branding</CardTitle>
            </div>
            <CardDescription className="font-mono">Customize the look of internal tools.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 font-mono">
            <div className="space-y-2">
              <Label>Platform Logo</Label>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-muted rounded flex items-center justify-center">
                  <FileUp className="w-8 h-8 text-muted-foreground" />
                </div>
                <Button variant="outline" className="font-mono bg-transparent">
                  Upload Logo
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="primary-color">Primary Color</Label>
              <Input id="primary-color" defaultValue="#33FF57" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-axalio-green hover:bg-axalio-green/90 text-black font-mono uppercase">
              Save Branding
            </Button>
          </CardFooter>
        </Card>

        {/* API Keys & Integrations */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <KeyRound className="w-6 h-6 text-axalio-green" />
              <CardTitle className="font-mono uppercase tracking-wider">API & Integrations</CardTitle>
            </div>
            <CardDescription className="font-mono">Manage third-party service integrations.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 font-mono">
            <div className="space-y-2">
              <Label>Twilio SMS API</Label>
              <Input placeholder="Enter API Key..." />
            </div>
            <div className="space-y-2">
              <Label>Stripe Payments API</Label>
              <Input placeholder="Enter API Key..." />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-axalio-green hover:bg-axalio-green/90 text-black font-mono uppercase">
              Save Integrations
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
