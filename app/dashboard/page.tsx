"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, BarChart2, Flag, LineChart, RefreshCw, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  const [refreshing, setRefreshing] = useState(false)

  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => setRefreshing(false), 1000)
  }

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
            <Link
              href="/research"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Research
            </Link>
            <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
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
        <div className="container py-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Agile Visibility Dashboard</h1>
            <Button variant="outline" size="sm" onClick={handleRefresh} disabled={refreshing}>
              <RefreshCw className={`mr-2 h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
              Refresh Data
            </Button>
          </div>

          <Tabs defaultValue="current-sprint">
            <TabsList className="mb-6">
              <TabsTrigger value="current-sprint">Current Sprint</TabsTrigger>
              <TabsTrigger value="historical">Historical Data</TabsTrigger>
              <TabsTrigger value="team-view">Team View</TabsTrigger>
            </TabsList>

            <TabsContent value="current-sprint" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Sprint Progress</CardTitle>
                    <LineChart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">68%</div>
                    <p className="text-xs text-muted-foreground">Sprint 24 (Day 8 of 14)</p>
                    <Progress value={68} className="mt-2" />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Active Blockers</CardTitle>
                    <Flag className="h-4 w-4 text-destructive" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4</div>
                    <p className="text-xs text-muted-foreground">2 high, 2 medium priority</p>
                    <div className="mt-2 text-xs">
                      <div className="flex justify-between text-destructive">
                        <span>API Integration Issue</span>
                        <span>2d</span>
                      </div>
                      <div className="flex justify-between text-destructive">
                        <span>ML Model Training</span>
                        <span>1d</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Priority Items</CardTitle>
                    <Zap className="h-4 w-4 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">7</div>
                    <p className="text-xs text-muted-foreground">3 at risk</p>
                    <div className="mt-2 text-xs">
                      <div className="flex justify-between">
                        <span>Feature A Deployment</span>
                        <span className="text-amber-500">At Risk</span>
                      </div>
                      <div className="flex justify-between">
                        <span>User Testing</span>
                        <span className="text-green-500">On Track</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Sprint Carryover</CardTitle>
                    <BarChart2 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24%</div>
                    <p className="text-xs text-muted-foreground">Trending down from 32%</p>
                    <Progress value={24} className="mt-2" />
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Active Blockers</CardTitle>
                    <CardDescription>Current blockers impacting sprint progress</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-md border p-3">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">API Integration Issue</div>
                          <div className="text-xs font-medium text-destructive">High Priority</div>
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          Authentication failing in production environment
                        </div>
                        <div className="mt-2 flex items-center justify-between text-xs">
                          <div>Owner: Alex Chen</div>
                          <div>Blocked for: 2 days</div>
                        </div>
                      </div>

                      <div className="rounded-md border p-3">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">ML Model Training</div>
                          <div className="text-xs font-medium text-destructive">High Priority</div>
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">GPU resources unavailable for training</div>
                        <div className="mt-2 flex items-center justify-between text-xs">
                          <div>Owner: Sarah Johnson</div>
                          <div>Blocked for: 1 day</div>
                        </div>
                      </div>

                      <div className="rounded-md border p-3">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Data Pipeline Issue</div>
                          <div className="text-xs font-medium text-amber-500">Medium Priority</div>
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          Inconsistent data format from upstream source
                        </div>
                        <div className="mt-2 flex items-center justify-between text-xs">
                          <div>Owner: Michael Lee</div>
                          <div>Blocked for: 3 days</div>
                        </div>
                      </div>

                      <div className="rounded-md border p-3">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">UI Component Library</div>
                          <div className="text-xs font-medium text-amber-500">Medium Priority</div>
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          Dependency version conflict with main application
                        </div>
                        <div className="mt-2 flex items-center justify-between text-xs">
                          <div>Owner: Jamie Taylor</div>
                          <div>Blocked for: 1 day</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Priority Items Tracker</CardTitle>
                    <CardDescription>High-priority items requiring attention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-md border p-3">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Feature A Deployment</div>
                          <div className="text-xs font-medium text-amber-500">At Risk</div>
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          Deployment blocked by API integration issue
                        </div>
                        <div className="mt-2 flex items-center justify-between text-xs">
                          <div>Team: Alpha</div>
                          <div>Due: 2 days</div>
                        </div>
                        <Progress value={65} className="mt-2 h-1" />
                      </div>

                      <div className="rounded-md border p-3">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">User Testing Session</div>
                          <div className="text-xs font-medium text-green-500">On Track</div>
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">Scheduled with 5 participants</div>
                        <div className="mt-2 flex items-center justify-between text-xs">
                          <div>Team: Beta</div>
                          <div>Due: 4 days</div>
                        </div>
                        <Progress value={80} className="mt-2 h-1" />
                      </div>

                      <div className="rounded-md border p-3">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">ML Model Evaluation</div>
                          <div className="text-xs font-medium text-amber-500">At Risk</div>
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">Waiting on training completion</div>
                        <div className="mt-2 flex items-center justify-between text-xs">
                          <div>Team: Gamma</div>
                          <div>Due: 3 days</div>
                        </div>
                        <Progress value={40} className="mt-2 h-1" />
                      </div>

                      <div className="rounded-md border p-3">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Documentation Update</div>
                          <div className="text-xs font-medium text-green-500">On Track</div>
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">API reference and user guides</div>
                        <div className="mt-2 flex items-center justify-between text-xs">
                          <div>Team: Delta</div>
                          <div>Due: 5 days</div>
                        </div>
                        <Progress value={75} className="mt-2 h-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Team Progress Snapshot</CardTitle>
                  <CardDescription>Current sprint progress across all teams</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Team Alpha (Frontend)</div>
                        <div className="text-sm">72% Complete</div>
                      </div>
                      <Progress value={72} />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <div>18/25 tasks completed</div>
                        <div>2 blockers</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Team Beta (Backend)</div>
                        <div className="text-sm">65% Complete</div>
                      </div>
                      <Progress value={65} />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <div>13/20 tasks completed</div>
                        <div>1 blocker</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Team Gamma (ML)</div>
                        <div className="text-sm">58% Complete</div>
                      </div>
                      <Progress value={58} />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <div>7/12 tasks completed</div>
                        <div>1 blocker</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Team Delta (DevOps)</div>
                        <div className="text-sm">80% Complete</div>
                      </div>
                      <Progress value={80} />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <div>12/15 tasks completed</div>
                        <div>0 blockers</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="historical" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sprint Carryover Trend</CardTitle>
                  <CardDescription>Tracking items carried over between sprints</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                    <p className="text-muted-foreground">Sprint carryover trend visualization would appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="team-view" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Team View</CardTitle>
                  <CardDescription>Detailed view by team</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                    <p className="text-muted-foreground">Team-specific metrics would appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
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
