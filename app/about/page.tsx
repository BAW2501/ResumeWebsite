"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GraduationCap, Briefcase, Award, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <Card className="p-6">
          <p className="text-lg leading-relaxed mb-4">
            I am a dedicated Full-Stack Web Developer with a profound passion
            for artificial intelligence. Holding a Master degree in Artificial
            Intelligence, my mission is to integrate AI seamlessly into web
            applications.
          </p>
          <p className="text-lg leading-relaxed">
            As a continuous learner and innovative problem solver, I strive to
            push boundaries and tackle new challenges with a proactive approach.
          </p>
        </Card>
      </section>

      <section className="mb-12">
        <div className="flex items-center mb-6">
          <GraduationCap className="w-6 h-6 mr-2" />
          <h2 className="text-3xl font-bold">Education</h2>
        </div>
        <ScrollArea className="h-[400px] rounded-md border p-4">
          <div className="space-y-6">
            <Card className="p-4">
              <h3 className="text-xl font-semibold">
                Master&apos;s degree in Artificial Intelligence
              </h3>
              <p className="text-muted-foreground">
                Sciences and Technology University of Oran - Mohamed Boudiaf
                (USTO-MB)
              </p>
              <p className="text-sm">2021 - 2023</p>
              <p className="mt-2">Score: 14.55/20</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Machine Learning",
                  "Deep Learning",
                  "Data Science",
                  "NLP",
                  "Computer Vision",
                ].map((course) => (
                  <Badge key={course} variant="secondary">
                    {course}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="text-xl font-semibold">
                Bachelor&apos;s degree in Computer Science
              </h3>
              <p className="text-muted-foreground">
                University of Mostaganem Abdel-Hamid ibn Badis (UMAB)
              </p>
              <p className="text-sm">2018 - 2021</p>
              <p className="mt-2">Score: 15.55/20</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Web Development",
                  "Algorithms",
                  "Databases",
                  "Software Engineering",
                ].map((course) => (
                  <Badge key={course} variant="secondary">
                    {course}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </ScrollArea>
      </section>

      <section className="mb-12">
        <div className="flex items-center mb-6">
          <Briefcase className="w-6 h-6 mr-2" />
          <h2 className="text-3xl font-bold">Work Experience</h2>
        </div>
        <div className="space-y-6">
          <Card className="p-4">
            <h3 className="text-xl font-semibold">Full-stack Developer</h3>
            <p className="text-muted-foreground">Genius Data</p>
            <p className="text-sm">Oct 2023 - Present</p>
            <p className="mt-2">
              Full Stack Development using Springboot/Angular stack
            </p>
          </Card>

          <Card className="p-4">
            <h3 className="text-xl font-semibold">Research Assistant</h3>
            <p className="text-muted-foreground">SIMPA Laboratory</p>
            <p className="text-sm">Jan 2023 - May 2023</p>
            <p className="mt-2">
              Research Assistant internship in the title of a Master&apos;s
              thesis
            </p>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center mb-6">
          <Award className="w-6 h-6 mr-2" />
          <h2 className="text-3xl font-bold">Skills</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            "NestJS",
            "Angular",
            "RxJS",
            "AWS",
            "TensorFlow",
            "Python",
            "Machine Learning",
            "Full-Stack Development",
            "SQL",
            "Git",
            "Vue.js",
            "Laravel",
            "Artificial Intelligence",
          ].map((skill) => (
            <Badge key={skill} variant="outline" className="text-lg py-2">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center mb-6">
          <Heart className="w-6 h-6 mr-2" />
          <h2 className="text-3xl font-bold">Interests</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Chess",
            "Machine Learning",
            "Artificial Intelligence",
            "Data Science",
            "Web Development",
            "Bioinformatics",
          ].map((interest) => (
            <Card key={interest} className="p-4">
              <p className="text-lg font-medium">{interest}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
