"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { name: "Earthwork", labor: 4000, equipment: 2400, material: 2400 },
  { name: "Paving", labor: 3000, equipment: 1398, material: 2210 },
  { name: "Structures", labor: 2000, equipment: 9800, material: 2290 },
  { name: "Drainage", labor: 2780, equipment: 3908, material: 2000 },
  { name: "Utilities", labor: 1890, equipment: 4800, material: 2181 },
  { name: "Landscaping", labor: 2390, equipment: 3800, material: 2500 },
]

export function ResourceAllocation({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Resource Allocation</CardTitle>
        <CardDescription>Distribution of resources across project activities</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="labor" fill="#8884d8" stackId="a" name="Labor" />
            <Bar dataKey="equipment" fill="#82ca9d" stackId="a" name="Equipment" />
            <Bar dataKey="material" fill="#ffc658" stackId="a" name="Material" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

