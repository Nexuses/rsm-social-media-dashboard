"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AddDataButton } from "../add-data-button"

interface FollowersGrowthChartProps {
  timeFilter: "weekly" | "monthly" | "annually"
}

export function FollowersGrowthChart({ timeFilter }: FollowersGrowthChartProps) {
  const getGrowthData = () => {
    switch (timeFilter) {
      case "weekly":
        return [
          { period: "Week 1", followers: 41000, growth: 0 },
          { period: "Week 2", followers: 41000, growth: 0 },
          { period: "Week 3", followers: 41000, growth: 0 },
          { period: "Week 4", followers: 41000, growth: 0 },
        ]
      case "annually":
        return [
          { period: "2025", followers: 41000, growth: 0 },
        ]
      default: // monthly - starting fresh from July 2025
        return [
          { period: "Jul 2025", followers: 41000, growth: 0 },
          // Future months will be added here as data becomes available
          // { period: "Aug 2025", followers: 41500, growth: 500 },
          // { period: "Sep 2025", followers: 41800, growth: 300 },
          // { period: "Oct 2025", followers: 42000, growth: 200 },
          // { period: "Nov 2025", followers: 42200, growth: 200 },
          // { period: "Dec 2025", followers: 42500, growth: 300 },
        ]
    }
  }

  const getChannelData = () => {
    const baseData = [
      { platform: "LinkedIn", followers: 41000, color: "#009CDE" },
      { platform: "Facebook", followers: 40900, color: "#3F9C35" },
      { platform: "Instagram", followers: 7000, color: "#00153C" },
      { platform: "Twitter", followers: 4800, color: "#63666A" },
    ]

    // Return the exact data without multipliers
    return baseData
  }

  // Platform-specific data for the new tabs
  const getPlatformData = (platform: string) => {
    const platformData = {
      linkedin: {
        followers: 41000,
        engagement: 12.5,
        posts: 45,
        reach: 25000,
        impressions: 89000,
        growth: 8.2,
        color: "#009CDE"
      },
      facebook: {
        followers: 40900,
        engagement: 8.3,
        posts: 32,
        reach: 18000,
        impressions: 52000,
        growth: 15.7,
        color: "#3F9C35"
      },
      twitter: {
        followers: 4800,
        engagement: 6.8,
        posts: 28,
        reach: 12000,
        impressions: 38000,
        growth: 12.4,
        color: "#63666A"
      },
      instagram: {
        followers: 7000,
        engagement: 9.2,
        posts: 38,
        reach: 3200,
        impressions: 6800,
        growth: 18.5,
        color: "#00153C"
      }
    }
    
    return platformData[platform as keyof typeof platformData] || platformData.linkedin
  }

  const growthData = getGrowthData()
  const channelData = getChannelData()

  const chartConfig = {
    followers: {
      label: "Followers",
      color: "#009CDE",
    },
    growth: {
      label: "Growth",
      color: "#3F9C35",
    },
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <AddDataButton
          componentName="Followers Growth Chart"
          availableMetrics={["Followers", "Growth", "Platform Followers"]}
          onDataAdded={(data) => console.log("Followers growth data added:", data)}
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-[#2D3748]">Followers Growth Trend</CardTitle>
            <CardDescription className="text-[#4A5568]">
              {timeFilter === "weekly" ? "Weekly" : timeFilter === "monthly" ? "Monthly" : "Annual"} followers growth
              across all platforms starting from July 2025
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={growthData}>
                  <XAxis dataKey="period" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="followers"
                    stroke="#009CDE"
                    strokeWidth={2}
                    dot={{ fill: "#009CDE" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-[#2D3748]">Followers by Platform</CardTitle>
            <CardDescription className="text-[#4A5568]">Current follower distribution across social media channels</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={channelData}>
                  <XAxis dataKey="platform" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar 
                    dataKey="followers" 
                    radius={[4, 4, 0, 0]}
                    fill="#3F9C35"
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Platform-specific tabs removed */}
    </div>
  )
}
