"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

type InventoryItem = {
  id: string
  name: string
  category: string
  quantity: number
  unit: string
  lastUpdated: string
  minimumStock: number
}

const initialInventory: InventoryItem[] = [
  {
    id: "1",
    name: "Cement",
    category: "Building Materials",
    quantity: 1000,
    unit: "bags",
    lastUpdated: "2023-06-15",
    minimumStock: 500,
  },
  {
    id: "2",
    name: "Steel Rebar",
    category: "Metals",
    quantity: 500,
    unit: "tons",
    lastUpdated: "2023-06-14",
    minimumStock: 200,
  },
  {
    id: "3",
    name: "Gravel",
    category: "Aggregates",
    quantity: 2000,
    unit: "cubic meters",
    lastUpdated: "2023-06-13",
    minimumStock: 1000,
  },
]

const categories = ["Building Materials", "Metals", "Aggregates", "Tools", "Safety Equipment"]

export function InventoryManagement() {
  const [inventory, setInventory] = useState<InventoryItem[]>(initialInventory)
  const [newItem, setNewItem] = useState<Partial<InventoryItem>>({})
  const [filter, setFilter] = useState("all")

  const handleAddItem = () => {
    if (newItem.name && newItem.category && newItem.quantity && newItem.unit && newItem.minimumStock) {
      setInventory([
        ...inventory,
        {
          ...newItem,
          id: Date.now().toString(),
          lastUpdated: new Date().toISOString().split("T")[0],
        } as InventoryItem,
      ])
      setNewItem({})
    }
  }

  const filteredInventory = filter === "all" ? inventory : inventory.filter((item) => item.category === filter)

  const chartData = categories.map((category) => ({
    category,
    quantity: inventory.filter((item) => item.category === category).reduce((sum, item) => sum + item.quantity, 0),
  }))

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Inventory Management</CardTitle>
          <CardDescription>Manage and track your construction materials and supplies</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="list">
            <TabsList>
              <TabsTrigger value="list">Inventory List</TabsTrigger>
              <TabsTrigger value="add">Add Item</TabsTrigger>
              <TabsTrigger value="chart">Inventory Chart</TabsTrigger>
            </TabsList>
            <TabsContent value="list">
              <div className="space-y-4">
                <Select value={filter} onValueChange={setFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Unit</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Minimum Stock</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredInventory.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{item.unit}</TableCell>
                        <TableCell>{item.lastUpdated}</TableCell>
                        <TableCell>{item.minimumStock}</TableCell>
                        <TableCell>
                          {item.quantity > item.minimumStock ? (
                            <span className="text-green-500">In Stock</span>
                          ) : (
                            <span className="text-red-500">Low Stock</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="add">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="item-name">Name</Label>
                    <Input
                      id="item-name"
                      value={newItem.name || ""}
                      onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="item-category">Category</Label>
                    <Select onValueChange={(value) => setNewItem({ ...newItem, category: value })}>
                      <SelectTrigger id="item-category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="item-quantity">Quantity</Label>
                    <Input
                      id="item-quantity"
                      type="number"
                      value={newItem.quantity || ""}
                      onChange={(e) => setNewItem({ ...newItem, quantity: Number(e.target.value) })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="item-unit">Unit</Label>
                    <Input
                      id="item-unit"
                      value={newItem.unit || ""}
                      onChange={(e) => setNewItem({ ...newItem, unit: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="item-minimum-stock">Minimum Stock</Label>
                    <Input
                      id="item-minimum-stock"
                      type="number"
                      value={newItem.minimumStock || ""}
                      onChange={(e) => setNewItem({ ...newItem, minimumStock: Number(e.target.value) })}
                    />
                  </div>
                </div>
                <Button onClick={handleAddItem}>Add Item</Button>
              </div>
            </TabsContent>
            <TabsContent value="chart">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="quantity" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

