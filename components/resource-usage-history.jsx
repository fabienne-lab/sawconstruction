"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

const mockUsageData = [
  {
    id: "1",
    resourceName: "Excavator 1",
    category: "Equipment",
    usageDate: new Date("2023-06-01"),
    duration: 8,
    cost: 800,
  },
  { id: "2", resourceName: "John Doe", category: "Labor", usageDate: new Date("2023-06-01"), duration: 8, cost: 400 },
  { id: "3", resourceName: "Cement", category: "Material", usageDate: new Date("2023-06-02"), duration: 0, cost: 1000 },
  // Add more mock data as needed
]

export function ResourceUsageHistory() {
  const [filter, setFilter] = useState("day")
  const [date, setDate] = useState()

  const filteredData = mockUsageData.filter((record) => {
    if (!date) return true
    const recordDate = new Date(record.usageDate)
    switch (filter) {
      case "day":
        return recordDate.toDateString() === date.toDateString()
      case "week":
        const weekStart = new Date(date)
        weekStart.setDate(date.getDate() - date.getDay())
        const weekEnd = new Date(weekStart)
        weekEnd.setDate(weekStart.getDate() + 6)
        return recordDate >= weekStart && recordDate <= weekEnd
      case "month":
        return recordDate.getMonth() === date.getMonth() && recordDate.getFullYear() === date.getFullYear()
      default:
        return true
    }
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resource Usage History</CardTitle>
        <CardDescription>View the usage history of all resources</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 mb-4">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Day</SelectItem>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="month">Month</SelectItem>
            </SelectContent>
          </Select>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn("w-[280px] justify-start text-left font-normal", !date && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Resource Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Usage Date</TableHead>
              <TableHead>Duration (hours)</TableHead>
              <TableHead>Cost ($)</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((record) => (
              <TableRow key={record.id}>
                <TableCell>{record.resourceName}</TableCell>
                <TableCell>{record.category}</TableCell>
                <TableCell>{format(record.usageDate, "PPP")}</TableCell>
                <TableCell>{record.duration}</TableCell>
                <TableCell>{record.cost}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

