"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  BarChart2,
  FileText,
  Settings,
  Truck,
  Database,
  CheckSquare,
  Calendar,
} from "lucide-react"

const sidebarNavItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Production", href: "/production", icon: BarChart2 },
  { name: "Tasks", href: "/tasks", icon: ClipboardList },
  { name: "Resources", href: "/resources", icon: Users },
  { name: "Equipment", href: "/equipment", icon: Truck },
  { name: "Inventory", href: "/inventory", icon: Database },
  { name: "Quality", href: "/quality", icon: CheckSquare },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Planning", href: "/planning", icon: Calendar },
  { name: "Documents", href: "/documents", icon: FileText },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col border-r w-64">
      <div className="p-6">
        <h2 className="text-lg font-semibold">Road Construction Management</h2>
      </div>
      <ScrollArea className="flex-1">
        <div className="space-y-1 p-2">
          {sidebarNavItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant={pathname === item.href ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Link>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </nav>
  )
}

