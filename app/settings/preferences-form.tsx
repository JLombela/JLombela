"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Monitor, Sun, Moon } from "lucide-react"

export function PreferencesForm() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>Customize the look and feel of the application.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Theme</Label>
            <div className="flex gap-2">
              <Button
                variant={theme === "light" ? "default" : "outline"}
                onClick={() => setTheme("light")}
                className="w-full justify-center"
              >
                <Sun className="mr-2 h-4 w-4" /> Light
              </Button>
              <Button
                variant={theme === "dark" ? "default" : "outline"}
                onClick={() => setTheme("dark")}
                className="w-full justify-center"
              >
                <Moon className="mr-2 h-4 w-4" /> Dark
              </Button>
              <Button
                variant={theme === "system" ? "default" : "outline"}
                onClick={() => setTheme("system")}
                className="w-full justify-center"
              >
                <Monitor className="mr-2 h-4 w-4" /> System
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="language">Language</Label>
            <Select defaultValue="en-us">
              <SelectTrigger id="language">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en-us">English (United States)</SelectItem>
                <SelectItem value="en-gb">English (United Kingdom)</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Manage how you receive notifications from the platform.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <Label htmlFor="email-notifications" className="font-semibold">
                Email Notifications
              </Label>
              <p className="text-sm text-muted-foreground">Receive important updates via email.</p>
            </div>
            <Switch id="email-notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <Label htmlFor="push-notifications" className="font-semibold">
                Push Notifications
              </Label>
              <p className="text-sm text-muted-foreground">Get real-time alerts on your devices.</p>
            </div>
            <Switch id="push-notifications" />
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <Label htmlFor="marketing-emails" className="font-semibold">
                Marketing & Newsletter
              </Label>
              <p className="text-sm text-muted-foreground">Receive news, feature updates, and offers.</p>
            </div>
            <Switch id="marketing-emails" />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-2">
        <Button variant="outline">Reset to Defaults</Button>
        <Button className="bg-foreground text-background hover:bg-foreground/90">Save Preferences</Button>
      </div>
    </div>
  )
}
