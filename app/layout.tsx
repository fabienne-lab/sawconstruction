import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { MainNav } from "@/components/main-nav"
import { Search } from "@/components/search"
import { UserNav } from "@/components/user-nav"
import { SidebarNav } from "@/components/sidebar-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Road Construction Management",
  description: "Comprehensive application for road construction project management",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex h-screen overflow-hidden">
            <SidebarNav />
            <div className="flex-1 overflow-auto">
              <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center">
                  <MainNav />
                  <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <Search />
                    <UserNav />
                  </div>
                </div>
              </header>
              <main className="flex-1 space-y-4 p-8 pt-6">{children}</main>
            </div>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'

// import { Inter } from "next/font/google"
// import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider"
// import { Toaster } from "@/components/ui/toaster"
// import type React from "react" // Added import for React

// const inter = Inter({ subsets: ["latin"] })

// export const metadata = {
//   title: "RoadConstruct Pro",
//   description: "Revolutionize Your Road Construction Projects",
// }

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
//           {children}
//           <Toaster />
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }