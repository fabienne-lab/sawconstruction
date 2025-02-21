"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

const financialData = [
  { month: "Jan", revenue: 4000, expenses: 2400, budget: 3000 },
  { month: "Feb", revenue: 3000, expenses: 1398, budget: 3000 },
  { month: "Mar", revenue: 2000, expenses: 9800, budget: 3000 },
  { month: "Apr", revenue: 2780, expenses: 3908, budget: 3000 },
  { month: "May", revenue: 1890, expenses: 4800, budget: 3000 },
  { month: "Jun", revenue: 2390, expenses: 3800, budget: 3000 },
]

export function FinancialSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Financial Summary</CardTitle>
        <CardDescription>Monthly revenue and expenses compared to budget</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={financialData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#8884d8" name="Revenue" />
            <Bar dataKey="expenses" fill="#82ca9d" name="Expenses" />
            <Bar dataKey="budget" fill="#ffc658" name="Budget" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

