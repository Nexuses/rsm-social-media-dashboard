import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AddDataButton } from "./add-data-button"
import { useState } from "react"

export function CompetitorAnalysis() {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null)

  const competitorData = {
    linkedin: [
      { name: "KPMG Kuwait", followers: "44.7K", position: 1, isRSM: false },
      { name: "Baker Tilly Kuwait", followers: "34.1K", position: 2, isRSM: false },
      { name: "RSM Kuwait", followers: "32.8K", position: 3, isRSM: true },
      { name: "BDO Kuwait", followers: "9.3K", position: 4, isRSM: false },
      { name: "PKF Kuwait", followers: "4K", position: 5, isRSM: false },
    ],
    facebook: [
      { name: "RSM Kuwait", followers: "41.8K", position: 1, isRSM: true },
      { name: "Baker Tilly Kuwait", followers: "10K", position: 2, isRSM: false },
      { name: "KPMG Kuwait", followers: "2.7K", position: 3, isRSM: false },
      { name: "Morison Kuwait", followers: "246", position: 4, isRSM: false },
      { name: "Grant Thornton Kuwait", followers: "105", position: 5, isRSM: false },
    ],
    twitter: [
      { name: "RSM Kuwait", followers: "4.8K", position: 1, isRSM: true },
      { name: "Morison Kuwait", followers: "2.3K", position: 2, isRSM: false },
      { name: "KPMG Kuwait", followers: "1.1K", position: 3, isRSM: false },
      { name: "Crowe Kuwait", followers: "30", position: 4, isRSM: false },
      { name: "BDO Kuwait", followers: "16", position: 5, isRSM: false },
    ],
    instagram: [
      { name: "Morison Kuwait", followers: "8.2K", position: 1, isRSM: false },
      { name: "RSM Kuwait", followers: "6.1K", position: 2, isRSM: true },
      { name: "KPMG Kuwait", followers: "1.8K", position: 3, isRSM: false },
      { name: "Baker Tilly Kuwait", followers: "907", position: 4, isRSM: false },
      { name: "Grant Thornton Kuwait", followers: "434", position: 5, isRSM: false },
    ],
  }

  const rsmNetworkData = [
    { name: "RSM US", followers: "178K", position: 1, isRSM: false },
    { name: "RSM UK", followers: "71.6K", position: 2, isRSM: false },
    { name: "RSM International", followers: "47.5K", position: 3, isRSM: false },
    { name: "RSM Kuwait", followers: "32.8K", position: 4, isRSM: true },
    { name: "RSM India", followers: "29K", position: 5, isRSM: false },
  ]

  const rsmPopulationData = [
    { name: "RSM Kuwait", followers: "32.8K", percentage: "0.7%", position: 1, isRSM: true },
    { name: "RSM UK", followers: "71.6K", percentage: "0.096%", position: 2, isRSM: false },
    { name: "RSM US", followers: "178K", percentage: "0.046%", position: 3, isRSM: false },
    { name: "RSM India", followers: "29K", percentage: "0.0015%", position: 4, isRSM: false },
  ]

  // Facebook RSM Network Data
  const facebookRsmNetworkData = [
    { name: "RSM Kuwait", followers: "41.8K", position: 1, isRSM: true },
    { name: "RSM Egypt/T.A", followers: "25K", position: 2, isRSM: false },
    { name: "RSM SA", followers: "20K", position: 3, isRSM: false },
    { name: "RSM Egypt", followers: "12K", position: 4, isRSM: false },
    { name: "RSM Morocco", followers: "16K", position: 5, isRSM: false },
  ]

  // Facebook RSM Population Data
  const facebookRsmPopulationData = [
    { name: "RSM Kuwait", followers: "41.8K", percentage: "0.98%", position: 1, isRSM: true },
    { name: "RSM Morocco", followers: "16K", percentage: "0.04%", position: 2, isRSM: false },
    { name: "RSM SA", followers: "20K", percentage: "0.03%", position: 3, isRSM: false },
    { name: "RSM EGY/TA", followers: "25K", percentage: "0.02%", position: 4, isRSM: false },
    { name: "RSM EGY", followers: "12K", percentage: "0.02%", position: 5, isRSM: false },
  ]

  // Twitter RSM Network Data
  const twitterRsmNetworkData = [
    { name: "RSM UK", followers: "18K", position: 1, isRSM: false },
    { name: "RSM Global", followers: "10.2K", position: 2, isRSM: false },
    { name: "RSM US", followers: "10.6K", position: 3, isRSM: false },
    { name: "RSM SA", followers: "10K", position: 4, isRSM: false },
    { name: "RSM Kuwait", followers: "4.8K", position: 5, isRSM: true },
  ]

  // Twitter RSM Population Data
  const twitterRsmPopulationData = [
    { name: "RSM Kuwait", followers: "4.8K", percentage: "0.11%", position: 1, isRSM: true },
    { name: "RSM UK", followers: "18K", percentage: "0.026%", position: 2, isRSM: false },
    { name: "RSM SA", followers: "10K", percentage: "0.015%", position: 3, isRSM: false },
    { name: "RSM US", followers: "10.6K", percentage: "0.003%", position: 4, isRSM: false },
  ]

  // Instagram RSM Network Data
  const instagramRsmNetworkData = [
    { name: "RSM Kuwait", followers: "6.1K", position: 1, isRSM: true },
    { name: "RSM US", followers: "6K", position: 2, isRSM: false },
    { name: "RSM Brazil", followers: "3.4K", position: 3, isRSM: false },
    { name: "RSM Indonesia", followers: "2.1K", position: 4, isRSM: false },
    { name: "RSM UK", followers: "2K", position: 5, isRSM: false },
  ]

  // Instagram RSM Population Data
  const instagramRsmPopulationData = [
    { name: "RSM Kuwait", followers: "6.1K", percentage: "0.11%", position: 1, isRSM: true },
    { name: "RSM UK", followers: "2K", percentage: "0.002%", position: 2, isRSM: false },
    { name: "RSM Brazil", followers: "3.4K", percentage: "0.001%", position: 3, isRSM: false },
    { name: "RSM US", followers: "6K", percentage: "0.001%", position: 4, isRSM: false },
  ]

  const handlePlatformSelect = (platform: string | null) => {
    if (platform === null) {
      setSelectedPlatform(null) // Show all platforms
    } else if (selectedPlatform === platform) {
      setSelectedPlatform(null) // Deselect if same platform is clicked again
    } else {
      setSelectedPlatform(platform)
    }
  }

  const shouldShowCard = (cardType: string) => {
    if (!selectedPlatform) return true // Show all cards when no platform is selected
    return cardType === selectedPlatform
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <AddDataButton
          componentName="Competitor Analysis"
          availableMetrics={["LinkedIn Followers", "Facebook Followers", "Twitter Followers", "Instagram Followers", "Market Position"]}
          onDataAdded={(data) => console.log("Competitor analysis data added:", data)}
        />
      </div>

      {/* Platform Selection Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => handlePlatformSelect('linkedin')}
          className={`group relative px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
            selectedPlatform === 'linkedin'
              ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-blue-500/20'
              : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700 hover:from-gray-100 hover:to-gray-200 shadow-md hover:shadow-lg transform hover:-translate-y-1 border border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.856-3.047-1.856 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </div>
          {selectedPlatform === 'linkedin' && (
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          )}
        </button>
        
        <button
          onClick={() => handlePlatformSelect('facebook')}
          className={`group relative px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
            selectedPlatform === 'facebook'
              ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-blue-500/20'
              : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700 hover:from-gray-100 hover:to-gray-200 shadow-md hover:shadow-lg transform hover:-translate-y-1 border border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </div>
          {selectedPlatform === 'facebook' && (
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          )}
        </button>
        
        <button
          onClick={() => handlePlatformSelect('twitter')}
          className={`group relative px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
            selectedPlatform === 'twitter'
              ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-blue-500/20'
              : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700 hover:from-gray-100 hover:to-gray-200 shadow-md hover:shadow-lg transform hover:-translate-y-1 border border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
            Twitter
          </div>
          {selectedPlatform === 'twitter' && (
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          )}
        </button>
        
        <button
          onClick={() => handlePlatformSelect('instagram')}
          className={`group relative px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
            selectedPlatform === 'instagram'
              ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-blue-500/20'
              : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700 hover:from-gray-100 hover:to-gray-200 shadow-md hover:shadow-lg transform hover:-translate-y-1 border border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
            </svg>
            Instagram
          </div>
          {selectedPlatform === 'instagram' && (
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          )}
        </button>
        
        <button
          onClick={() => handlePlatformSelect(null)}
          className="group relative px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 bg-gradient-to-br from-gray-800 to-gray-900 text-white hover:from-gray-900 hover:to-black shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-gray-700/20"
        >
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Show All
          </div>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
      
      {/* LinkedIn Section - All Three Cards */}
      {shouldShowCard('linkedin') && (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">LinkedIn Followers Growth</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {/* RSM Kuwait Position on LinkedIn (Within RSM Network) */}
            <Card className="min-h-[400px] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-primary">RSM Kuwait Position on LinkedIn</CardTitle>
                <CardDescription className="text-base text-muted-foreground font-medium">Within RSM Network</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  {rsmNetworkData.map((entity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                            entity.isRSM ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {entity.position}
                        </div>
                        <div>
                          <p className={`font-semibold text-base ${entity.isRSM ? "text-primary" : "text-foreground"}`}>{entity.name}</p>
                          <p className="text-sm text-muted-foreground">{entity.followers} followers</p>
                        </div>
                      </div>
                      {entity.isRSM && <Badge variant="secondary" className="text-xs">Our Position</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* RSM Kuwait Position on LinkedIn as a percentage of population */}
            <Card className="min-h-[400px] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-primary">RSM Kuwait Position on LinkedIn</CardTitle>
                <CardDescription className="text-base text-muted-foreground font-medium">As a percentage of population (Within RSM Network)</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  {rsmPopulationData.map((entity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                            entity.isRSM ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {entity.position}
                        </div>
                        <div>
                          <p className={`font-semibold text-base ${entity.isRSM ? "text-primary" : "text-foreground"}`}>{entity.name}</p>
                          <p className="text-sm text-muted-foreground">{entity.followers} followers</p>
                          <p className="text-xs text-muted-foreground font-medium">{entity.percentage} of Population</p>
                        </div>
                      </div>
                      {entity.isRSM && <Badge variant="secondary" className="text-xs">Our Position</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* RSM Kuwait Position on LinkedIn (Within our competitor in Kuwait) */}
            <Card className="min-h-[400px] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-primary">RSM Kuwait Position on LinkedIn</CardTitle>
                <CardDescription className="text-base text-muted-foreground font-medium">Within our competitor in Kuwait</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  {competitorData.linkedin.map((competitor, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                            competitor.isRSM ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {competitor.position}
                        </div>
                        <div>
                          <p className={`font-semibold text-base ${competitor.isRSM ? "text-primary" : "text-foreground"}`}>{competitor.name}</p>
                          <p className="text-sm text-muted-foreground">{competitor.followers} followers</p>
                        </div>
                      </div>
                      {competitor.isRSM && <Badge variant="secondary" className="text-xs">Our Position</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Facebook Section - All Three Cards */}
      {shouldShowCard('facebook') && (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">Facebook Followers Growth</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {/* RSM Kuwait Position on Facebook (Within RSM Network) */}
            <Card className="min-h-[400px] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-primary">RSM Kuwait Position on Facebook</CardTitle>
                <CardDescription className="text-base text-muted-foreground font-medium">Within RSM Network</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  {facebookRsmNetworkData.map((entity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                            entity.isRSM ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {entity.position}
                        </div>
                        <div>
                          <p className={`font-semibold text-base ${entity.isRSM ? "text-primary" : "text-foreground"}`}>{entity.name}</p>
                          <p className="text-sm text-muted-foreground">{entity.followers} followers</p>
                        </div>
                      </div>
                      {entity.isRSM && <Badge variant="secondary" className="text-xs">Our Position</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* RSM Kuwait Position on Facebook as a percentage of population */}
            <Card className="min-h-[400px] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-primary">RSM Kuwait Position on Facebook</CardTitle>
                <CardDescription className="text-base text-muted-foreground font-medium">As a percentage of population (Within RSM Network)</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  {facebookRsmPopulationData.map((entity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                            entity.isRSM ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {entity.position}
                        </div>
                        <div>
                          <p className={`font-semibold text-base ${entity.isRSM ? "text-primary" : "text-foreground"}`}>{entity.name}</p>
                          <p className="text-sm text-muted-foreground">{entity.followers} followers</p>
                          <p className="text-xs text-muted-foreground font-medium">{entity.percentage} of Population</p>
                        </div>
                      </div>
                      {entity.isRSM && <Badge variant="secondary" className="text-xs">Our Position</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* RSM Kuwait Position on Facebook (Within our competitor in Kuwait) */}
            <Card className="min-h-[400px] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-primary">RSM Kuwait Position on Facebook</CardTitle>
                <CardDescription className="text-base text-muted-foreground font-medium">Within our competitor in Kuwait</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  {competitorData.facebook.map((competitor, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                            competitor.isRSM ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {competitor.position}
                        </div>
                        <div>
                          <p className={`font-semibold text-base ${competitor.isRSM ? "text-primary" : "text-foreground"}`}>{competitor.name}</p>
                          <p className="text-sm text-muted-foreground">{competitor.followers} followers</p>
                        </div>
                      </div>
                      {competitor.isRSM && <Badge variant="secondary" className="text-xs">Our Position</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Twitter Section - All Three Cards */}
      {shouldShowCard('twitter') && (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">Twitter Followers Growth</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {/* RSM Kuwait Position on Twitter (Within RSM Network) */}
            <Card className="min-h-[400px] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-primary">RSM Kuwait Position on Twitter</CardTitle>
                <CardDescription className="text-base text-muted-foreground font-medium">Within RSM Network</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  {twitterRsmNetworkData.map((entity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                            entity.isRSM ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {entity.position}
                        </div>
                        <div>
                          <p className={`font-semibold text-base ${entity.isRSM ? "text-primary" : "text-foreground"}`}>{entity.name}</p>
                          <p className="text-sm text-muted-foreground">{entity.followers} followers</p>
                        </div>
                      </div>
                      {entity.isRSM && <Badge variant="secondary" className="text-xs">Our Position</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* RSM Kuwait Position on Twitter as a percentage of population */}
            <Card className="min-h-[400px] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-primary">RSM Kuwait Position on Twitter</CardTitle>
                <CardDescription className="text-base text-muted-foreground font-medium">As a percentage of population (Within RSM Network)</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  {twitterRsmPopulationData.map((entity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                            entity.isRSM ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {entity.position}
                        </div>
                        <div>
                          <p className={`font-semibold text-base ${entity.isRSM ? "text-primary" : "text-foreground"}`}>{entity.name}</p>
                          <p className="text-sm text-muted-foreground">{entity.followers} followers</p>
                          <p className="text-xs text-muted-foreground font-medium">{entity.percentage} of Population</p>
                        </div>
                      </div>
                      {entity.isRSM && <Badge variant="secondary" className="text-xs">Our Position</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* RSM Kuwait Position on Twitter (Within our competitor in Kuwait) */}
            <Card className="min-h-[400px] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-primary">RSM Kuwait Position on Twitter</CardTitle>
                <CardDescription className="text-base text-muted-foreground font-medium">Within our competitor in Kuwait</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  {competitorData.twitter.map((competitor, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                            competitor.isRSM ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {competitor.position}
                        </div>
                        <div>
                          <p className={`font-semibold text-base ${competitor.isRSM ? "text-primary" : "text-foreground"}`}>{competitor.name}</p>
                          <p className="text-sm text-muted-foreground">{competitor.followers} followers</p>
                        </div>
                      </div>
                      {competitor.isRSM && <Badge variant="secondary" className="text-xs">Our Position</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Instagram Section - All Three Cards */}
      {shouldShowCard('instagram') && (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">Instagram Followers Growth</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {/* RSM Kuwait Position on Instagram (Within RSM Network) */}
            <Card className="min-h-[400px] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-primary">RSM Kuwait Position on Instagram</CardTitle>
                <CardDescription className="text-base text-muted-foreground font-medium">Within RSM Network</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  {instagramRsmNetworkData.map((entity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                            entity.isRSM ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {entity.position}
                        </div>
                        <div>
                          <p className={`font-semibold text-base ${entity.isRSM ? "text-primary" : "text-foreground"}`}>{entity.name}</p>
                          <p className="text-sm text-muted-foreground">{entity.followers} followers</p>
                        </div>
                      </div>
                      {entity.isRSM && <Badge variant="secondary" className="text-xs">Our Position</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* RSM Kuwait Position on Instagram as a percentage of population */}
            <Card className="min-h-[400px] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-primary">RSM Kuwait Position on Instagram</CardTitle>
                <CardDescription className="text-base text-muted-foreground font-medium">As a percentage of population (Within RSM Network)</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  {instagramRsmPopulationData.map((entity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                            entity.isRSM ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {entity.position}
                        </div>
                        <div>
                          <p className={`font-semibold text-base ${entity.isRSM ? "text-primary" : "text-foreground"}`}>{entity.name}</p>
                          <p className="text-sm text-muted-foreground">{entity.followers} followers</p>
                          <p className="text-xs text-muted-foreground font-medium">{entity.percentage} of Population</p>
                        </div>
                      </div>
                      {entity.isRSM && <Badge variant="secondary" className="text-xs">Our Position</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* RSM Kuwait Position on Instagram (Within our competitor in Kuwait) */}
            <Card className="min-h-[400px] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-primary">RSM Kuwait Position on Instagram</CardTitle>
                <CardDescription className="text-base text-muted-foreground font-medium">Within our competitor in Kuwait</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  {competitorData.instagram.map((competitor, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                            competitor.isRSM ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {competitor.position}
                        </div>
                        <div>
                          <p className={`font-semibold text-base ${competitor.isRSM ? "text-primary" : "text-foreground"}`}>{competitor.name}</p>
                          <p className="text-sm text-muted-foreground">{competitor.followers} followers</p>
                        </div>
                      </div>
                      {competitor.isRSM && <Badge variant="secondary" className="text-xs">Our Position</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}
