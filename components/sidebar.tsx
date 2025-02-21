"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LayoutDashboard, ClipboardList, Users, Box, BarChart2, FileText, Settings, MapPin } from "lucide-react"

const sidebarItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Tasks", href: "/tasks", icon: ClipboardList },
  { name: "Resources", href: "/resources", icon: Users },
  { name: "Quality", href: "/quality", icon: Box },
  { name: "Production", href: "/production", icon: BarChart2 },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Earthworks", href: "/earthworks", icon: MapPin },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className={cn("flex flex-col border-r", isCollapsed ? "w-16" : "w-64")}>
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && <h2 className="text-lg font-semibold">RCM</h2>}
        <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? "→" : "←"}
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-2 p-2">
          {sidebarItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                pathname === item.href ? "bg-secondary text-secondary-foreground" : "hover:bg-secondary/50",
              )}
            >
              <item.icon className="h-4 w-4" />
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>
      </ScrollArea>
    </div>
  )
}

