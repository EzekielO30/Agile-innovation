import Link from "next/link"
import { ArrowRight, BarChart2, Flag, LineChart, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <BarChart2 className="h-5 w-5" />
            <span>Agile Visibility Project</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
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
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              About
            </Link>
          </nav>
          <Button asChild>
            <Link href="/dashboard">View Dashboard</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Improving Agile Visibility for Innovation Teams
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A project to reduce delivery friction for Machine Learning and Experimentation teams at Autodesk
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/dashboard">
                      Explore Dashboard Solution
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/research">View Research Findings</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted p-8 grid grid-cols-2 grid-rows-2 gap-4">
                    <div className="bg-background rounded-lg p-4 flex flex-col shadow-lg">
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Zap className="h-5 w-5" />
                        <h3 className="font-semibold">Priority Items</h3>
                      </div>
                      <div className="bg-muted/50 h-24 rounded-md"></div>
                    </div>
                    <div className="bg-background rounded-lg p-4 flex flex-col shadow-lg">
                      <div className="flex items-center gap-2 text-destructive mb-2">
                        <Flag className="h-5 w-5" />
                        <h3 className="font-semibold">Active Blockers</h3>
                      </div>
                      <div className="bg-muted/50 h-24 rounded-md"></div>
                    </div>
                    <div className="bg-background rounded-lg p-4 flex flex-col shadow-lg">
                      <div className="flex items-center gap-2 text-green-600 mb-2">
                        <LineChart className="h-5 w-5" />
                        <h3 className="font-semibold">Team Progress</h3>
                      </div>
                      <div className="bg-muted/50 h-24 rounded-md"></div>
                    </div>
                    <div className="bg-background rounded-lg p-4 flex flex-col shadow-lg">
                      <div className="flex items-center gap-2 text-amber-600 mb-2">
                        <BarChart2 className="h-5 w-5" />
                        <h3 className="font-semibold">Sprint Carryover</h3>
                      </div>
                      <div className="bg-muted/50 h-24 rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Project Overview</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  As a Program Manager Intern at Autodesk, I led a project to improve Agile visibility and reduce
                  delivery friction for innovation-focused teams.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Challenge Identification</h3>
                      <p className="text-muted-foreground">
                        Through stakeholder interviews and internal surveys, I identified key challenges teams faced
                        with Agile workflows.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Data Analysis</h3>
                      <p className="text-muted-foreground">
                        Used Jira and Faros dashboards to analyze current workflows and identify improvement
                        opportunities.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Solution Design</h3>
                      <p className="text-muted-foreground">
                        Designed a lightweight, no-code dashboard solution with four actionable panels to improve
                        visibility.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Key Challenges</h3>
                      <p className="text-muted-foreground">
                        • Lack of visibility into active blockers
                        <br />• Difficulty tracking progress across squads
                        <br />• Rigid Agile structure unsuited for experimental workflows
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Outcome</h3>
                      <p className="text-muted-foreground">
                        Created prototype dashboards that surfaced essential sprint health insights without introducing
                        extra meetings or manual work.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Dashboard Solution</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A lightweight, no-code dashboard with four actionable panels to improve Agile visibility.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-8 py-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Priority Items Tracker</h3>
                <p className="text-center text-muted-foreground">
                  Surfaces high-priority tasks that require immediate attention across teams.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                  <Flag className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Active Blockers Panel</h3>
                <p className="text-center text-muted-foreground">
                  Highlights current blockers impacting team progress with ownership and status.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <LineChart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Team Progress Snapshot</h3>
                <p className="text-center text-muted-foreground">
                  Visualizes current sprint progress across all teams with completion metrics.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <BarChart2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Sprint Carryover Trend</h3>
                <p className="text-center text-muted-foreground">
                  Tracks items carried over between sprints to identify recurring bottlenecks.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Button asChild size="lg">
                <Link href="/dashboard">
                  Explore Full Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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
