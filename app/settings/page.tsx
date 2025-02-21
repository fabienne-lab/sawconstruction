import { Settings } from "@/components/settings"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"

export default function SettingsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Settings" text="Manage your account settings and preferences." />
      <Settings />
    </DashboardShell>
  )
}

