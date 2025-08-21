import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, MousePointer, Eye } from "lucide-react"
import { AddDataButton } from "./add-data-button"

interface MetricsOverviewProps {
  timeFilter: "weekly" | "monthly" | "annually"
}

// Custom number formatting function to avoid hydration issues
const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

export function MetricsOverview({ timeFilter }: MetricsOverviewProps) {
  // Adjust metrics based on time filter
  const getMetrics = () => {
    switch (timeFilter) {
      case "weekly":
        return {
          newFollowers: 156,
          websiteClicks: 1280,
          totalReach: 45000,
          profileVisits: 890,
        }
      case "annually":
        return {
          newFollowers: 8300,
          websiteClicks: 61440,
          totalReach: 2160000,
          profileVisits: 42680,
        }
      default: // monthly
        return {
          newFollowers: 568,
          websiteClicks: 727,
          totalReach: 1445,
          profileVisits: 1337,
        }
    }
  }

  const metrics = getMetrics()

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <AddDataButton
          componentName="Metrics Overview"
          availableMetrics={["New Followers", "Website Clicks", "Total Reach", "Profile Visits"]}
          onDataAdded={(data) => console.log("Metrics data added:", data)}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-2 border-gray-200 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-[#009CDE] transform hover:-translate-y-1 animate-in fade-in-0 slide-in-from-bottom-2 duration-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#2D3748]">New Followers</CardTitle>
            <Users className="h-4 w-4 text-[#718096] transition-colors duration-300 group-hover:text-[#009CDE]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#2D3748]">{formatNumber(metrics.newFollowers)}</div>
            <p className="text-xs text-[#718096]">+12.5% from last {timeFilter.replace("ly", "")}</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-gray-200 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-[#00153C] transform hover:-translate-y-1 animate-in fade-in-0 slide-in-from-bottom-2 duration-500 delay-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#2D3748]">Total Reach</CardTitle>
            <Eye className="h-4 w-4 text-[#718096] transition-colors duration-300 group-hover:text-[#00153C]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#2D3748]">{formatNumber(metrics.totalReach)}</div>
            <p className="text-xs text-[#718096]">+15.3% from last {timeFilter.replace("ly", "")}</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-gray-200 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-[#63666A] transform hover:-translate-y-1 animate-in fade-in-0 slide-in-from-bottom-2 duration-500 delay-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#2D3748]">Profile Visits</CardTitle>
            <TrendingUp className="h-4 w-4 text-[#718096] transition-colors duration-300 group-hover:text-[#63666A]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#2D3748]">{formatNumber(metrics.profileVisits)}</div>
            <p className="text-xs text-[#718096]">+6.7% from last {timeFilter.replace("ly", "")}</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-gray-200 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-[#3F9C35] transform hover:-translate-y-1 animate-in fade-in-0 slide-in-from-bottom-2 duration-500 delay-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#2D3748]">Website Clicks</CardTitle>
            <MousePointer className="h-4 w-4 text-[#718096] transition-colors duration-300 group-hover:text-[#3F9C35]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#2D3748]">{formatNumber(metrics.websiteClicks)}</div>
            <p className="text-xs text-[#718096]">+8.2% from last {timeFilter.replace("ly", "")}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
