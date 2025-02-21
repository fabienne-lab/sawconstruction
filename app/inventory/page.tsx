import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { InventoryManagement } from "@/components/inventory-management"

export default function InventoryPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Inventory" text="Manage and track your construction materials" />
      <InventoryManagement />
    </DashboardShell>
  )
}

