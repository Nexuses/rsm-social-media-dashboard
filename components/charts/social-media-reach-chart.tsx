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
        { period: "Jul", reach: 447 },
        // Future months will be added here dynamically
      ],
      twitter: [
        { period: "Jul", reach: 0 },
        // Future months will be added here dynamically
      ],
      facebook: [
        { period: "Jul", reach: 455 },
        // Future months will be added here dynamically
      ],
      instagram: [
        { period: "Jul", reach: 563 },
        // Future months will be added here dynamically
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

  const reachData = getReachData()

  const chartConfig = {
    reach: {
      label: "Reach",
      color: "hsl(var(--chart-1))",
    },
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <AddDataButton
          componentName="Social Media Reach Chart"
          availableMetrics={["LinkedIn Reach", "Twitter Reach", "Facebook Reach", "Instagram Reach"]}
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
      </div>
      
      {/* Table Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[#2D3748]">Content Calendar</h3>
        </div>
        <Card>
          <CardContent className="p-0">
            <iframe 
              src="https://nexusesonline.notion.site/ebd/1996947358fa80c68280ee14b7280197" 
              width="100%" 
              height="600" 
              frameBorder="0" 
              allowFullScreen 
              className="w-full"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
