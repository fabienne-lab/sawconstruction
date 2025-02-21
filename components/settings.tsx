"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
          <CardDescription>Manage your account settings and preferences.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Your username" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your email" />
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="email-notifications" checked={emailNotifications} onCheckedChange={setEmailNotifications} />
            <Label htmlFor="email-notifications">Enable email notifications</Label>
          </div>
          <Button>Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  )
}

