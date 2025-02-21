"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const projectOverview = [
  { name: "Total Tasks", value: 245, change: 20, unit: "" },
  { name: "Resources Utilized", value: 12234, change: 10, unit: "$" },
  { name: "Project Progress", value: 68, change: 5, unit: "%" },
  { name: "Quality Score", value: 92, change: 2, unit: "%" },
]

const progressData = [
  { name: "Jan", Planned: 4000, Actual: 2400 },
  { name: "Feb", Planned: 3000, Actual: 1398 },
  { name: "Mar", Planned: 2000, Actual: 9800 },
  { name: "Apr", Planned: 2780, Actual: 3908 },
  { name: "May", Planned: 1890, Actual: 4800 },
  { name: "Jun", Planned: 2390, Actual: 3800 },
]

const objectivesData = [
  { name: "Road Completion", percentage: 75 },
  { name: "Budget Adherence", percentage: 90 },
  { name: "Safety Compliance", percentage: 95 },
  { name: "Environmental Standards", percentage: 85 },
]

const financialData = [
  { month: "Jan", revenue: 4000, expenses: 2400, budget: 3000 },
  { month: "Feb", revenue: 3000, expenses: 1398, budget: 3000 },
  { month: "Mar", revenue: 2000, expenses: 9800, budget: 3000 },
  { month: "Apr", revenue: 2780, expenses: 3908, budget: 3000 },
  { month: "May", revenue: 1890, expenses: 4800, budget: 3000 },
  { month: "Jun", revenue: 2390, expenses: 3800, budget: 3000 },
]

function ProjectOverview() {
  return (
    <>
      {projectOverview.map((item) => (
        <Card key={item.name} className="flex flex-col justify-between">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {item.unit}
              {item.value}
            </div>
            <p className="text-xs text-muted-foreground">
              {item.change > 0 ? "+" : ""}
              {item.change}% from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

function TaskCompletionOverview() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Task Completion & Objectives Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="completion" className="space-y-4">
          <TabsList>
            <TabsTrigger value="completion">Task Completion</TabsTrigger>
            <TabsTrigger value="objectives">Objectives</TabsTrigger>
          </TabsList>
          <TabsContent value="completion">
            <ChartContainer
              config={{
                Planned: {
                  label: "Planned",
                  color: "hsl(var(--chart-1))",
                },
                Actual: {
                  label: "Actual",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={progressData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="Planned" fill="var(--color-Planned)" />
                  <Bar dataKey="Actual" fill="var(--color-Actual)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </TabsContent>
          <TabsContent value="objectives">
            <div className="space-y-4">
              {objectivesData.map((objective) => (
                <div key={objective.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{objective.name}</span>
                    <span className="text-sm font-medium">{objective.percentage}%</span>
                  </div>
                  <Progress value={objective.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function RecentActivity() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Recent activity data will be displayed here.</p>
      </CardContent>
    </Card>
  )
}

function FinancialSummary() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Financial Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            revenue: {
              label: "Revenue",
              color: "hsl(var(--chart-1))",
            },
            expenses: {
              label: "Expenses",
              color: "hsl(var(--chart-2))",
            },
            budget: {
              label: "Budget",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={financialData}>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="var(--color-revenue)" />
              <Line type="monotone" dataKey="expenses" stroke="var(--color-expenses)" />
              <Line type="monotone" dataKey="budget" stroke="var(--color-budget)" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export function Dashboard() {
  return (
    <div className="space-y-4 p-8 pt-6">
      <h1 className="text-3xl font-bold">Project Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ProjectOverview />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <TaskCompletionOverview />
        <RecentActivity />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <FinancialSummary />
      </div>
    </div>
  )
}

