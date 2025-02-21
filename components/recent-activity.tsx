import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const recentActivity = [
  {
    id: "1",
    title: "Task Completed",
    description: "John Doe completed the excavation task",
    date: "2 hours ago",
  },
  {
    id: "2",
    title: "New Equipment Added",
    description: "New excavator (EX-2023) added to the inventory",
    date: "5 hours ago",
  },
  {
    id: "3",
    title: "Budget Update",
    description: "Project budget increased by $500,000",
    date: "1 day ago",
  },
  {
    id: "4",
    title: "Safety Incident Report",
    description: "Minor incident reported at Site B, no injuries",
    date: "2 days ago",
  },
]

export function RecentActivity({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest updates and events in the project</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {recentActivity.map((item) => (
            <div key={item.id} className="flex items-center">
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <p className="text-xs text-muted-foreground">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

