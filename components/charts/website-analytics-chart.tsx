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
          { period: "Week 1", clicks: 1280, organic: 853, paid: 427 },
          { period: "Week 2", clicks: 1456, organic: 971, paid: 485 },
          { period: "Week 3", clicks: 1189, organic: 792, paid: 397 },
          { period: "Week 4", clicks: 1195, organic: 797, paid: 398 },
        ]
      case "annually":
        return [
          { period: "2020", clicks: 45600, organic: 30400, paid: 15200 },
          { period: "2021", clicks: 52800, organic: 35200, paid: 17600 },
          { period: "2022", clicks: 61440, organic: 40960, paid: 20480 },
          { period: "2023", clicks: 68200, organic: 45467, paid: 22733 },
          { period: "2024", clicks: 74800, organic: 49867, paid: 24933 },
          { period: "2025", clicks: 82000, organic: 54667, paid: 27333 },
        ]
      default: // monthly
        return [
          { period: "Aug", clicks: 3783, organic: 2522, paid: 1261 },
          { period: "Sep", clicks: 3534, organic: 2356, paid: 1178 },
          { period: "Oct", clicks: 4813, organic: 3209, paid: 1604 },
          { period: "Nov", clicks: 5576, organic: 3717, paid: 1859 },
          { period: "Dec", clicks: 6639, organic: 4426, paid: 2213 },
          { period: "Jan", clicks: 5223, organic: 3482, paid: 1741 },
          { period: "Feb", clicks: 6173, organic: 4115, paid: 2058 },
          { period: "Mar", clicks: 7714, organic: 5143, paid: 2571 },
          { period: "Apr", clicks: 4752, organic: 3168, paid: 1584 },
          { period: "May", clicks: 5553, organic: 3702, paid: 1851 },
          { period: "Jun", clicks: 5120, organic: 3410, paid: 1710 },
        ]
    }
  }

  const getTopPages = () => [
    { page: "Newsletter Issue 9", visits: 1250, percentage: 24.4 },
    { page: "IFRS 16 Guide", visits: 980, percentage: 19.1 },
    { page: "COVID Finance Program", visits: 756, percentage: 14.8 },
    { page: "Newsletter Issue 2", visits: 623, percentage: 12.2 },
    { page: "VAT Guidelines", visits: 445, percentage: 8.7 },
    { page: "Annual Report 2024", visits: 380, percentage: 7.4 },
    { page: "Tax Updates", visits: 320, percentage: 6.2 },
    { page: "Audit Services", visits: 280, percentage: 5.5 },
  ]

  const websiteData = getWebsiteData()
  const topPages = getTopPages()

  const chartConfig = {
    clicks: {
      label: "Total Clicks",
      color: "hsl(var(--chart-1))",
    },
    organic: {
      label: "Organic Search",
      color: "hsl(var(--chart-2))",
    },
    paid: {
      label: "Paid Campaigns",
      color: "hsl(var(--chart-3))",
    },
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <AddDataButton
          componentName="Website Analytics Chart"
          availableMetrics={["Total Clicks", "Organic Search", "Paid Campaigns", "Page Visits"]}
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
                    dataKey="paid"
                    stackId="1"
                    stroke="var(--color-chart-3)"
                    fill="var(--color-chart-3)"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-[#2D3748]">Top 5 Most Visited Pages</CardTitle>
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
      </div>
    </div>
  )
}
