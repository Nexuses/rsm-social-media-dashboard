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
          { period: "Week 1", followers: 32800, growth: 45 },
          { period: "Week 2", followers: 32845, growth: 67 },
          { period: "Week 3", followers: 32912, growth: 89 },
          { period: "Week 4", followers: 33001, growth: 123 },
        ]
      case "annually":
        return [
          { period: "2020", followers: 28500, growth: 2800 },
          { period: "2021", followers: 31200, growth: 2700 },
          { period: "2022", followers: 33900, growth: 2700 },
          { period: "2023", followers: 36800, growth: 2900 },
          { period: "2024", followers: 39800, growth: 3000 },
          { period: "2025", followers: 42800, growth: 3000 },
        ]
      default: // monthly
        return [
          { period: "Dec", followers: 590, growth: 590 },
          { period: "Jan", followers: 656, growth: 66 },
          { period: "Feb", followers: 605, growth: -51 },
          { period: "Mar", followers: 731, growth: 126 },
          { period: "Apr", followers: 696, growth: -35 },
          { period: "May", followers: 725, growth: 29 },
          { period: "Jun", followers: 790, growth: 65 },
          { period: "Jul", followers: 915, growth: 125 },
          { period: "Aug", followers: 835, growth: -80 },
          { period: "Sep", followers: 780, growth: -55 },
          { period: "Oct", followers: 921, growth: 141 },
        ]
    }
  }

  const getChannelData = () => {
    const baseData = [
      { platform: "LinkedIn", followers: 32800, color: "#0077B5" },
      { platform: "Facebook", followers: 41800, color: "#1877F2" },
      { platform: "Instagram", followers: 6100, color: "#E4405F" },
      { platform: "Twitter", followers: 4800, color: "#1DA1F2" },
    ]

    // Return the exact data without multipliers
    return baseData
  }

  // Platform-specific data for the new tabs
  const getPlatformData = (platform: string) => {
    const platformData = {
      linkedin: {
        followers: 32800,
        engagement: 12.5,
        posts: 45,
        reach: 25000,
        impressions: 89000,
        growth: 8.2,
        color: "#0077B5"
      },
      facebook: {
        followers: 41800,
        engagement: 8.3,
        posts: 32,
        reach: 18000,
        impressions: 52000,
        growth: 15.7,
        color: "#1877F2"
      },
      twitter: {
        followers: 4800,
        engagement: 6.8,
        posts: 28,
        reach: 12000,
        impressions: 38000,
        growth: 12.4,
        color: "#1DA1F2"
      },
      instagram: {
        followers: 6100,
        engagement: 9.2,
        posts: 38,
        reach: 3200,
        impressions: 6800,
        growth: 18.5,
        color: "#E4405F"
      }
    }
    
    return platformData[platform as keyof typeof platformData] || platformData.linkedin
  }

  const growthData = getGrowthData()
  const channelData = getChannelData()

  const chartConfig = {
    followers: {
      label: "Followers",
      color: "hsl(var(--chart-1))",
    },
    growth: {
      label: "Growth",
      color: "hsl(var(--chart-2))",
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
            <CardTitle>Followers Growth Trend</CardTitle>
            <CardDescription>
              {timeFilter === "weekly" ? "Weekly" : timeFilter === "monthly" ? "Monthly" : "Annual"} followers growth
              across all platforms
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
                    stroke="var(--color-chart-1)"
                    strokeWidth={2}
                    dot={{ fill: "var(--color-chart-1)" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Followers by Platform</CardTitle>
            <CardDescription>Current follower distribution across social media channels</CardDescription>
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
                    fill="#3B82F6"
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
