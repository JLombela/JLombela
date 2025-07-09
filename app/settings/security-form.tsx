"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Laptop, Tablet } from "lucide-react"

export function SecurityForm() {
  const activeSessions = [
    {
      id: 1,
      device: "Macbook Pro 16”",
      location: "San Francisco, CA",
      ip: "123.45.67.89",
      last_active: "Now",
      icon: Laptop,
    },
    {
      id: 2,
      device: "iPhone 15 Pro",
      location: "New York, NY",
      ip: "98.76.54.32",
      last_active: "2 hours ago",
      icon: Smartphone,
    },
    {
      id: 3,
      device: "iPad Air",
      location: "London, UK",
      ip: "54.32.10.98",
      last_active: "1 day ago",
      icon: Tablet,
    },
  ]

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>It's a good idea to use a strong password that you're not using elsewhere.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input id="confirm-password" type="password" />
          </div>
          <Button className="bg-foreground text-background hover:bg-foreground/90">Update Password</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Two-Factor Authentication</CardTitle>
          <CardDescription>
            Add an extra layer of security to your account by enabling two-factor authentication.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h4 className="font-semibold">Authenticator App</h4>
              <p className="text-sm text-muted-foreground">Use an app like Google Authenticator or Authy.</p>
            </div>
            <Switch id="two-factor-auth" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Active Sessions</CardTitle>
          <CardDescription>This is a list of devices that have logged into your account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {activeSessions.map((session) => (
            <div key={session.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-4">
                <session.icon className="h-6 w-6 text-muted-foreground" />
                <div>
                  <p className="font-semibold">{session.device}</p>
                  <p className="text-sm text-muted-foreground">
                    {session.location} • {session.ip}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-axalio-green">{session.last_active}</p>
                {session.last_active !== "Now" && (
                  <Button variant="link" className="h-auto p-0 text-xs text-red-500">
                    Log out
                  </Button>
                )}
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full bg-transparent">
            Log out of all other sessions
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
