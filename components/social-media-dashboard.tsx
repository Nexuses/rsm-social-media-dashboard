"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FollowersGrowthChart } from "./charts/followers-growth-chart"
import { WebsiteAnalyticsChart } from "./charts/website-analytics-chart"
import { SocialMediaReachChart } from "./charts/social-media-reach-chart"
import { CompetitorAnalysis } from "./competitor-analysis"
import { TargetAudienceAnalysis } from "./target-audience-analysis"
import { MetricsOverview } from "./metrics-overview"
import { AdminLogin } from "./admin-login"
import { AdminProvider } from "./admin-context"

type TimeFilter = "weekly" | "monthly" | "annually"

export function SocialMediaDashboard() {
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("monthly")

  return (
    <AdminProvider>
      <div className="container mx-auto p-6 space-y-8">
        {/* Branding Header */}
        <div className="rounded-xl p-6 mb-6 shadow-sm border border-slate-200/50">
                      <div className="flex items-center justify-between">
              <div className="flex flex-col items-center">
                <img 
                  src="https://22527425.fs1.hubspotusercontent-na2.net/hubfs/22527425/RSM/logorsm.png" 
                  alt="RSM Logo" 
                  className="h-16 w-auto object-contain filter drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 hover:scale-105"
                />
              </div>
              
              <div className="flex flex-col items-center">
                <img 
                  src="https://22527425.fs1.hubspotusercontent-na2.net/hubfs/22527425/nexuses_logo_1-removebg-preview.png" 
                  alt="Nexuses Logo" 
                  className="h-12 w-auto object-contain filter drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">RSM Kuwait Social Media Analytics</h1>
            <p className="text-muted-foreground">Comprehensive social media performance dashboard</p>
          </div>
          <div className="flex items-center gap-4">
            <Select value={timeFilter} onValueChange={(value: TimeFilter) => setTimeFilter(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly View</SelectItem>
                <SelectItem value="monthly">Monthly View</SelectItem>
                <SelectItem value="annually">Annual View</SelectItem>
              </SelectContent>
            </Select>
            <AdminLogin />
          </div>
        </div>

      {/* Key Metrics Overview */}
      <MetricsOverview timeFilter={timeFilter} />

      {/* Main Dashboard Tabs */}
      <Tabs defaultValue="growth" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="growth">Followers Growth</TabsTrigger>
          <TabsTrigger value="website">Website Performance</TabsTrigger>
          <TabsTrigger value="reach">Social Media Reach</TabsTrigger>
          <TabsTrigger value="audience">Target Audience</TabsTrigger>
        </TabsList>

        <TabsContent value="growth" className="space-y-6">
          <div className="grid gap-6">
            <FollowersGrowthChart timeFilter={timeFilter} />
            <CompetitorAnalysis />
          </div>
        </TabsContent>

        <TabsContent value="website" className="space-y-6">
          <WebsiteAnalyticsChart timeFilter={timeFilter} />
        </TabsContent>

        <TabsContent value="reach" className="space-y-6">
          <SocialMediaReachChart timeFilter={timeFilter} />
        </TabsContent>

        <TabsContent value="audience" className="space-y-6">
          <TargetAudienceAnalysis />
        </TabsContent>
      </Tabs>
      </div>
    </AdminProvider>
  )
}
