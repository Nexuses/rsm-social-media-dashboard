import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, MousePointer, Eye } from "lucide-react"
import { AddDataButton } from "./add-data-button"

interface MetricsOverviewProps {
  timeFilter: "weekly" | "monthly" | "annually"
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
          newFollowers: 921,
          websiteClicks: 5120,
          totalReach: 180000,
          profileVisits: 3614,
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
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Followers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.newFollowers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+12.5% from last {timeFilter.replace("ly", "")}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Website Clicks</CardTitle>
            <MousePointer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.websiteClicks.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+8.2% from last {timeFilter.replace("ly", "")}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.totalReach.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+15.3% from last {timeFilter.replace("ly", "")}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profile Visits</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.profileVisits.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+6.7% from last {timeFilter.replace("ly", "")}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
