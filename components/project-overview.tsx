import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, DollarSign, Users, Truck } from "lucide-react"

const projectOverview = [
  {
    name: "Total Budget",
    value: "$10,234,000",
    icon: DollarSign,
    description: "21% increase from last month",
  },
  {
    name: "Active Tasks",
    value: "23",
    icon: Activity,
    description: "7 tasks completed this week",
  },
  {
    name: "Team Members",
    value: "3,456",
    icon: Users,
    description: "45 new hires this month",
  },
  {
    name: "Equipment Utilization",
    value: "85%",
    icon: Truck,
    description: "12% increase in efficiency",
  },
]

export function ProjectOverview() {
  return (
    <>
      {projectOverview.map((item) => (
        <Card key={item.name}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.name}</CardTitle>
            <item.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
            <p className="text-xs text-muted-foreground">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

