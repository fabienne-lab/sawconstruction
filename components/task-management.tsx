"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Task = {
  id: number
  name: string
  description: string
  status: "Not Started" | "In Progress" | "Completed"
  priority: "Low" | "Medium" | "High"
  assignee: string
  dueDate: string
}

const initialTasks: Task[] = [
  {
    id: 1,
    name: "Excavation",
    description: "Excavate the site for foundation",
    status: "In Progress",
    priority: "High",
    assignee: "John Doe",
    dueDate: "2023-07-15",
  },
  {
    id: 2,
    name: "Foundation",
    description: "Lay the foundation",
    status: "Not Started",
    priority: "Medium",
    assignee: "Jane Smith",
    dueDate: "2023-07-30",
  },
  {
    id: 3,
    name: "Paving",
    description: "Pave the road surface",
    status: "Not Started",
    priority: "Low",
    assignee: "Bob Johnson",
    dueDate: "2023-08-15",
  },
]

export function TaskManagement() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [newTask, setNewTask] = useState<Partial<Task>>({})

  const handleAddTask = () => {
    if (newTask.name && newTask.assignee) {
      setTasks([...tasks, { ...newTask, id: tasks.length + 1 } as Task])
      setNewTask({})
    }
  }

  const handleUpdateTaskStatus = (taskId: number, newStatus: Task["status"]) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, status: newStatus } : task)))
  }

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">Task Management</h2>
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Tasks</TabsTrigger>
          <TabsTrigger value="add">Add New Task</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>Task List</CardTitle>
              <CardDescription>View and manage all project tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Assignee</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tasks.map((task) => (
                    <TableRow key={task.id}>
                      <TableCell>{task.name}</TableCell>
                      <TableCell>{task.description}</TableCell>
                      <TableCell>{task.status}</TableCell>
                      <TableCell>{task.priority}</TableCell>
                      <TableCell>{task.assignee}</TableCell>
                      <TableCell>{task.dueDate}</TableCell>
                      <TableCell>
                        <Select
                          value={task.status}
                          onValueChange={(value) => handleUpdateTaskStatus(task.id, value as Task["status"])}
                        >
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Update Status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Not Started">Not Started</SelectItem>
                            <SelectItem value="In Progress">In Progress</SelectItem>
                            <SelectItem value="Completed">Completed</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="add">
          <Card>
            <CardHeader>
              <CardTitle>Add New Task</CardTitle>
              <CardDescription>Create a new task for the project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={newTask.name || ""}
                      onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="assignee">Assignee</Label>
                    <Input
                      id="assignee"
                      value={newTask.assignee || ""}
                      onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    value={newTask.description || ""}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="status">Status</Label>
                    <Select
                      value={newTask.status}
                      onValueChange={(value) => setNewTask({ ...newTask, status: value as Task["status"] })}
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
                    <Label htmlFor="priority">Priority</Label>
                    <Select
                      value={newTask.priority}
                      onValueChange={(value) => setNewTask({ ...newTask, priority: value as Task["priority"] })}
                    >
                      <SelectTrigger id="priority">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Low">Low</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="High">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="dueDate">Due Date</Label>
                    <Input
                      id="dueDate"
                      type="date"
                      value={newTask.dueDate || ""}
                      onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                    />
                  </div>
                </div>
                <Button onClick={handleAddTask}>Add Task</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

