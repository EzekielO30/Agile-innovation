import Link from "next/link"
import { ArrowLeft, BarChart2, FileText, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ResearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <BarChart2 className="h-5 w-5" />
            <span>Agile Visibility Project</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/research" className="text-sm font-medium transition-colors hover:text-primary">
              Research
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Dashboard
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Research & Findings</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A comprehensive analysis of Agile challenges faced by innovation-focused teams at Autodesk
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-8 py-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Stakeholder Interviews
                  </CardTitle>
                  <CardDescription>
                    Conducted interviews with team leads, developers, and product managers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Key Insights</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Teams struggled with visibility into what other squads were working on</li>
                      <li>Blockers were often discovered too late in the sprint cycle</li>
                      <li>Traditional Agile ceremonies felt too rigid for experimental work</li>
                      <li>Managers lacked easy access to sprint health metrics</li>
                      <li>Teams wanted more autonomy in how they tracked and reported progress</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Internal Survey Results
                  </CardTitle>
                  <CardDescription>Quantitative data from 35+ team members across 5 innovation squads</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Survey Highlights</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <h4 className="font-medium">Top Challenges</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Lack of visibility into active blockers (87%)</li>
                          <li>Difficulty tracking progress across squads (76%)</li>
                          <li>Rigid Agile structure unsuited for ML work (72%)</li>
                          <li>Too many status meetings (68%)</li>
                          <li>Manual reporting overhead (65%)</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Desired Improvements</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Real-time visibility into blockers (92%)</li>
                          <li>Automated progress tracking (85%)</li>
                          <li>Reduced meeting overhead (79%)</li>
                          <li>Better cross-team coordination (74%)</li>
                          <li>Flexible sprint planning for experiments (71%)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart2 className="h-5 w-5" />
                    Workflow Analysis
                  </CardTitle>
                  <CardDescription>Data from Jira and Faros dashboards across multiple sprints</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Key Findings</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Sprint Completion Patterns</h4>
                        <p className="text-muted-foreground mt-1">
                          Analysis showed an average of 32% of sprint items were carried over to subsequent sprints,
                          with blockers being identified late in the sprint cycle as the primary cause.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Blocker Resolution Time</h4>
                        <p className="text-muted-foreground mt-1">
                          Blockers took an average of 3.5 days to resolve, with 40% of that time spent simply waiting
                          for the blocker to be discovered and assigned to the right owner.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Meeting Overhead</h4>
                        <p className="text-muted-foreground mt-1">
                          Teams spent an average of 6.5 hours per week in Agile ceremonies, with 42% of that time
                          focused on status updates that could be automated.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button asChild size="lg">
                <Link href="/dashboard">View Dashboard Solution</Link>
              </Button>
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
