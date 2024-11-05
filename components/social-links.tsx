"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/BAW2501",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/belhadjwalid/",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:belhadj.ahmedwalid1@gmail.com",
    icon: Mail,
  },
]

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <Button
          key={link.name}
          variant="outline"
          size="icon"
          asChild
        >
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
          >
            <link.icon className="h-5 w-5" />
          </a>
        </Button>
      ))}
    </div>
  )
}