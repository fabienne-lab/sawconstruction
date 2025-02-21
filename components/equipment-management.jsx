"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const initialEquipment = [
  {
    id: "1",
    name: "Excavator XL2000",
    type: "Heavy Machinery",
    status: "Available",
    lastMaintenance: "2023-05-15",
    nextMaintenance: "2023-07-15",
  },
  {
    id: "2",
    name: "Bulldozer D8T",
    type: "Heavy Machinery",
    status: "In Use",
    lastMaintenance: "2023-06-01",
    nextMaintenance: "2023-08-01",
  },
  {
    id: "3",
    name: "Dump Truck HD785-7",
    type: "Vehicle",
    status: "Maintenance",
    lastMaintenance: "2023-06-10",
    nextMaintenance: "2023-08-10",
  },
]

export function EquipmentManagement() {
  const [equipment, setEquipment] = useState(initialEquipment)
  const [newEquipment, setNewEquipment] = useState({})

  const handleAddEquipment = () => {
    if (newEquipment.name && newEquipment.type && newEquipment.status) {
      setEquipment([
        ...equipment,
        {
          ...newEquipment,
          id: Date.now().toString(),
          lastMaintenance: new Date().toISOString().split("T")[0],
          nextMaintenance: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
        },
      ])
      setNewEquipment({})
    }
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Equipment Management</CardTitle>
          <CardDescription>Manage and track your construction equipment fleet</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="list">
            <TabsList>
              <TabsTrigger value="list">Equipment List</TabsTrigger>
              <TabsTrigger value="add">Add Equipment</TabsTrigger>
            </TabsList>
            <TabsContent value="list">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Maintenance</TableHead>
                    <TableHead>Next Maintenance</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {equipment.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.type}</TableCell>
                      <TableCell>{item.status}</TableCell>
                      <TableCell>{item.lastMaintenance}</TableCell>
                      <TableCell>{item.nextMaintenance}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="add">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="equipment-name">Name</Label>
                    <Input
                      id="equipment-name"
                      value={newEquipment.name || ""}
                      onChange={(e) => setNewEquipment({ ...newEquipment, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="equipment-type">Type</Label>
                    <Input
                      id="equipment-type"
                      value={newEquipment.type || ""}
                      onChange={(e) => setNewEquipment({ ...newEquipment, type: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="equipment-status">Status</Label>
                    <Select
                      value={newEquipment.status}
                      onValueChange={(value) => setNewEquipment({ ...newEquipment, status: value })}
                    >
                      <SelectTrigger id="equipment-status">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Available">Available</SelectItem>
                        <SelectItem value="In Use">In Use</SelectItem>
                        <SelectItem value="Maintenance">Maintenance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button onClick={handleAddEquipment}>Add Equipment</Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

