"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const objectives = [
  { name: "Road Completion", percentage: 75 },
  { name: "Budget Adherence", percentage: 90 },
  { name: "Safety Compliance", percentage: 95 },
  { name: "Environmental Standards", percentage: 85 },
]

export function ObjectivesAchievement() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Objectives Achievement</CardTitle>
        <CardDescription>Progress towards key project objectives</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {objectives.map((objective) => (
            <div key={objective.name}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{objective.name}</span>
                <span className="text-sm font-medium">{objective.percentage}%</span>
              </div>
              <Progress value={objective.percentage} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

