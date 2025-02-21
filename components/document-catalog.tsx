"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Document = {
  id: string
  name: string
  type: "Contract" | "Technical" | "Report"
  uploadDate: string
  uploadedBy: string
}

const initialDocuments: Document[] = [
  { id: "1", name: "Project Contract", type: "Contract", uploadDate: "2023-06-01", uploadedBy: "John Doe" },
  { id: "2", name: "Soil Analysis Report", type: "Technical", uploadDate: "2023-06-15", uploadedBy: "Jane Smith" },
  { id: "3", name: "Monthly Progress Report", type: "Report", uploadDate: "2023-06-30", uploadedBy: "Bob Johnson" },
]

export function DocumentCatalog() {
  const [documents, setDocuments] = useState<Document[]>(initialDocuments)
  const [newDocument, setNewDocument] = useState<Partial<Document>>({})

  const handleAddDocument = () => {
    if (newDocument.name && newDocument.type) {
      setDocuments([
        ...documents,
        {
          ...newDocument,
          id: Date.now().toString(),
          uploadDate: new Date().toISOString().split("T")[0],
          uploadedBy: "Current User", // This should be replaced with the actual logged-in user
        } as Document,
      ])
      setNewDocument({})
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Document Catalog</CardTitle>
        <CardDescription>Manage and access project documents</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="document-name">Document Name</Label>
              <Input
                id="document-name"
                value={newDocument.name || ""}
                onChange={(e) => setNewDocument({ ...newDocument, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="document-type">Document Type</Label>
              <Select
                value={newDocument.type}
                onValueChange={(value) =>
                  setNewDocument({ ...newDocument, type: value as "Contract" | "Technical" | "Report" })
                }
              >
                <SelectTrigger id="document-type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Contract">Contract</SelectItem>
                  <SelectItem value="Technical">Technical</SelectItem>
                  <SelectItem value="Report">Report</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="File-type">Document Type</Label>
              <Select
                value={newDocument.type}
                onValueChange={(value) =>
                  setNewDocument({ ...newDocument, type: value as "Contract" | "Technical" | "Report" })
                }
              >
                <SelectTrigger id="document-type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Contract">Contract</SelectItem>
                  <SelectItem value="Technical">Technical</SelectItem>
                  <SelectItem value="Report">Report</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>&nbsp;</Label>
              <Button className="w-full" onClick={handleAddDocument}>
                Add Document
              </Button>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Upload Date</TableHead>
                <TableHead>Uploaded By</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>{doc.name}</TableCell>
                  <TableCell>{doc.type}</TableCell>
                  <TableCell>{doc.uploadDate}</TableCell>
                  <TableCell>{doc.uploadedBy}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

