import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Truck, HardHat, DollarSign } from "lucide-react"

const resourceOverview = [
  {
    name: "Total Employees",
    value: "1,234",
    icon: Users,
    description: "15 new hires this month",
  },
  {
    name: "Equipment Count",
    value: "56",
    icon: Truck,
    description: "3 new additions this week",
  },
  {
    name: "Labor Hours",
    value: "45,678",
    icon: HardHat,
    description: "2,345 hours this week",
  },
  {
    name: "Resource Cost",
    value: "$1,234,567",
    icon: DollarSign,
    description: "8% under budget",
  },
]

export function ResourceOverview() {
  return (
    <>
      {resourceOverview.map((item) => (
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

