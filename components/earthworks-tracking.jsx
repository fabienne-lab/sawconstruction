"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const initialEarthworkData = [
  { pk: 0, toBeCompleted: 1000, inExecution: 0 },
  { pk: 1, toBeCompleted: 1500, inExecution: 200 },
  { pk: 2, toBeCompleted: 2000, inExecution: 500 },
  { pk: 3, toBeCompleted: 1800, inExecution: 800 },
  { pk: 4, toBeCompleted: 1200, inExecution: 1000 },
  { pk: 5, toBeCompleted: 1000, inExecution: 900 },
]

const initialDailyReports = [
  { id: 1, date: "2023-06-01", startPk: 0, endPk: 1, quantity: 200, resources: [] },
  { id: 2, date: "2023-06-02", startPk: 1, endPk: 2, quantity: 300, resources: [] },
  { id: 3, date: "2023-06-03", startPk: 2, endPk: 3, quantity: 400, resources: [] },
]

const initialTasks = [
  { id: 1, name: "Excavation", cost: 0 },
  { id: 2, name: "Grading", cost: 0 },
  { id: 3, name: "Compaction", cost: 0 },
]

export function EarthworksTracking() {
  const [earthworkData, setEarthworkData] = useState(initialEarthworkData)
  const [dailyReports, setDailyReports] = useState(initialDailyReports)
  const [newReport, setNewReport] = useState({ resources: [] })
  const [pkFilter, setPkFilter] = useState({ min: 0, max: 5 })
  const [tasks, setTasks] = useState(initialTasks)
  const [newResource, setNewResource] = useState({})

  useEffect(() => {
    calculateTaskCosts()
  }, [tasks, dailyReports]) //Fixed dependency array

  const handleAddDailyReport = () => {
    if (
      newReport.date &&
      newReport.startPk !== undefined &&
      newReport.endPk !== undefined &&
      newReport.quantity !== undefined
    ) {
      const newReportWithId = {
        ...newReport,
        id: dailyReports.length + 1,
        resources: newReport.resources || [],
      }
      setDailyReports([...dailyReports, newReportWithId])

      // Update earthwork data
      setEarthworkData((prevData) =>
        prevData.map((item) =>
          item.pk >= newReport.startPk && item.pk <= newReport.endPk
            ? {
                ...item,
                inExecution: item.inExecution + (newReport.quantity || 0) / (newReport.endPk - newReport.startPk + 1),
              }
            : item,
        ),
      )

      setNewReport({ resources: [] })
    }
  }

  const handleAddResource = () => {
    if (newResource.type && newResource.name) {
      const newResourceWithId = { ...newResource, id: (newReport.resources?.length || 0) + 1 }
      setNewReport((prev) => ({ ...prev, resources: [...(prev.resources || []), newResourceWithId] }))
      setNewResource({})
    }
  }

  const calculateTaskCosts = () => {
    const updatedTasks = tasks.map((task) => {
      const relatedReports = dailyReports.filter((report) => report.taskId === task.id)
      const totalResources = relatedReports.flatMap((report) => report.resources)

      // This is a simplified cost calculation. You may want to implement a more sophisticated calculation based on your specific requirements.
      const personnelCost = totalResources.filter((r) => r.type === "Personnel").length * 100 // Assuming $100 per personnel
      const equipmentCost = totalResources.filter((r) => r.type === "Equipment").length * 500 // Assuming $500 per equipment

      return { ...task, cost: personnelCost + equipmentCost }
    })

    setTasks(updatedTasks)
  }

  const filteredReports = dailyReports.filter(
    (report) => report.startPk >= pkFilter.min && report.endPk <= pkFilter.max,
  )

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Earthworks Tracking</CardTitle>
          <CardDescription>Monitor earthwork quantities across project kilometer profiles (PK)</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={earthworkData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="pk" label={{ value: "Kilometer Profile (PK)", position: "insideBottom", offset: -10 }} />
              <YAxis label={{ value: "Quantity (m³)", angle: -90, position: "insideLeft" }} />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="toBeCompleted"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
                name="To Be Completed"
              />
              <Area
                type="monotone"
                dataKey="inExecution"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
                name="In Execution"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Daily Reports</CardTitle>
          <CardDescription>Input and view daily earthwork reports</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="add-report">
            <TabsList>
              <TabsTrigger value="add-report">Add Report</TabsTrigger>
              <TabsTrigger value="view-reports">View Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="add-report">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="report-date">Date</Label>
                    <Input
                      id="report-date"
                      type="date"
                      value={newReport.date || ""}
                      onChange={(e) => setNewReport({ ...newReport, date: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="report-task">Task</Label>
                    <Select onValueChange={(value) => setNewReport({ ...newReport, taskId: Number(value) })}>
                      <SelectTrigger id="report-task">
                        <SelectValue placeholder="Select task" />
                      </SelectTrigger>
                      <SelectContent>
                        {tasks.map((task) => (
                          <SelectItem key={task.id} value={task.id.toString()}>
                            {task.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="report-start-pk">Start PK</Label>
                    <Input
                      id="report-start-pk"
                      type="number"
                      value={newReport.startPk || ""}
                      onChange={(e) => setNewReport({ ...newReport, startPk: Number(e.target.value) })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="report-end-pk">End PK</Label>
                    <Input
                      id="report-end-pk"
                      type="number"
                      value={newReport.endPk || ""}
                      onChange={(e) => setNewReport({ ...newReport, endPk: Number(e.target.value) })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="report-quantity">Quantity (m³)</Label>
                    <Input
                      id="report-quantity"
                      type="number"
                      value={newReport.quantity || ""}
                      onChange={(e) => setNewReport({ ...newReport, quantity: Number(e.target.value) })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Resources</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="resource-type">Type</Label>
                      <Select onValueChange={(value) => setNewResource({ ...newResource, type: value })}>
                        <SelectTrigger id="resource-type">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Personnel">Personnel</SelectItem>
                          <SelectItem value="Equipment">Equipment</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="resource-name">Name</Label>
                      <Input
                        id="resource-name"
                        value={newResource.name || ""}
                        onChange={(e) => setNewResource({ ...newResource, name: e.target.value })}
                      />
                    </div>
                    {newResource.type === "Equipment" && (
                      <>
                        <div>
                          <Label htmlFor="resource-park-number">Park Number</Label>
                          <Input
                            id="resource-park-number"
                            value={newResource.parkNumber || ""}
                            onChange={(e) => setNewResource({ ...newResource, parkNumber: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="resource-start-time">Start Time</Label>
                          <Input
                            id="resource-start-time"
                            type="time"
                            value={newResource.startTime || ""}
                            onChange={(e) => setNewResource({ ...newResource, startTime: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="resource-end-time">End Time</Label>
                          <Input
                            id="resource-end-time"
                            type="time"
                            value={newResource.endTime || ""}
                            onChange={(e) => setNewResource({ ...newResource, endTime: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="resource-start-km">Start KM</Label>
                          <Input
                            id="resource-start-km"
                            type="number"
                            value={newResource.startKm || ""}
                            onChange={(e) => setNewResource({ ...newResource, startKm: Number(e.target.value) })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="resource-end-km">End KM</Label>
                          <Input
                            id="resource-end-km"
                            type="number"
                            value={newResource.endKm || ""}
                            onChange={(e) => setNewResource({ ...newResource, endKm: Number(e.target.value) })}
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <Button onClick={handleAddResource}>Add Resource</Button>
                </div>

                {newReport.resources && newReport.resources.length > 0 && (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Type</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Details</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {newReport.resources.map((resource) => (
                        <TableRow key={resource.id}>
                          <TableCell>{resource.type}</TableCell>
                          <TableCell>{resource.name}</TableCell>
                          <TableCell>
                            {resource.type === "Equipment" && (
                              <>
                                Park: {resource.parkNumber}, Time: {resource.startTime} - {resource.endTime}, KM:{" "}
                                {resource.startKm} - {resource.endKm}
                              </>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}

                <Button onClick={handleAddDailyReport}>Add Report</Button>
              </div>
            </TabsContent>
            <TabsContent value="view-reports">
              <div className="space-y-4">
                <div className="flex space-x-4 items-end">
                  <div>
                    <Label htmlFor="pk-filter-min">Min PK</Label>
                    <Input
                      id="pk-filter-min"
                      type="number"
                      value={pkFilter.min}
                      onChange={(e) => setPkFilter({ ...pkFilter, min: Number(e.target.value) })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="pk-filter-max">Max PK</Label>
                    <Input
                      id="pk-filter-max"
                      type="number"
                      value={pkFilter.max}
                      onChange={(e) => setPkFilter({ ...pkFilter, max: Number(e.target.value) })}
                    />
                  </div>
                  <Button onClick={() => setPkFilter({ min: 0, max: 5 })}>Reset Filter</Button>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Start PK</TableHead>
                      <TableHead>End PK</TableHead>
                      <TableHead>Quantity (m³)</TableHead>
                      <TableHead>Task</TableHead>
                      <TableHead>Resources</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredReports.map((report) => (
                      <TableRow key={report.id}>
                        <TableCell>{report.date}</TableCell>
                        <TableCell>{report.startPk}</TableCell>
                        <TableCell>{report.endPk}</TableCell>
                        <TableCell>{report.quantity}</TableCell>
                        <TableCell>{tasks.find((t) => t.id === report.taskId)?.name || "N/A"}</TableCell>
                        <TableCell>{report.resources.length}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Task Costs</CardTitle>
          <CardDescription>View costs associated with each task</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Task Name</TableHead>
                <TableHead>Cost</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell>{task.name}</TableCell>
                  <TableCell>${task.cost.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

