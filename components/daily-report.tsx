"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

type Activity = {
  id: string
  task: string
  quantity: number
  unit: string
}

type Personnel = {
  id: string
  name: string
  role: string
  hours: number
}

type Equipment = {
  id: string
  name: string
  hours: number
}

type DailyReportData = {
  date: string
  activities: Activity[]
  personnel: Personnel[]
  equipment: Equipment[]
  notes: string
}

export function DailyReport({ className }: { className?: string }) {//export function DailyReport() {
  const [report, setReport] = useState<DailyReportData>({
    date: new Date().toISOString().split("T")[0],
    activities: [],
    personnel: [],
    equipment: [],
    notes: "",
  })

  const addActivity = (activity: Activity) => {
    setReport((prev) => ({
      ...prev,
      activities: [...prev.activities, activity],
    }))
  }

  const addPersonnel = (person: Personnel) => {
    setReport((prev) => ({
      ...prev,
      personnel: [...prev.personnel, person],
    }))
  }

  const addEquipment = (equipment: Equipment) => {
    setReport((prev) => ({
      ...prev,
      equipment: [...prev.equipment, equipment],
    }))
  }

  const handleSubmit = () => {
    console.log("Submitting report:", report)
    // Here you would typically send the report to your backend
  }

  return (
    <Card className="w-full max-w-[1200px] mx-auto">
      <CardHeader>
        <CardTitle>Daily Report</CardTitle>
        <CardDescription>Record daily activities and resource usage</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="activities">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="personnel">Personnel</TabsTrigger>
            <TabsTrigger value="equipment">Equipment</TabsTrigger>
            <TabsTrigger value="summary">Summary</TabsTrigger>
          </TabsList>
          <TabsContent value="activities">
            <ActivityForm onAdd={addActivity} />
            <ActivityList activities={report.activities} />
          </TabsContent>
          <TabsContent value="personnel">
            <PersonnelForm onAdd={addPersonnel} />
            <PersonnelList personnel={report.personnel} />
          </TabsContent>
          <TabsContent value="equipment">
            <EquipmentForm onAdd={addEquipment} />
            <EquipmentList equipment={report.equipment} />
          </TabsContent>
          <TabsContent value="summary">
            <div className="space-y-4">
              <div>
                <Label htmlFor="report-date">Report Date</Label>
                <Input
                  id="report-date"
                  type="date"
                  value={report.date}
                  onChange={(e) => setReport((prev) => ({ ...prev, date: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="report-notes">Notes</Label>
                <Textarea
                  id="report-notes"
                  value={report.notes}
                  onChange={(e) => setReport((prev) => ({ ...prev, notes: e.target.value }))}
                />
              </div>
              <Button onClick={handleSubmit}>Submit Report</Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function ActivityForm({ onAdd }: { onAdd: (activity: Activity) => void }) {
  const [activity, setActivity] = useState<Activity>({ id: "", task: "", quantity: 0, unit: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAdd({ ...activity, id: Date.now().toString() })
    setActivity({ id: "", task: "", quantity: 0, unit: "" })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="activity-task">Task</Label>
          <Input
            id="activity-task"
            value={activity.task}
            onChange={(e) => setActivity((prev) => ({ ...prev, task: e.target.value }))}
            required
          />
        </div>
        <div>
          <Label htmlFor="activity-quantity">Quantity</Label>
          <Input
            id="activity-quantity"
            type="number"
            value={activity.quantity}
            onChange={(e) => setActivity((prev) => ({ ...prev, quantity: Number(e.target.value) }))}
            required
          />
        </div>
        <div>
          <Label htmlFor="activity-unit">Unit</Label>
          <Input
            id="activity-unit"
            value={activity.unit}
            onChange={(e) => setActivity((prev) => ({ ...prev, unit: e.target.value }))}
            required
          />
        </div>
      </div>
      <Button type="submit">Add Activity</Button>
    </form>
  )
}

function ActivityList({ activities }: { activities: Activity[] }) {
  return (
    <div className="mt-4">
      <h4 className="mb-2 font-semibold">Recorded Activities</h4>
      {activities.map((activity) => (
        <div key={activity.id} className="mb-2">
          {activity.task}: {activity.quantity} {activity.unit}
        </div>
      ))}
    </div>
  )
}

function PersonnelForm({ onAdd }: { onAdd: (person: Personnel) => void }) {
  const [person, setPerson] = useState<Personnel>({ id: "", name: "", role: "", hours: 0 })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAdd({ ...person, id: Date.now().toString() })
    setPerson({ id: "", name: "", role: "", hours: 0 })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="person-name">Name</Label>
          <Input
            id="person-name"
            value={person.name}
            onChange={(e) => setPerson((prev) => ({ ...prev, name: e.target.value }))}
            required
          />
        </div>
        <div>
          <Label htmlFor="person-role">Role</Label>
          <Input
            id="person-role"
            value={person.role}
            onChange={(e) => setPerson((prev) => ({ ...prev, role: e.target.value }))}
            required
          />
        </div>
        <div>
          <Label htmlFor="person-hours">Hours Worked</Label>
          <Input
            id="person-hours"
            type="number"
            value={person.hours}
            onChange={(e) => setPerson((prev) => ({ ...prev, hours: Number(e.target.value) }))}
            required
          />
        </div>
      </div>
      <Button type="submit">Add Personnel</Button>
    </form>
  )
}

function PersonnelList({ personnel }: { personnel: Personnel[] }) {
  return (
    <div className="mt-4">
      <h4 className="mb-2 font-semibold">Recorded Personnel</h4>
      {personnel.map((person) => (
        <div key={person.id} className="mb-2">
          {person.name} ({person.role}): {person.hours} hours
        </div>
      ))}
    </div>
  )
}

function EquipmentForm({ onAdd }: { onAdd: (equipment: Equipment) => void }) {
  const [equipment, setEquipment] = useState<Equipment>({ id: "", name: "", hours: 0 })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAdd({ ...equipment, id: Date.now().toString() })
    setEquipment({ id: "", name: "", hours: 0 })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="equipment-name">Equipment Name</Label>
          <Input
            id="equipment-name"
            value={equipment.name}
            onChange={(e) => setEquipment((prev) => ({ ...prev, name: e.target.value }))}
            required
          />
        </div>
        <div>
          <Label htmlFor="equipment-hours">Hours Used</Label>
          <Input
            id="equipment-hours"
            type="number"
            value={equipment.hours}
            onChange={(e) => setEquipment((prev) => ({ ...prev, hours: Number(e.target.value) }))}
            required
          />
        </div>
      </div>
      <Button type="submit">Add Equipment</Button>
    </form>
  )
}

function EquipmentList({ equipment }: { equipment: Equipment[] }) {
  return (
    <div className="mt-4">
      <h4 className="mb-2 font-semibold">Recorded Equipment</h4>
      {equipment.map((item) => (
        <div key={item.id} className="mb-2">
          {item.name}: {item.hours} hours
        </div>
      ))}
    </div>
  )
}
