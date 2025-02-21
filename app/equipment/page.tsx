import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { EquipmentManagement } from "@/components/equipment-management"

export default function EquipmentPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Equipment" text="Manage and track your construction equipment" />
      <EquipmentManagement />
    </DashboardShell>
  )
}

