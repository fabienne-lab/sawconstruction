"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type PlanningItem = {
  id: string
  task: string
  startDate: string
  endDate: string
  status: "Not Started" | "In Progress" | "Completed"
  assignee: string
}

const initialPlanning: PlanningItem[] = [
  {
    id: "1",
    task: "Site Preparation",
    startDate: "2023-07-01",
    endDate: "2023-07-15",
    status: "In Progress",
    assignee: "John Doe",
  },
  {
    id: "2",
    task: "Foundation Work",
    startDate: "2023-07-16",
    endDate: "2023-08-15",
    status: "Not Started",
    assignee: "Jane Smith",
  },
  {
    id: "3",
    task: "Road Paving",
    startDate: "2023-08-16",
    endDate: "2023-09-30",
    status: "Not Started",
    assignee: "Bob Johnson",
  },
]

export function PlanningManagement() {
  const [planningItems, setPlanningItems] = useState<PlanningItem[]>(initialPlanning)
  const [newItem, setNewItem] = useState<Partial<PlanningItem>>({})

  const handleAddItem = () => {
    if (newItem.task && newItem.startDate && newItem.endDate && newItem.status && newItem.assignee) {
      setPlanningItems([...planningItems, { ...newItem, id: Date.now().toString() } as PlanningItem])
      setNewItem({})
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Planning Management</CardTitle>
        <CardDescription>Manage and track project planning</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="task">Task</Label>
              <Input
                id="task"
                value={newItem.task || ""}
                onChange={(e) => setNewItem({ ...newItem, task: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="start-date">Start Date</Label>
              <Input
                id="start-date"
                type="date"
                value={newItem.startDate || ""}
                onChange={(e) => setNewItem({ ...newItem, startDate: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="end-date">End Date</Label>
              <Input
                id="end-date"
                type="date"
                value={newItem.endDate || ""}
                onChange={(e) => setNewItem({ ...newItem, endDate: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="status">Status</Label>
              <Select
                value={newItem.status}
                onValueChange={(value) =>
                  setNewItem({ ...newItem, status: value as "Not Started" | "In Progress" | "Completed" })
                }
              >
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Not Started">Not Started</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="assignee">Assignee</Label>
              <Input
                id="assignee"
                value={newItem.assignee || ""}
                onChange={(e) => setNewItem({ ...newItem, assignee: e.target.value })}
              />
            </div>
          </div>
          <Button onClick={handleAddItem}>Add Planning Item</Button>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Task</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Assignee</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {planningItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.task}</TableCell>
                  <TableCell>{item.startDate}</TableCell>
                  <TableCell>{item.endDate}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>{item.assignee}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

