"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Upload, UserIcon } from "lucide-react"

const initialUserData = {
  fullName: "John Lombela",
  email: "john@axalio.com",
  phone: "+1 (555) 123-4567",
  organization: "Axalio",
  role: "Admin",
  street: "123 Tactical Ave",
  city: "Command Center",
  state: "CA",
  postalCode: "90210",
  country: "USA",
  avatar: "/images/john-lombela.jpg",
}

export function ProfileForm() {
  const [userData, setUserData] = useState(initialUserData)
  const [avatarPreview, setAvatarPreview] = useState<string | null>(userData.avatar)

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setAvatarPreview(URL.createObjectURL(file))
    }
  }

  return (
    <form className="space-y-8">
      <div className="flex items-center gap-6">
        <Avatar className="h-24 w-24">
          <AvatarImage src={avatarPreview || undefined} />
          <AvatarFallback className="text-3xl">
            <UserIcon className="h-10 w-10 text-muted-foreground" />
          </AvatarFallback>
        </Avatar>
        <div className="space-y-2">
          <Label htmlFor="avatar-upload">Profile Picture</Label>
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Label htmlFor="avatar-upload" className="cursor-pointer">
                <Upload className="mr-2 h-4 w-4" />
                Upload
              </Label>
            </Button>
            <Input id="avatar-upload" type="file" className="hidden" onChange={handleAvatarChange} accept="image/*" />
            <Button variant="ghost" className="text-red-500 hover:text-red-600" onClick={() => setAvatarPreview(null)}>
              Remove
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">PNG, JPG, GIF up to 5MB.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" defaultValue={userData.fullName} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" defaultValue={userData.email} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" defaultValue={userData.phone} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="organization">Organization</Label>
          <Input id="organization" defaultValue={userData.organization} disabled />
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">Role</Label>
          <Input id="role" defaultValue={userData.role} disabled />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Address</h3>
        <div className="space-y-2">
          <Label htmlFor="street">Street Address</Label>
          <Input id="street" defaultValue={userData.street} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" defaultValue={userData.city} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State / Province</Label>
            <Input id="state" defaultValue={userData.state} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="postalCode">ZIP / Postal Code</Label>
            <Input id="postalCode" defaultValue={userData.postalCode} />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Input id="country" defaultValue={userData.country} />
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-foreground text-background hover:bg-foreground/90">Save Changes</Button>
      </div>
    </form>
  )
}
