"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"
import { AddDataButton } from "./add-data-button"

export function TargetAudienceAnalysis() {
  const jobFunctionData = [
    { name: "Accounting", value: 423, percentage: 18, color: "#009CDE" },
    { name: "Information Technology", value: 122, percentage: 5.2, color: "#3F9C35" },
    { name: "Finance", value: 121, percentage: 5.2, color: "#00153C" },
    { name: "Engineering", value: 106, percentage: 4.5, color: "#63666A" },
    { name: "Operations", value: 87, percentage: 3.7, color: "#009CDE" },
    { name: "Business Development", value: 82, percentage: 3.5, color: "#3F9C35" },
    { name: "Sales", value: 76, percentage: 3.2, color: "#00153C" },
    { name: "Human Resources", value: 46, percentage: 2.0, color: "#63666A" },
    { name: "Marketing", value: 41, percentage: 1.7, color: "#009CDE" },
    { name: "Education", value: 37, percentage: 1.6, color: "#3F9C35" },
  ]

  const industryData = [
    { name: "Accounting", value: 918, percentage: 39.1, color: "#009CDE" },
    { name: "Financial Services", value: 395, percentage: 16.8, color: "#3F9C35" },
    { name: "IT Services and IT Consulting", value: 250, percentage: 10.6, color: "#00153C" },
    { name: "Technology, Information and Internet", value: 109, percentage: 4.6, color: "#63666A" },
    { name: "Business Consulting and Services", value: 93, percentage: 4.0, color: "#009CDE" },
    { name: "Banking", value: 89, percentage: 3.8, color: "#3F9C35" },
    { name: "Software Development", value: 85, percentage: 3.6, color: "#00153C" },
    { name: "Education", value: 44, percentage: 1.9, color: "#63666A" },
    { name: "Oil and Gas", value: 41, percentage: 1.7, color: "#009CDE" },
    { name: "Higher Education", value: 40, percentage: 1.7, color: "#3F9C35" },
  ]

  const companySizeData = [
    { name: "201-500 employees", value: 287, percentage: 12.2, color: "#009CDE" },
    { name: "1001-5000 employees", value: 229, percentage: 9.8, color: "#3F9C35" },
    { name: "10,001+ employees", value: 227, percentage: 9.7, color: "#00153C" },
    { name: "11-50 employees", value: 225, percentage: 9.6, color: "#63666A" },
    { name: "51-200 employees", value: 220, percentage: 9.4, color: "#009CDE" },
    { name: "501-1000 employees", value: 128, percentage: 5.5, color: "#3F9C35" },
    { name: "5001-10,000 employees", value: 39, percentage: 1.7, color: "#00153C" },
    { name: "1-10 employees", value: 34, percentage: 1.4, color: "#63666A" },
    { name: "Others", value: 959, percentage: 40.8, color: "#009CDE" },
  ]

  const seniorityData = [
    { name: "Senior", value: 711, percentage: 30.3, color: "#009CDE" },
    { name: "Entry", value: 513, percentage: 21.8, color: "#3F9C35" },
    { name: "Manager", value: 122, percentage: 5.2, color: "#00153C" },
    { name: "Training", value: 61, percentage: 2.6, color: "#63666A" },
    { name: "Director", value: 31, percentage: 1.3, color: "#009CDE" },
    { name: "CXO", value: 14, percentage: 0.6, color: "#3F9C35" },
    { name: "Others", value: 896, percentage: 38.2, color: "#00153C" },
  ]

  const chartConfig = {
    percentage: {
      label: "Percentage",
    },
  }

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    if (percent < 5) return null // Don't show labels for slices less than 5%

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
        {`${percent.toFixed(1)}%`}
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
            <CardTitle className="text-[#2D3748]">LinkedIn Clicks by Job Function</CardTitle>
            <CardDescription className="text-[#4A5568]">Distribution of clicks by professional roles</CardDescription>
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
                    dataKey="percentage"
                  >
                    {jobFunctionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-white p-3 border rounded-lg shadow-lg">
                            <p className="font-semibold text-gray-800">{data.name}</p>
                            <p className="text-sm text-gray-600">Count: {data.value}</p>
                            <p className="text-sm text-gray-600">Percentage: {data.percentage}%</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {jobFunctionData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-[#718096]">
                    {item.name} ({item.value}, {item.percentage}%)
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-[#2D3748]">LinkedIn Clicks by Industry</CardTitle>
            <CardDescription className="text-[#4A5568]">Distribution of clicks by industry sectors</CardDescription>
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
                    dataKey="percentage"
                  >
                    {industryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-white p-3 border rounded-lg shadow-lg">
                            <p className="font-semibold text-gray-800">{data.name}</p>
                            <p className="text-sm text-gray-600">Count: {data.value}</p>
                            <p className="text-sm text-gray-600">Percentage: {data.percentage}%</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {industryData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-[#718096]">
                    {item.name} ({item.value}, {item.percentage}%)
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-[#2D3748]">LinkedIn Clicks by Company Size</CardTitle>
            <CardDescription className="text-[#4A5568]">Distribution of clicks by company employee count</CardDescription>
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
                    dataKey="percentage"
                  >
                    {companySizeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-white p-3 border rounded-lg shadow-lg">
                            <p className="font-semibold text-gray-800">{data.name}</p>
                            <p className="text-sm text-gray-600">Count: {data.value}</p>
                            <p className="text-sm text-gray-600">Percentage: {data.percentage}%</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="mt-4 grid grid-cols-1 gap-2 text-sm">
              {companySizeData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-[#718096]">
                    {item.name} ({item.value}, {item.percentage}%)
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-[#2D3748]">LinkedIn Clicks by Seniority</CardTitle>
            <CardDescription className="text-[#4A5568]">Distribution of clicks by professional seniority level</CardDescription>
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
                    dataKey="percentage"
                  >
                    {seniorityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-white p-3 border rounded-lg shadow-lg">
                            <p className="font-semibold text-gray-800">{data.name}</p>
                            <p className="text-sm text-gray-600">Count: {data.value}</p>
                            <p className="text-sm text-gray-600">Percentage: {data.percentage}%</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {seniorityData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-[#718096]">
                    {item.name} ({item.value}, {item.percentage}%)
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
