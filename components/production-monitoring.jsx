"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductionChart } from "./production-chart"
import { EarthworksTracking } from "./earthworks-tracking"
import { DailyReport } from "./daily-report"

const tasks = ["Earthworks", "Paving", "Structures", "Drainage"]

export function ProductionMonitoring() {
  const [selectedTask, setSelectedTask] = useState("Earthworks")

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Production Monitoring</CardTitle>
          <CardDescription>Track all types of production activities</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="task-specific">Task Specific</TabsTrigger>
              <TabsTrigger value="daily-report">Daily Report</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <ProductionChart />
            </TabsContent>
            <TabsContent value="task-specific">
              <div className="space-y-4">
                <div>
                  <label htmlFor="task-select" className="block text-sm font-medium text-gray-700">
                    Select Task
                  </label>
                  <select
                    id="task-select"
                    value={selectedTask}
                    onChange={(e) => setSelectedTask(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    {tasks.map((task) => (
                      <option key={task} value={task}>
                        {task}
                      </option>
                    ))}
                  </select>
                </div>
                {selectedTask === "Earthworks" ? (
                  <EarthworksTracking />
                ) : (
                  <div>Tracking for {selectedTask} - To be implemented</div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="daily-report">
              <DailyReport />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

