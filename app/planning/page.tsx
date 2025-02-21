import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { PlanningManagement } from "@/components/planning-management"

export default function PlanningPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Planning" text="Manage and track project planning" />
      <PlanningManagement />
    </DashboardShell>
  )
}

