"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code2, Brain, Database } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Image
            src="https://avatars.githubusercontent.com/u/80895522"
            alt="Ahmed Walid Belhadj"
            width={150}
            height={150}
            className="rounded-full"
          />
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Ahmed Walid Belhadj
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Full-Stack Web Developer & AI Engineer
          </p>
          <div className="space-x-4">
            <Button asChild>
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Skills
          </h2>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Card className="flex flex-col items-center justify-center p-6">
            <Code2 className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold">Web Development</h3>
            <p className="text-sm text-muted-foreground text-center mt-2">
              Angular, NestJS, Spring Boot, React
            </p>
          </Card>
          <Card className="flex flex-col items-center justify-center p-6">
            <Brain className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold">AI & ML</h3>
            <p className="text-sm text-muted-foreground text-center mt-2">
              TensorFlow, scikit-learn, PyTorch
            </p>
          </Card>
          <Card className="flex flex-col items-center justify-center p-6">
            <Database className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold">Data Science</h3>
            <p className="text-sm text-muted-foreground text-center mt-2">
              Python, SQL, Data Analysis
            </p>
          </Card>
        </div>
      </section>

      <section className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Featured Projects
          </h2>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2">
          {/* Add your featured projects here */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-2">Lichess Mobile App</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge>Flutter</Badge>
              <Badge>Dart</Badge>
              <Badge>Chess</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Contributing to the development of a new mobile app for the Lichess platform
            </p>
            <Button variant="outline" className="w-full" asChild>
              <Link href="https://lichess.org">View Project</Link>
            </Button>
          </Card>
          {/* Add more featured projects */}
        </div>
      </section>
    </div>
  )
}