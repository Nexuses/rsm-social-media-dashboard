"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"
import { AddDataButton } from "./add-data-button"

export function TargetAudienceAnalysis() {
  const jobFunctionData = [
    { name: "Accounting", value: 35, color: "#0088FE" },
    { name: "Finance", value: 18, color: "#00C49F" },
    { name: "Sales", value: 12, color: "#FFBB28" },
    { name: "Operations", value: 10, color: "#FF8042" },
    { name: "Business Development", value: 8, color: "#8884D8" },
    { name: "Information Technology", value: 7, color: "#82CA9D" },
    { name: "Human Resources", value: 5, color: "#FFC658" },
    { name: "Marketing", value: 3, color: "#FF7C7C" },
    { name: "Engineering", value: 1, color: "#8DD1E1" },
    { name: "Education", value: 1, color: "#D084D0" },
  ]

  const industryData = [
    { name: "Accounting", value: 28, color: "#0088FE" },
    { name: "Financial Services", value: 22, color: "#00C49F" },
    { name: "Banking", value: 18, color: "#FFBB28" },
    { name: "IT Services", value: 12, color: "#FF8042" },
    { name: "Management Consulting", value: 8, color: "#8884D8" },
    { name: "Oil & Energy", value: 5, color: "#82CA9D" },
    { name: "Construction", value: 3, color: "#FFC658" },
    { name: "Retail", value: 2, color: "#FF7C7C" },
    { name: "Food & Beverages", value: 1, color: "#8DD1E1" },
    { name: "Real Estate", value: 1, color: "#D084D0" },
  ]

  const companySizeData = [
    { name: "201-500 employees", value: 25, color: "#0088FE" },
    { name: "10,001+ employees", value: 22, color: "#00C49F" },
    { name: "1,001-5,000 employees", value: 20, color: "#FFBB28" },
    { name: "11-50 employees", value: 15, color: "#FF8042" },
    { name: "51-200 employees", value: 10, color: "#8884D8" },
    { name: "501-1,000 employees", value: 5, color: "#82CA9D" },
    { name: "5,001-10,000 employees", value: 2, color: "#FFC658" },
    { name: "2-10 employees", value: 1, color: "#FF7C7C" },
  ]

  const seniorityData = [
    { name: "Senior", value: 45, color: "#0088FE" },
    { name: "Entry", value: 25, color: "#00C49F" },
    { name: "Manager", value: 15, color: "#FFBB28" },
    { name: "Training", value: 8, color: "#FF8042" },
    { name: "Director", value: 5, color: "#8884D8" },
    { name: "Partner", value: 2, color: "#82CA9D" },
  ]

  const chartConfig = {
    value: {
      label: "Percentage",
    },
  }

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    if (percent < 0.05) return null // Don't show labels for slices less than 5%

    const RADIAN = Math.PI / 180
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={12}
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <AddDataButton
          componentName="Target Audience Analysis"
          availableMetrics={["Job Function", "Industry", "Company Size", "Seniority Level"]}
          onDataAdded={(data) => console.log("Target audience data added:", data)}
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>LinkedIn Clicks by Job Function</CardTitle>
            <CardDescription>Distribution of clicks by professional roles</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={jobFunctionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {jobFunctionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {jobFunctionData.slice(0, 6).map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-muted-foreground">
                    {item.name} ({item.value}%)
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>LinkedIn Clicks by Industry</CardTitle>
            <CardDescription>Distribution of clicks by industry sectors</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={industryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {industryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {industryData.slice(0, 6).map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-muted-foreground">
                    {item.name} ({item.value}%)
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>LinkedIn Clicks by Company Size</CardTitle>
            <CardDescription>Distribution of clicks by company employee count</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={companySizeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {companySizeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="mt-4 grid grid-cols-1 gap-2 text-sm">
              {companySizeData.slice(0, 4).map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-muted-foreground">
                    {item.name} ({item.value}%)
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>LinkedIn Clicks by Seniority</CardTitle>
            <CardDescription>Distribution of clicks by professional seniority level</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={seniorityData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {seniorityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {seniorityData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-muted-foreground">
                    {item.name} ({item.value}%)
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
