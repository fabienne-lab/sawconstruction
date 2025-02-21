import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { ProductionOverview } from "@/components/production-overview"
import { DailyReport } from "@/components/daily-report"
import { ProductionChart } from "@/components/production-chart"

export default function ProductionPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Production" text="Manage and monitor production activities" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <ProductionOverview />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ProductionChart className="col-span-2" />
        <DailyReport className="col-span-3" />
      </div>
    </DashboardShell>
  )
}

