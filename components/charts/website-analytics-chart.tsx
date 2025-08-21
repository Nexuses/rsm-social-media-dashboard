"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { AddDataButton } from "../add-data-button"

interface WebsiteAnalyticsChartProps {
  timeFilter: "weekly" | "monthly" | "annually"
}

export function WebsiteAnalyticsChart({ timeFilter }: WebsiteAnalyticsChartProps) {
  const getWebsiteData = () => {
    switch (timeFilter) {
      case "weekly":
        return [
          { period: "Week 1", organic: 184, direct: 16, referral: 12, unassigned: 10 },
          { period: "Week 2", organic: 184, direct: 16, referral: 12, unassigned: 10 },
          { period: "Week 3", organic: 184, direct: 16, referral: 12, unassigned: 10 },
          { period: "Week 4", organic: 184, direct: 16, referral: 12, unassigned: 10 },
        ]
      case "annually":
        return [
          { period: "2025", organic: 184, direct: 16, referral: 12, unassigned: 10 },
        ]
      default: // monthly
        return [
          { period: "Jul", organic: 184, direct: 16, referral: 12, unassigned: 10 },
        ]
    }
  }

  const getTopPages = () => [
    { page: "Tax | RSM Kuwait", visits: 66, percentage: 8.6 },
    { page: "Welcome to RSM Kuwait | RSM Kuwait", visits: 57, percentage: 7.43 },
    { page: "Assurance | RSM Kuwait", visits: 40, percentage: 5.22 },
    { page: "Environmental, Social and Governance Advisory Services | RSM Kuwait", visits: 40, percentage: 5.22 },
    { page: "Tax Compliance and Consulting Services | RSM Kuwait", visits: 34, percentage: 4.43 },
    { page: "Tax Newsletter | RSM Kuwait", visits: 32, percentage: 4.17 },
    { page: "ESG Newsletter | RSM Kuwait", visits: 27, percentage: 3.52 },
    { page: "ESG Thought Leadership | RSM Kuwait", visits: 27, percentage: 3.52 },
    { page: "ESG & Sustainability Consulting Services | RSM Kuwait", visits: 25, percentage: 3.26 },
  ]

  const websiteData = getWebsiteData()
  const topPages = getTopPages()
  const activeUsersByCountry = [
    { country: "Kuwait", users: 2, flag: "🇰🇼" },
    { country: "United Kingdom", users: 1, flag: "🇬🇧" },
    { country: "India", users: 1, flag: "🇮🇳" },
  ]
  const maxActiveUsers = Math.max(...activeUsersByCountry.map((c) => c.users)) || 1

  const chartConfig = {
    organic: {
      label: "Organic Search",
      color: "hsl(var(--chart-2))",
    },
    direct: {
      label: "Direct",
      color: "hsl(var(--chart-3))",
    },
    referral: {
      label: "Referral",
      color: "hsl(var(--chart-1))",
    },
    unassigned: {
      label: "Unassigned",
      color: "hsl(var(--chart-4))",
    },
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <AddDataButton
          componentName="Website Analytics Chart"
          availableMetrics={["Organic Search", "Direct", "Referral", "Unassigned", "Page Visits"]}
          onDataAdded={(data) => console.log("Website analytics data added:", data)}
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-[#2D3748]">Website Analytics Performance</CardTitle>
            <CardDescription className="text-[#4A5568]">
              {timeFilter === "weekly" ? "Weekly" : timeFilter === "monthly" ? "Monthly" : "Annual"} website traffic
              trends
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={websiteData}>
                  <XAxis dataKey="period" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="organic"
                    stackId="1"
                    stroke="var(--color-chart-2)"
                    fill="var(--color-chart-2)"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="direct"
                    stackId="1"
                    stroke="var(--color-chart-3)"
                    fill="var(--color-chart-3)"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="referral"
                    stackId="1"
                    stroke="var(--color-chart-1)"
                    fill="var(--color-chart-1)"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="unassigned"
                    stackId="1"
                    stroke="var(--color-chart-4)"
                    fill="var(--color-chart-4)"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-[#2D3748]">Top 9 Most Visited Pages</CardTitle>
            <CardDescription className="text-[#4A5568]">Most popular content on your website</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3F9C35] text-white text-sm font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#2D3748]">{page.page}</p>
                      <p className="text-xs text-[#718096]">{page.visits} visits</p>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-[#2D3748]">{page.percentage}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-[#2D3748] flex items-center gap-2">
              <svg className="w-5 h-5 text-[#3182CE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Active users by Country
            </CardTitle>
            <CardDescription className="text-[#4A5568]">Geographic distribution of active website users</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeUsersByCountry.map((item, index) => (
                <div key={item.country} className="group relative">
                  <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-[#3182CE] hover:bg-blue-50/50 transition-all duration-200">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{item.flag}</div>
                      <div>
                        <p className="font-semibold text-[#2D3748]">{item.country}</p>
                        <p className="text-sm text-[#718096]">{item.users} active user{item.users !== 1 ? 's' : ''}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-lg font-bold text-[#3182CE]">{item.users}</div>
                        <div className="text-xs text-[#718096]">users</div>
                      </div>
                      <div className="w-32 h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#009CDE] rounded-full transition-all duration-500 ease-out"
                          style={{ width: `${(item.users / maxActiveUsers) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  {index === 0 && (
                    <div className="absolute -top-2 -right-2">
                      <div className="bg-[#3F9C35] text-white text-xs px-2 py-1 rounded-full font-medium">
                        Top
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
