import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ProfileForm } from "./profile-form"
import { SecurityForm } from "./security-form"
import { KycStatus } from "./kyc-status"
import { PreferencesForm } from "./preferences-form"
import { User, Shield, FileText, Settings } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-6 font-mono">
      <div>
        <h1 className="text-3xl font-bold tracking-tighter uppercase">User Profile Settings</h1>
        <p className="text-muted-foreground">Manage your account settings, profile, and preferences.</p>
      </div>
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
          <TabsTrigger value="profile" className="py-2.5">
            <User className="mr-2 h-4 w-4" /> Profile Info
          </TabsTrigger>
          <TabsTrigger value="security" className="py-2.5">
            <Shield className="mr-2 h-4 w-4" /> Security
          </TabsTrigger>
          <TabsTrigger value="kyc" className="py-2.5">
            <FileText className="mr-2 h-4 w-4" /> KYC/AML
          </TabsTrigger>
          <TabsTrigger value="preferences" className="py-2.5">
            <Settings className="mr-2 h-4 w-4" /> Preferences
          </TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your personal details here. This information is private and will not be shared.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProfileForm />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your password, two-factor authentication, and active sessions.</CardDescription>
            </CardHeader>
            <CardContent>
              <SecurityForm />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="kyc" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>KYC/AML Status</CardTitle>
              <CardDescription>Review your compliance status and required documentation.</CardDescription>
            </CardHeader>
            <CardContent>
              <KycStatus />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="preferences" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Application Preferences</CardTitle>
              <CardDescription>Customize the application's appearance and behavior to your liking.</CardDescription>
            </CardHeader>
            <CardContent>
              <PreferencesForm />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
