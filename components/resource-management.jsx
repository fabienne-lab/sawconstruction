"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const initialHumanResources = [
  { id: 1, name: "John Doe", role: "Project Manager", workingHours: 40 },
  { id: 2, name: "Jane Smith", role: "Civil Engineer", workingHours: 45 },
  { id: 3, name: "Bob Johnson", role: "Construction Worker", workingHours: 50 },
]

const initialEquipment = [
  { id: 1, name: "Excavator XL2000", type: "Machine", status: "Available" },
  { id: 2, name: "Dump Truck DT500", type: "Vehicle", status: "In Use" },
  { id: 3, name: "Bulldozer B1000", type: "Machine", status: "Maintenance" },
]

const initialMaterials = [
  { id: 1, name: "Cement", quantity: 1000, unit: "bags" },
  { id: 2, name: "Steel", quantity: 500, unit: "tons" },
  { id: 3, name: "Gravel", quantity: 2000, unit: "cubic meters" },
]

const initialZones = [
  { id: 1, name: "North Section" },
  { id: 2, name: "Central Section" },
  { id: 3, name: "South Section" },
]

const initialEquipmentUsage = [
  { id: 1, equipmentId: 1, zoneId: 1, date: "2023-06-01", operatingTime: 8 },
  { id: 2, equipmentId: 2, zoneId: 2, date: "2023-06-01", kilometers: 150 },
  { id: 3, equipmentId: 3, zoneId: 3, date: "2023-06-02", operatingTime: 6 },
]

