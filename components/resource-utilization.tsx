"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

const laborUtilization = [
  { role: "Operators", utilization: 85 },
  { role: "Engineers", utilization: 92 },
  { role: "Laborers", utilization: 78 },
  { role: "Supervisors", utilization: 88 },
]

const equipmentUtilization = [
  { name: "Excavators", utilization: 72 },
  { name: "Bulldozers", utilization: 68 },
  { name: "Dump Trucks", utilization: 81 },
  { name: "Pavers", utilization: 75 },
]

export function ResourceUtilization({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const [activeTab, setActiveTab] = useState("labor")

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Resource Utilization</CardTitle>
        <CardDescription>Utilization rates for labor and equipment</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="labor">Labor</TabsTrigger>
            <TabsTrigger value="equipment">Equipment</TabsTrigger>
          </TabsList>
          <TabsContent value="labor">
            {laborUtilization.map((item) => (
              <div key={item.role} className="mb-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">{item.role}</span>
                  <span className="text-sm font-medium">{item.utilization}%</span>
                </div>
                <Progress value={item.utilization} />
              </div>
            ))}
          </TabsContent>
          <TabsContent value="equipment">
            {equipmentUtilization.map((item) => (
              <div key={item.name} className="mb-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="text-sm font-medium">{item.utilization}%</span>
                </div>
                <Progress value={item.utilization} />
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

