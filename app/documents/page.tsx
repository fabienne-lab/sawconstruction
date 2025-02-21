import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { DocumentCatalog } from "@/components/document-catalog"

export default function DocumentsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Documents" text="Manage and access project documents" />
      <DocumentCatalog />
    </DashboardShell>
  )
}

