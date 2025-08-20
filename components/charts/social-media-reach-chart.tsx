"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { AddDataButton } from "../add-data-button"

interface SocialMediaReachChartProps {
  timeFilter: "weekly" | "monthly" | "annually"
}

export function SocialMediaReachChart({ timeFilter }: SocialMediaReachChartProps) {
  const getReachData = () => {
    const baseData = {
      linkedin: [
        { period: "Feb", reach: 19900 },
        { period: "Mar", reach: 46135 },
        { period: "Apr", reach: 32400 },
        { period: "May", reach: 51800 },
        { period: "Jun", reach: 55040 },
      ],
      twitter: [
        { period: "Feb", reach: 245000 },
        { period: "Mar", reach: 50100 },
        { period: "Apr", reach: 42700 },
        { period: "May", reach: 70800 },
        { period: "Jun", reach: 58000 },
      ],
      facebook: [
        { period: "Feb", reach: 37877 },
        { period: "Mar", reach: 22827 },
        { period: "Apr", reach: 20200 },
        { period: "May", reach: 23677 },
        { period: "Jun", reach: 53902 },
      ],
      instagram: [
        { period: "Feb", reach: 2767 },
        { period: "Mar", reach: 2267 },
        { period: "Apr", reach: 2170 },
        { period: "May", reach: 2332 },
        { period: "Jun", reach: 1311 },
      ],
    }

    if (timeFilter === "weekly") {
      return {
        linkedin: baseData.linkedin.map((item) => ({ ...item, reach: Math.floor(item.reach * 0.25) })),
        twitter: baseData.twitter.map((item) => ({ ...item, reach: Math.floor(item.reach * 0.25) })),
        facebook: baseData.facebook.map((item) => ({ ...item, reach: Math.floor(item.reach * 0.25) })),
        instagram: baseData.instagram.map((item) => ({ ...item, reach: Math.floor(item.reach * 0.25) })),
      }
    } else if (timeFilter === "annually") {
      return {
        linkedin: baseData.linkedin.map((item) => ({ ...item, reach: Math.floor(item.reach * 12) })),
        twitter: baseData.twitter.map((item) => ({ ...item, reach: Math.floor(item.reach * 12) })),
        facebook: baseData.facebook.map((item) => ({ ...item, reach: Math.floor(item.reach * 12) })),
        instagram: baseData.instagram.map((item) => ({ ...item, reach: Math.floor(item.reach * 12) })),
      }
    }
    return baseData
  }

  const getProfileVisits = () => [
    { platform: "LinkedIn", visits: 2637, color: "#009CDE" },
    { platform: "Facebook", visits: 1890, color: "#3F9C35" },
    { platform: "Instagram", visits: 890, color: "#00153C" },
    { platform: "Twitter", visits: 729, color: "#63666A" },
  ]

  const reachData = getReachData()
  const profileVisits = getProfileVisits()

  const chartConfig = {
    reach: {
      label: "Reach",
      color: "hsl(var(--chart-1))",
    },
    visits: {
      label: "Profile Visits",
      color: "hsl(var(--chart-2))",
    },
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <AddDataButton
          componentName="Social Media Reach Chart"
          availableMetrics={["LinkedIn Reach", "Twitter Reach", "Facebook Reach", "Instagram Reach", "Profile Visits"]}
          onDataAdded={(data) => console.log("Social media reach data added:", data)}
        />
      </div>
      <div className="grid gap-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-[#2D3748]">LinkedIn Reach</CardTitle>
              <CardDescription className="text-[#4A5568]">Post reach performance</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={reachData.linkedin}>
                    <XAxis dataKey="period" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="reach" fill="#009CDE" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-[#2D3748]">Twitter Reach</CardTitle>
              <CardDescription className="text-[#4A5568]">Post reach performance</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={reachData.twitter}>
                    <XAxis dataKey="period" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="reach" fill="#63666A" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-[#2D3748]">Facebook Reach</CardTitle>
              <CardDescription className="text-[#4A5568]">Post reach performance</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={reachData.facebook}>
                    <XAxis dataKey="period" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="reach" fill="#3F9C35" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-[#2D3748]">Instagram Reach</CardTitle>
              <CardDescription className="text-[#4A5568]">Post reach performance</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={reachData.instagram}>
                    <XAxis dataKey="period" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="reach" fill="#00153C" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-[#2D3748]">Social Media Profile Visits</CardTitle>
            <CardDescription className="text-[#4A5568]">Profile visits across all platforms</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={profileVisits}>
                  <XAxis dataKey="platform" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar 
                    dataKey="visits" 
                    radius={[4, 4, 0, 0]}
                    fill="#009CDE"
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
