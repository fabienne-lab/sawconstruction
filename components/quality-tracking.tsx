// "use client"

// import { useState } from "react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Button } from "@/components/ui/button"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// type QualityCheck = {
//   id: string
//   type: string
//   date: string
//   status: "Passed" | "Failed" | "Pending"
//   notes: string
//   taskId: string
//   zone: string
// }

// const initialQualityChecks: QualityCheck[] = [
//   {
//     id: "1",
//     type: "Geotechnical",
//     date: "2023-06-01",
//     status: "Passed",
//     notes: "Soil composition meets requirements",
//     taskId: "1",
//     zone: "A",
//   },
//   {
//     id: "2

"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type QualityCheck = {
  id: string
  type: string
  date: string
  status: "Passed" | "Failed" | "Pending"
  notes: string
  taskId: string
  zone: string
}

const initialQualityChecks: QualityCheck[] = [
  {
    id: "1",
    type: "Geotechnical",
    date: "2023-06-01",
    status: "Passed",
    notes: "Soil composition meets requirements",
    taskId: "1",
    zone: "A",
  },
  {
    id: "2",
    type: "Topographic",
    date: "2023-06-02",
    status: "Failed",
    notes: "Elevation discrepancy detected",
    taskId: "2",
    zone: "B",
  },
  {
    id: "3",
    type: "Material Testing",
    date: "2023-06-03",
    status: "Pending",
    notes: "Waiting for lab results",
    taskId: "3",
    zone: "C",
  },
]

export default function QualityTracking() {
  const [qualityChecks, setQualityChecks] = useState<QualityCheck[]>(initialQualityChecks)
  const [newCheck, setNewCheck] = useState<Partial<QualityCheck>>({
    type: "",
    date: "",
    status: "Pending",
    notes: "",
    taskId: "",
    zone: "",
  })

  const handleAddCheck = () => {
    if (!newCheck.type || !newCheck.date || !newCheck.taskId || !newCheck.zone) {
      alert("Please fill in all required fields")
      return
    }

    const newEntry: QualityCheck = {
      id: (qualityChecks.length + 1).toString(),
      type: newCheck.type,
      date: newCheck.date,
      status: newCheck.status as "Passed" | "Failed" | "Pending",
      notes: newCheck.notes || "",
      taskId: newCheck.taskId,
      zone: newCheck.zone,
    }

    setQualityChecks([...qualityChecks, newEntry])
    setNewCheck({ type: "", date: "", status: "Pending", notes: "", taskId: "", zone: "" })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quality Tracking</CardTitle>
        <CardDescription>Monitor and track quality checks for various tasks.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Notes</TableHead>
              <TableHead>Task ID</TableHead>
              <TableHead>Zone</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {qualityChecks.map((check) => (
              <TableRow key={check.id}>
                <TableCell>{check.type}</TableCell>
                <TableCell>{check.date}</TableCell>
                <TableCell>{check.status}</TableCell>
                <TableCell>{check.notes}</TableCell>
                <TableCell>{check.taskId}</TableCell>
                <TableCell>{check.zone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">Add New Quality Check</h3>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <Label>Type</Label>
              <Input
                value={newCheck.type}
                onChange={(e) => setNewCheck({ ...newCheck, type: e.target.value })}
                placeholder="Geotechnical, Topographic..."
              />
            </div>
            <div>
              <Label>Date</Label>
              <Input
                type="date"
                value={newCheck.date}
                onChange={(e) => setNewCheck({ ...newCheck, date: e.target.value })}
              />
            </div>
            <div>
              <Label>Status</Label>
              <Select
                onValueChange={(value) => setNewCheck({ ...newCheck, status: value as "Passed" | "Failed" | "Pending" })}
                value={newCheck.status}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Passed">Passed</SelectItem>
                  <SelectItem value="Failed">Failed</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Notes</Label>
              <Input
                value={newCheck.notes}
                onChange={(e) => setNewCheck({ ...newCheck, notes: e.target.value })}
                placeholder="Additional comments"
              />
            </div>
            <div>
              <Label>Task ID</Label>
              <Input
                value={newCheck.taskId}
                onChange={(e) => setNewCheck({ ...newCheck, taskId: e.target.value })}
                placeholder="Task identifier"
              />
            </div>
            <div>
              <Label>Zone</Label>
              <Input
                value={newCheck.zone}
                onChange={(e) => setNewCheck({ ...newCheck, zone: e.target.value })}
                placeholder="A, B, C..."
              />
            </div>
          </div>
          <Button className="mt-4" onClick={handleAddCheck}>
            Add Quality Check
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}