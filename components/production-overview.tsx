import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shovel, Truck, Ruler, HardHat } from "lucide-react"

const productionOverview = [
  {
    name: "Earthwork Volume",
    value: "45,678 m³",
    icon: Shovel,
    description: "15% increase from last week",
  },
  {
    name: "Material Transported",
    value: "12,345 tons",
    icon: Truck,
    description: "8% increase from last week",
  },
  {
    name: "Road Length Completed",
    value: "2.5 km",
    icon: Ruler,
    description: "500m completed this week",
  },
  {
    name: "Labor Productivity",
    value: "95%",
    icon: HardHat,
    description: "3% increase in efficiency",
  },
]

export function ProductionOverview() {
  return (
    <>
      {productionOverview.map((item) => (
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