export function ResourceManagement() {
  const [humanResources, setHumanResources] = useState(initialHumanResources)
  const [equipment, setEquipment] = useState(initialEquipment)
  const [materials, setMaterials] = useState(initialMaterials)
  const [zones, setZones] = useState(initialZones)
  const [equipmentUsage, setEquipmentUsage] = useState(initialEquipmentUsage)
  const [newHumanResource, setNewHumanResource] = useState({})
  const [newEquipment, setNewEquipment] = useState({})
  const [newMaterial, setNewMaterial] = useState({})
  const [newZone, setNewZone] = useState({})
  const [newEquipmentUsage, setNewEquipmentUsage] = useState({})

  const handleAddHumanResource = () => {
    if (newHumanResource.name && newHumanResource.role) {
      setHumanResources([...humanResources, { ...newHumanResource, id: humanResources.length + 1, workingHours: 0 }])
      setNewHumanResource({})
    }
  }

  const handleAddEquipment = () => {
    if (newEquipment.name && newEquipment.type && newEquipment.status) {
      setEquipment([...equipment, { ...newEquipment, id: equipment.length + 1 }])
      setNewEquipment({})
    }
  }

  const handleAddMaterial = () => {
    if (newMaterial.name && newMaterial.quantity && newMaterial.unit) {
      setMaterials([...materials, { ...newMaterial, id: materials.length + 1 }])
      setNewMaterial({})
    }
  }

  const handleAddZone = () => {
    if (newZone.name) {
      setZones([...zones, { ...newZone, id: zones.length + 1 }])
      setNewZone({})
    }
  }

  const handleAddEquipmentUsage = () => {
    if (newEquipmentUsage.equipmentId && newEquipmentUsage.zoneId && newEquipmentUsage.date) {
      setEquipmentUsage([...equipmentUsage, { ...newEquipmentUsage, id: equipmentUsage.length + 1 }])
      setNewEquipmentUsage({})
    }
  }

  return (
    <Tabs defaultValue="human-resources" className="space-y-4">
      <TabsList>
        <TabsTrigger value="human-resources">Human Resources</TabsTrigger>
        <TabsTrigger value="equipment">Equipment</TabsTrigger>
        <TabsTrigger value="materials">Materials</TabsTrigger>
        <TabsTrigger value="zones">Zones</TabsTrigger>
        <TabsTrigger value="equipment-usage">Equipment Usage</TabsTrigger>
      </TabsList>

      <TabsContent value="human-resources">
        <Card>
          <CardHeader>
            <CardTitle>Human Resources</CardTitle>
            <CardDescription>Manage your project's human resources here.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="hr-name">Name</Label>
                  <Input
                    id="hr-name"
                    value={newHumanResource.name || ""}
                    onChange={(e) => setNewHumanResource({ ...newHumanResource, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="hr-role">Role</Label>
                  <Input
                    id="hr-role"
                    value={newHumanResource.role || ""}
                    onChange={(e) => setNewHumanResource({ ...newHumanResource, role: e.target.value })}
                  />
                </div>
                <div>
                  <Label>&nbsp;</Label>
                  <Button className="w-full" onClick={handleAddHumanResource}>
                    Add Resource
                  </Button>
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Working Hours</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {humanResources.map((resource) => (
                    <TableRow key={resource.id}>
                      <TableCell>{resource.name}</TableCell>
                      <TableCell>{resource.role}</TableCell>
                      <TableCell>{resource.workingHours}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="equipment">
        <Card>
          <CardHeader>
            <CardTitle>Equipment</CardTitle>
            <CardDescription>Manage your project's equipment here.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-4 gap-4">
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
                  <Select
                    value={newEquipment.type}
                    onValueChange={(value) => setNewEquipment({ ...newEquipment, type: value })}
                  >
                    <SelectTrigger id="equipment-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Machine">Machine</SelectItem>
                      <SelectItem value="Vehicle">Vehicle</SelectItem>
                    </SelectContent>
                  </Select>
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
                <div>
                  <Label>&nbsp;</Label>
                  <Button className="w-full" onClick={handleAddEquipment}>
                    Add Equipment
                  </Button>
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {equipment.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.type}</TableCell>
                      <TableCell>{item.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="materials">
        <Card>
          <CardHeader>
            <CardTitle>Materials</CardTitle>
            <CardDescription>Manage your project's materials here.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="material-name">Name</Label>
                  <Input
                    id="material-name"
                    value={newMaterial.name || ""}
                    onChange={(e) => setNewMaterial({ ...newMaterial, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="material-quantity">Quantity</Label>
                  <Input
                    id="material-quantity"
                    type="number"
                    value={newMaterial.quantity || ""}
                    onChange={(e) => setNewMaterial({ ...newMaterial, quantity: Number(e.target.value) })}
                  />
                </div>
                <div>
                  <Label htmlFor="material-unit">Unit</Label>
                  <Input
                    id="material-unit"
                    value={newMaterial.unit || ""}
                    onChange={(e) => setNewMaterial({ ...newMaterial, unit: e.target.value })}
                  />
                </div>
                <div>
                  <Label>&nbsp;</Label>
                  <Button className="w-full" onClick={handleAddMaterial}>
                    Add Material
                  </Button>
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Unit</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {materials.map((material) => (
                    <TableRow key={material.id}>
                      <TableCell>{material.name}</TableCell>
                      <TableCell>{material.quantity}</TableCell>
                      <TableCell>{material.unit}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="zones">
        <Card>
          <CardHeader>
            <CardTitle>Zones</CardTitle>
            <CardDescription>Manage your project's zones here.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="zone-name">Zone Name</Label>
                  <Input
                    id="zone-name"
                    value={newZone.name || ""}
                    onChange={(e) => setNewZone({ ...newZone, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label>&nbsp;</Label>
                  <Button className="w-full" onClick={handleAddZone}>
                    Add Zone
                  </Button>
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {zones.map((zone) => (
                    <TableRow key={zone.id}>
                      <TableCell>{zone.id}</TableCell>
                      <TableCell>{zone.name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="equipment-usage">
        <Card>
          <CardHeader>
            <CardTitle>Equipment Usage</CardTitle>
            <CardDescription>Track equipment usage across different zones.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-5 gap-4">
                <div>
                  <Label htmlFor="usage-equipment">Equipment</Label>
                  <Select
                    value={newEquipmentUsage.equipmentId?.toString()}
                    onValueChange={(value) =>
                      setNewEquipmentUsage({ ...newEquipmentUsage, equipmentId: Number(value) })
                    }
                  >
                    <SelectTrigger id="usage-equipment">
                      <SelectValue placeholder="Select equipment" />
                    </SelectTrigger>
                    <SelectContent>
                      {equipment.map((item) => (
                        <SelectItem key={item.id} value={item.id.toString()}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="usage-zone">Zone</Label>
                  <Select
                    value={newEquipmentUsage.zoneId?.toString()}
                    onValueChange={(value) => setNewEquipmentUsage({ ...newEquipmentUsage, zoneId: Number(value) })}
                  >
                    <SelectTrigger id="usage-zone">
                      <SelectValue placeholder="Select zone" />
                    </SelectTrigger>
                    <SelectContent>
                      {zones.map((zone) => (
                        <SelectItem key={zone.id} value={zone.id.toString()}>
                          {zone.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="usage-date">Date</Label>
                  <Input
                    id="usage-date"
                    type="date"
                    value={newEquipmentUsage.date || ""}
                    onChange={(e) => setNewEquipmentUsage({ ...newEquipmentUsage, date: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="usage-time">Operating Time (hours)</Label>
                  <Input
                    id="usage-time"
                    type="number"
                    value={newEquipmentUsage.operatingTime || ""}
                    onChange={(e) =>
                      setNewEquipmentUsage({ ...newEquipmentUsage, operatingTime: Number(e.target.value) })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="usage-km">Kilometers (for vehicles)</Label>
                  <Input
                    id="usage-km"
                    type="number"
                    value={newEquipmentUsage.kilometers || ""}
                    onChange={(e) => setNewEquipmentUsage({ ...newEquipmentUsage, kilometers: Number(e.target.value) })}
                  />
                </div>
              </div>
              <Button onClick={handleAddEquipmentUsage}>Add Usage Record</Button>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Equipment</TableHead>
                    <TableHead>Zone</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Operating Time (hours)</TableHead>
                    <TableHead>Kilometers</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {equipmentUsage.map((usage) => (
                    <TableRow key={usage.id}>
                      <TableCell>{equipment.find((e) => e.id === usage.equipmentId)?.name}</TableCell>
                      <TableCell>{zones.find((z) => z.id === usage.zoneId)?.name}</TableCell>
                      <TableCell>{usage.date}</TableCell>
                      <TableCell>{usage.operatingTime || "N/A"}</TableCell>
                      <TableCell>{usage.kilometers || "N/A"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

