import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { ResourceOverview } from "@/components/resource-overview"
import { ResourceAllocation } from "@/components/resource-allocation"
import { ResourceUtilization } from "@/components/resource-utilization"
import { ResourceUsageHistory } from "@/components/resource-usage-history"
import { ResourceCostVisualization } from "@/components/resource-cost-visualization"

export default function ResourcesPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Resources" text="Manage and monitor project resources" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ResourceOverview />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <ResourceAllocation className="col-span-4" />
        <ResourceUtilization className="col-span-3" />
      </div>
      <ResourceUsageHistory />
      <ResourceCostVisualization />
    </DashboardShell>
  )
}

