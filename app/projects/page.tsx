"use client"

import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "Lichess Mobile App",
    description: "Contributing to the development of a new mobile app for the Lichess platform, focusing on improving the user experience and adding new features.",
    image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=1000&auto=format&fit=crop",
    technologies: ["React Native", "TypeScript", "WebSocket", "Chess.js"],
    githubUrl: "https://github.com/lichess-org/mobile"
  },
  {
    title: "Python Algorithms",
    description: "Contributing to TheAlgorithms/Python repository by implementing reference implementations of popular algorithms.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1000&auto=format&fit=crop",
    technologies: ["Python", "Algorithms", "Data Structures"],
    githubUrl: "https://github.com/TheAlgorithms/Python/pull/9001"
  },
  {
    title: "Windows Package Manager",
    description: "Contributed to Microsoft's WinGet Package Manager Repository, helping improve package management on Windows.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    technologies: ["PowerShell", "YAML", "Package Management"],
    githubUrl: "https://github.com/microsoft/winget-pkgs/pull/14648"
  },
  {
    title: "AI Research Project",
    description: "Research project at SIMPA Laboratory focusing on machine learning applications in bioinformatics.",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1000&auto=format&fit=crop",
    technologies: ["Python", "TensorFlow", "Bioinformatics", "Machine Learning"]
  }
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            liveUrl={''}
          />
        ))}
      </div>
    </div>
  )
}