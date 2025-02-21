"use client"
import { DailyReport } from "@/components/daily-report"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type Report = {
  id: number
  name: string
  type: string
  date: string
  status: "Generated" | "Pending" | "Failed"
}

const initialReports: Report[] = [
  { id: 1, name: "Monthly Progress Report", type: "Progress", date: "2023-06-01", status: "Generated" },
  { id: 2, name: "Equipment Usage Summary", type: "Equipment", date: "2023-06-15", status: "Pending" },
  { id: 3, name: "Material Consumption Report", type: "Inventory", date: "2023-06-30", status: "Generated" },
]

export function ReportGeneration() {
  const [reports, setReports] = useState<Report[]>(initialReports)
  const [newReport, setNewReport] = useState<Partial<Report>>({})

  const handleAddReport = () => {
    if (newReport.name && newReport.type && newReport.date) {
      setReports([
        ...reports,
        {
          ...newReport,
          id: reports.length + 1,
          status: "Pending",
        } as Report,
      ])
      setNewReport({})
    }
  }

  const handleGenerateReport = (id: number) => {
    setReports(reports.map((report) => (report.id === id ? { ...report, status: "Generated" } : report)))
  }

  return (
    <div className="space-y-4">
      <DailyReport className="col-span-3" />
      <Card>
        <CardHeader>
          <CardTitle>Report Generation</CardTitle>
          <CardDescription>Create and manage project reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-4">
              <div>
                <Label htmlFor="report-name">Report Name</Label>
                <Input
                  id="report-name"
                  value={newReport.name || ""}
                  onChange={(e) => setNewReport({ ...newReport, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="report-type">Report Type</Label>
                <Select value={newReport.type} onValueChange={(value) => setNewReport({ ...newReport, type: value })}>
                  <SelectTrigger id="report-type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Progress">Progress</SelectItem>
                    <SelectItem value="Equipment">Equipment</SelectItem>
                    <SelectItem value="Inventory">Inventory</SelectItem>
                    <SelectItem value="Financial">Financial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="report-date">Report Date</Label>
                <Input
                  id="report-date"
                  type="date"
                  value={newReport.date || ""}
                  onChange={(e) => setNewReport({ ...newReport, date: e.target.value })}
                />
              </div>
              <div>
                <Label>&nbsp;</Label>
                <Button className="w-full" onClick={handleAddReport}>
                  Add Report
                </Button>
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell>{report.name}</TableCell>
                    <TableCell>{report.type}</TableCell>
                    <TableCell>{report.date}</TableCell>
                    <TableCell>{report.status}</TableCell>
                    <TableCell>
                      {report.status === "Pending" && (
                        <Button onClick={() => handleGenerateReport(report.id)}>Generate</Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

