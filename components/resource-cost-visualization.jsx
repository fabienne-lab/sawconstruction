"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts"

const costData = [
  { month: "Jan", labor: 4000, equipment: 2400, material: 2400 },
  { month: "Feb", labor: 3000, equipment: 1398, material: 2210 },
  { month: "Mar", labor: 2000, equipment: 9800, material: 2290 },
  { month: "Apr", labor: 2780, equipment: 3908, material: 2000 },
  { month: "May", labor: 1890, equipment: 4800, material: 2181 },
  { month: "Jun", labor: 2390, equipment: 3800, material: 2500 },
]

export function ResourceCostVisualization() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resource Cost Over Time</CardTitle>
        <CardDescription>Visualization of resource costs by type</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={costData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="labor" stroke="#8884d8" name="Labor" />
            <Line type="monotone" dataKey="equipment" stroke="#82ca9d" name="Equipment" />
            <Line type="monotone" dataKey="material" stroke="#ffc658" name="Material" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

