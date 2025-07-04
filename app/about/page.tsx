import Link from "next/link"
import { ArrowLeft, BarChart2, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <BarChart2 className="h-5 w-5" />
            <span>Agile Innovation Project</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Home
            </Link>
            <Link
              href="/research"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Research
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Dashboard
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
          </nav>
          <Button asChild variant="outline" size="sm">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About the Project</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn more about the Agile Visibility Project and the skills demonstrated
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-8 py-12">
              <Card>
                <CardHeader>
                  <CardTitle>Project Overview</CardTitle>
                  <CardDescription>
                    A comprehensive solution to improve Agile visibility for innovation teams
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>
                      As a Program Manager Intern at Autodesk, I led a project to improve Agile visibility and reduce
                      delivery friction for innovation-focused teams working in Machine Learning and Experimentation.
                    </p>
                    <p>
                      Through stakeholder interviews and a targeted internal survey, I identified key challenges teams
                      faced: lack of visibility into active blockers, difficulty tracking progress across squads, and a
                      rigid Agile structure that didn't suit experimental workflows.
                    </p>
                    <p>
                      I used Jira and Faros dashboards to analyze current workflows and designed a lightweight, no-code
                      dashboard solution with four actionable panels:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>🔥 Priority Items Tracker</li>
                      <li>🚩 Active Blockers Panel</li>
                      <li>📈 Team Progress Snapshot</li>
                      <li>🔁 Sprint Carryover Trend</li>
                    </ul>
                    <p>
                      Using filtered real data, I created prototype dashboards that surfaced essential sprint health
                      insights — all without introducing extra meetings or manual work.
                    </p>
                    <p>
                      This project emphasized user empathy, tool adaptability, and a strong product mindset — delivering
                      value even in a constrained technical environment.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Skills Demonstrated</CardTitle>
                  <CardDescription>Key competencies showcased in this project</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h3 className="font-semibold">Technical Skills</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Data analysis and visualization</li>
                        <li>Dashboard design and implementation</li>
                        <li>Jira and Faros data integration</li>
                        <li>Agile methodology adaptation</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">Soft Skills</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>User research and empathy</li>
                        <li>Stakeholder management</li>
                        <li>Cross-functional collaboration</li>
                        <li>Problem-solving and critical thinking</li>
                        <li>Effective communication</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Get in touch to learn more about this project</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                    <Button variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
                      <a href="mailto:oyebodeezekiel3@gmail.com" target="_blank" rel="noopener noreferrer">

                        <Mail className="mr-2 h-4 w-4" />
                        Email
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
                      <a href="https://www.linkedin.com/in/ezekieloyebode30/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
                      <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            Agile Visibility Project — Program Manager Intern at Autodesk
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
