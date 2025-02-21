"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  {
    date: "Jan 22",
    Earthwork: 2890,
    Paving: 2400,
  },
  {
    date: "Feb 22",
    Earthwork: 1890,
    Paving: 1398,
  },
  {
    date: "Mar 22",
    Earthwork: 3890,
    Paving: 2980,
  },
  {
    date: "Apr 22",
    Earthwork: 2890,
    Paving: 3908,
  },
  {
    date: "May 22",
    Earthwork: 3890,
    Paving: 4800,
  },
  {
    date: "Jun 22",
    Earthwork: 4890,
    Paving: 3800,
  },
  {
    date: "Jul 22",
    Earthwork: 4890,
    Paving: 4300,
  },
]

export function ProductionChart({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Production Trends</CardTitle>
        <CardDescription>Daily production volume for earthwork and paving</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value} m³`}
            />
            <Tooltip />
            <Line type="monotone" dataKey="Earthwork" stroke="#8884d8" strokeWidth={2} />
            <Line type="monotone" dataKey="Paving" stroke="#82ca9d" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

