"use client"

import { ContactForm } from "@/components/contact-form"
import { SocialLinks } from "@/components/social-links"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
        
        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Me</CardTitle>
              <CardDescription>
                Fill out the form below or reach out through social media.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Connect on Social Media</CardTitle>
              <CardDescription>
                Find me on these platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SocialLinks />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}