"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

type StockItem = {
  id: number
  name: string
  quantity: number
  unit: string
  lastUpdated: string
}

const initialStock: StockItem[] = [
  { id: 1, name: "Cement", quantity: 1000, unit: "bags", lastUpdated: "2023-06-01" },
  { id: 2, name: "Steel", quantity: 500, unit: "tons", lastUpdated: "2023-06-02" },
  { id: 3, name: "Gravel", quantity: 2000, unit: "m³", lastUpdated: "2023-06-03" },
]

export function StockMonitoring() {
  const [stock, setStock] = useState<StockItem[]>(initialStock)
  const [newItem, setNewItem] = useState<Partial<StockItem>>({})

  const handleAddItem = () => {
    if (newItem.name && newItem.quantity && newItem.unit) {
      setStock([
        ...stock,
        {
          ...newItem,
          id: stock.length + 1,
          lastUpdated: new Date().toISOString().split("T")[0],
        } as StockItem,
      ])
      setNewItem({})
    }
  }

  const handleUpdateStock = (id: number, change: number) => {
    setStock(
      stock.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(0, item.quantity + change),
              lastUpdated: new Date().toISOString().split("T")[0],
            }
          : item,
      ),
    )
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Stock Monitoring</CardTitle>
          <CardDescription>Monitor and manage stock levels</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-4">
              <div>
                <Label htmlFor="item-name">Item Name</Label>
                <Input
                  id="item-name"
                  value={newItem.name || ""}
                  onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                />
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
                <Label>&nbsp;</Label>
                <Button className="w-full" onClick={handleAddItem}>
                  Add Item
                </Button>
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Unit</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stock.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.unit}</TableCell>
                    <TableCell>{item.lastUpdated}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button onClick={() => handleUpdateStock(item.id, 1)}>+</Button>
                        <Button onClick={() => handleUpdateStock(item.id, -1)}>-</Button>
                      </div>
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

