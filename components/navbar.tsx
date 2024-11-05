"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Home, User, Briefcase, Mail } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  
  const routes = [
    {
      href: "/",
      label: "Home",
      icon: Home,
      active: pathname === "/"
    },
    {
      href: "/about",
      label: "About",
      icon: User,
      active: pathname === "/about"
    },
    {
      href: "/projects",
      label: "Projects",
      icon: Briefcase,
      active: pathname === "/projects"
    },
    {
      href: "/contact",
      label: "Contact",
      icon: Mail,
      active: pathname === "/contact"
    }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center">
        <div className="mr-8">
          <Link href="/" className="text-xl font-bold">
            Ahmed Walid
          </Link>
        </div>
        <div className="flex items-center space-x-4 lg:space-x-6">
          {routes.map((route) => {
            const Icon = route.icon
            return (
              <Button
                key={route.href}
                variant={route.active ? "default" : "ghost"}
                asChild
              >
                <Link href={route.href} className="flex items-center space-x-2">
                  <Icon className="h-4 w-4" />
                  <span>{route.label}</span>
                </Link>
              </Button>
            )
          })}
        </div>
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </nav>
    </header>
  )
}