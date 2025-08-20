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
              ? 'bg-[#009CDE] text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-[#009CDE]'
              : 'bg-white text-[#009CDE] hover:bg-[#009CDE] hover:text-white shadow-md hover:shadow-lg transform hover:-translate-y-1 border-2 border-[#009CDE]'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-[#009CDE]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.856-3.047-1.856 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </div>
          {selectedPlatform === 'linkedin' && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#009CDE] rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </button>
        
        <button
          onClick={() => handlePlatformSelect('facebook')}
          className={`group relative px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
            selectedPlatform === 'facebook'
              ? 'bg-[#3F9C35] text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-[#3F9C35]'
              : 'bg-white text-[#1877F2] hover:bg-[#1877F2] hover:text-white shadow-md hover:shadow-lg transform hover:-translate-y-1 border-2 border-[#1877F2]'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </div>
          {selectedPlatform === 'facebook' && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#3F9C35] rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </button>
        
        <button
          onClick={() => handlePlatformSelect('twitter')}
          className={`group relative px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
            selectedPlatform === 'twitter'
              ? 'bg-[#63666A] text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-[#63666A]'
              : 'bg-white text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white shadow-md hover:shadow-lg transform hover:-translate-y-1 border-2 border-[#1DA1F2]'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
            Twitter
          </div>
          {selectedPlatform === 'twitter' && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#63666A] rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </button>
        
        <button
          onClick={() => handlePlatformSelect('instagram')}
          className={`group relative px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
            selectedPlatform === 'instagram'
              ? 'bg-[#00153C] text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-[#00153C]'
              : 'bg-white text-[#E4405F] hover:bg-[#E4405F] hover:text-white shadow-md hover:shadow-lg transform hover:-translate-y-1 border-2 border-[#E4405F]'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </div>
          {selectedPlatform === 'instagram' && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#00153C] rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </button>
        
        <button
          onClick={() => handlePlatformSelect(null)}
          className={`group relative px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
            !selectedPlatform
              ? 'bg-[#63666A] text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-[#63666A]'
              : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg transform hover:-translate-y-1 border-2 border-gray-300 hover:border-gray-400'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Show All
          </div>
        </button>
      </div>
      
      {/* LinkedIn Section - All Three Cards */}
      {shouldShowCard('linkedin') && (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-[#3F9C35] mb-6">LinkedIn Followers Growth</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {/* RSM Kuwait Position on LinkedIn (Within RSM Network) */}
            <Card className="min-h-[400px] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-[#2D5A2A]">RSM Kuwait Position on LinkedIn</CardTitle>
                <CardDescription className="text-base text-[#4A5568] font-medium">Within RSM Network</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  {rsmNetworkData.map((entity, index) => (
                    <div key={index} className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                      entity.isRSM 
                        ? 'bg-[#3F9C35]/20 border-[#3F9C35]/30 hover:bg-[#3F9C35]/30'
                        : 'bg-muted/30 hover:bg-muted/50'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                            entity.isRSM ? "bg-[#3F9C35] text-white" : "bg-[#E2E8F0] text-[#4A5568]"
                          }`}
                        >
                          {entity.position}
                        </div>
                        <div>
                          <p className={`font-semibold text-base ${entity.isRSM ? "text-[#2D5A2A]" : "text-[#2D3748]"}`}>{entity.name}</p>
                          <p className="text-sm text-[#718096]">{entity.followers} followers</p>
                        </div>
                      </div>
                      {entity.isRSM && <Badge variant="secondary" className="text-xs bg-[#3F9C35] text-white">Our Position</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* RSM Kuwait Position on LinkedIn as a percentage of population */}
            <Card className="min-h-[400px] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-[#2D5A2A]">RSM Kuwait Position on LinkedIn</CardTitle>
                <CardDescription className="text-base text-[#4A5568] font-medium">As a percentage of population (Within RSM Network)</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  {rsmPopulationData.map((entity, index) => (
                    <div key={index} className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                      entity.isRSM 
                        ? 'bg-[#3F9C35]/20 border-[#3F9C35]/30 hover:bg-[#3F9C35]/30'
                        : 'bg-muted/30 hover:bg-muted/50'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                            entity.isRSM ? "bg-[#3F9C35] text-white" : "bg-[#E2E8F0] text-[#4A5568]"
                          }`}
                        >
                          {entity.position}
                        </div>
                        <div>
                          <p className={`font-semibold text-base ${entity.isRSM ? "text-[#2D5A2A]" : "text-[#2D3748]"}`}>{entity.name}</p>
                          <p className="text-sm text-[#718096]">{entity.followers} followers</p>
                          <p className="text-xs text-[#718096] font-medium">{entity.percentage} of Population</p>
                        </div>
                      </div>
                      {entity.isRSM && <Badge variant="secondary" className="text-xs bg-[#3F9C35] text-white">Our Position</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* RSM Kuwait Position on LinkedIn (Within our competitor in Kuwait) */}
            <Card className="min-h-[400px] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-[#2D5A2A]">RSM Kuwait Position on LinkedIn</CardTitle>
                <CardDescription className="text-base text-[#4A5568] font-medium">Within our competitor in Kuwait</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  {competitorData.linkedin.map((competitor, index) => (
                    <div key={index} className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                      competitor.isRSM 
                        ? 'bg-[#3F9C35]/20 border-[#3F9C35]/30 hover:bg-[#3F9C35]/30'
                        : 'bg-muted/30 hover:bg-muted/50'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                            competitor.isRSM ? "bg-[#3F9C35] text-white" : "bg-[#E2E8F0] text-[#4A5568]"
                          }`}
                        >
                          {competitor.position}
                        </div>
                        <div>
                          <p className={`font-semibold text-base ${competitor.isRSM ? "text-[#2D5A2A]" : "text-[#2D3748]"}`}>{competitor.name}</p>
                          <p className="text-sm text-[#718096]">{competitor.followers} followers</p>
                        </div>
                      </div>
                      {competitor.isRSM && <Badge variant="secondary" className="text-xs bg-[#3F9C35] text-white">Our Position</Badge>}
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
          <h2 className="text-3xl font-bold text-center text-[#3F9C35] mb-6">Facebook Followers Growth</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {/* RSM Kuwait Position on Facebook (Within RSM Network) */}
            <Card className="min-h-[400px] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-[#2D5A2A]">RSM Kuwait Position on Facebook</CardTitle>
                <CardDescription className="text-base text-[#4A5568] font-medium">Within RSM Network</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  {facebookRsmNetworkData.map((entity, index) => (
                    <div key={index} className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                      entity.isRSM 
                        ? 'bg-[#3F9C35]/20 border-[#3F9C35]/30 hover:bg-[#3F9C35]/30'
                        : 'bg-muted/30 hover:bg-muted/50'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                            entity.isRSM ? "bg-[#3F9C35] text-white" : "bg-[#E2E8F0] text-[#4A5568]"
                          }`}
                        >
                          {entity.position}
                        </div>
                        <div>
                          <p className={`font-semibold text-base ${entity.isRSM ? "text-[#2D5A2A]" : "text-[#2D3748]"}`}>{entity.name}</p>
                          <p className="text-sm text-[#718096]">{entity.followers} followers</p>
                        </div>
                      </div>
                      {entity.isRSM && <Badge variant="secondary" className="text-xs bg-[#3F9C35] text-white">Our Position</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* RSM Kuwait Position on Facebook as a percentage of population */}
            <Card className="min-h-[400px] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-[#2D5A2A]">RSM Kuwait Position on Facebook</CardTitle>
                <CardDescription className="text-base text-[#4A5568] font-medium">As a percentage of population (Within RSM Network)</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  {facebookRsmPopulationData.map((entity, index) => (
                    <div key={index} className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                      entity.isRSM 
                        ? 'bg-[#3F9C35]/20 border-[#3F9C35]/30 hover:bg-[#3F9C35]/30'
                        : 'bg-muted/30 hover:bg-muted/50'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                            entity.isRSM ? "bg-[#3F9C35] text-white" : "bg-[#E2E8F0] text-[#4A5568]"
                          }`}
                        >
                          {entity.position}
                        </div>
                        <div>
                          <p className={`font-semibold text-base ${entity.isRSM ? "text-[#2D5A2A]" : "text-[#2D3748]"}`}>{entity.name}</p>
                          <p className="text-sm text-[#718096]">{entity.followers} followers</p>
                          <p className="text-xs text-[#718096] font-medium">{entity.percentage} of Population</p>
                        </div>
                      </div>
                      {entity.isRSM && <Badge variant="secondary" className="text-xs bg-[#3F9C35] text-white">Our Position</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* RSM Kuwait Position on Facebook (Within our competitor in Kuwait) */}
            <Card className="min-h-[400px] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-[#2D5A2A]">RSM Kuwait Position on Facebook</CardTitle>
                <CardDescription className="text-base text-[#4A5568] font-medium">Within our competitor in Kuwait</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  {competitorData.facebook.map((competitor, index) => (
                    <div key={index} className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                      competitor.isRSM 
                        ? 'bg-[#3F9C35]/20 border-[#3F9C35]/30 hover:bg-[#3F9C35]/30'
                        : 'bg-muted/30 hover:bg-muted/50'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                            competitor.isRSM ? "bg-[#3F9C35] text-white" : "bg-[#E2E8F0] text-[#4A5568]"
                          }`}
                        >
                          {competitor.position}
                        </div>
                        <div>
                          <p className={`font-semibold text-base ${competitor.isRSM ? "text-[#2D5A2A]" : "text-[#2D3748]"}`}>{competitor.name}</p>
                          <p className="text-sm text-[#718096]">{competitor.followers} followers</p>
                        </div>
                      </div>
                      {competitor.isRSM && <Badge variant="secondary" className="text-xs bg-[#3F9C35] text-white">Our Position</Badge>}
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
          <h2 className="text-3xl font-bold text-center text-[#3F9C35] mb-6">Twitter Followers Growth</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {/* RSM Kuwait Position on Twitter (Within RSM Network) */}
            <Card className="min-h-[400px] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-[#2D5A2A]">RSM Kuwait Position on Twitter</CardTitle>
                <CardDescription className="text-base text-[#4A5568] font-medium">Within RSM Network</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  {twitterRsmNetworkData.map((entity, index) => (
                    <div key={index} className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                      entity.isRSM 
                        ? 'bg-[#3F9C35]/20 border-[#3F9C35]/30 hover:bg-[#3F9C35]/30'
                        : 'bg-muted/30 hover:bg-muted/50'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                            entity.isRSM ? "bg-[#3F9C35] text-white" : "bg-[#E2E8F0] text-[#4A5568]"
                          }`}
                        >
                          {entity.position}
                        </div>
                        <div>
                          <p className={`font-semibold text-base ${entity.isRSM ? "text-[#2D5A2A]" : "text-[#2D3748]"}`}>{entity.name}</p>
                          <p className="text-sm text-[#718096]">{entity.followers} followers</p>
                        </div>
                      </div>
                      {entity.isRSM && <Badge variant="secondary" className="text-xs bg-[#3F9C35] text-white">Our Position</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* RSM Kuwait Position on Twitter as a percentage of population */}
            <Card className="min-h-[400px] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-[#2D5A2A]">RSM Kuwait Position on Twitter</CardTitle>
                <CardDescription className="text-base text-[#4A5568] font-medium">As a percentage of population (Within RSM Network)</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  {twitterRsmPopulationData.map((entity, index) => (
                    <div key={index} className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                      entity.isRSM 
                        ? 'bg-[#3F9C35]/20 border-[#3F9C35]/30 hover:bg-[#3F9C35]/30'
                        : 'bg-muted/30 hover:bg-muted/50'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                            entity.isRSM ? "bg-[#3F9C35] text-white" : "bg-[#E2E8F0] text-[#4A5568]"
                          }`}
                        >
                          {entity.position}
                        </div>
                        <div>
                          <p className={`font-semibold text-base ${entity.isRSM ? "text-[#2D5A2A]" : "text-[#2D3748]"}`}>{entity.name}</p>
                          <p className="text-sm text-[#718096]">{entity.followers} followers</p>
                          <p className="text-xs text-[#718096] font-medium">{entity.percentage} of Population</p>
                        </div>
                      </div>
                      {entity.isRSM && <Badge variant="secondary" className="text-xs bg-[#3F9C35] text-white">Our Position</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* RSM Kuwait Position on Twitter (Within our competitor in Kuwait) */}
            <Card className="min-h-[400px] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-[#2D5A2A]">RSM Kuwait Position on Twitter</CardTitle>
                <CardDescription className="text-base text-[#4A5568] font-medium">Within our competitor in Kuwait</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  {competitorData.twitter.map((competitor, index) => (
                    <div key={index} className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                      competitor.isRSM 
                        ? 'bg-[#3F9C35]/20 border-[#3F9C35]/30 hover:bg-[#3F9C35]/30'
                        : 'bg-muted/30 hover:bg-muted/50'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                            competitor.isRSM ? "bg-[#3F9C35] text-white" : "bg-[#E2E8F0] text-[#4A5568]"
                          }`}
                        >
                          {competitor.position}
                        </div>
                        <div>
                          <p className={`font-semibold text-base ${competitor.isRSM ? "text-[#2D5A2A]" : "text-[#2D3748]"}`}>{competitor.name}</p>
                          <p className="text-sm text-[#718096]">{competitor.followers} followers</p>
                        </div>
                      </div>
                      {competitor.isRSM && <Badge variant="secondary" className="text-xs bg-[#3F9C35] text-white">Our Position</Badge>}
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
          <h2 className="text-3xl font-bold text-center text-[#3F9C35] mb-6">Instagram Followers Growth</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {/* RSM Kuwait Position on Instagram (Within RSM Network) */}
            <Card className="min-h-[400px] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-[#2D5A2A]">RSM Kuwait Position on Instagram</CardTitle>
                <CardDescription className="text-base text-[#4A5568] font-medium">Within RSM Network</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  {instagramRsmNetworkData.map((entity, index) => (
                    <div key={index} className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                      entity.isRSM 
                        ? 'bg-[#3F9C35]/20 border-[#3F9C35]/30 hover:bg-[#3F9C35]/30'
                        : 'bg-muted/30 hover:bg-muted/50'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                            entity.isRSM ? "bg-[#3F9C35] text-white" : "bg-[#E2E8F0] text-[#4A5568]"
                          }`}
                        >
                          {entity.position}
                        </div>
                        <div>
                          <p className={`font-semibold text-base ${entity.isRSM ? "text-[#2D5A2A]" : "text-[#2D3748]"}`}>{entity.name}</p>
                          <p className="text-sm text-[#718096]">{entity.followers} followers</p>
                        </div>
                      </div>
                      {entity.isRSM && <Badge variant="secondary" className="text-xs bg-[#3F9C35] text-white">Our Position</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* RSM Kuwait Position on Instagram as a percentage of population */}
            <Card className="min-h-[400px] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-[#2D5A2A]">RSM Kuwait Position on Instagram</CardTitle>
                <CardDescription className="text-base text-[#4A5568] font-medium">As a percentage of population (Within RSM Network)</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  {instagramRsmPopulationData.map((entity, index) => (
                    <div key={index} className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                      entity.isRSM 
                        ? 'bg-[#3F9C35]/20 border-[#3F9C35]/30 hover:bg-[#3F9C35]/30'
                        : 'bg-muted/30 hover:bg-muted/50'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                            entity.isRSM ? "bg-[#3F9C35] text-white" : "bg-[#E2E8F0] text-[#4A5568]"
                          }`}
                        >
                          {entity.position}
                        </div>
                        <div>
                          <p className={`font-semibold text-base ${entity.isRSM ? "text-[#2D5A2A]" : "text-[#2D3748]"}`}>{entity.name}</p>
                          <p className="text-sm text-[#718096]">{entity.followers} followers</p>
                          <p className="text-xs text-[#718096] font-medium">{entity.percentage} of Population</p>
                        </div>
                      </div>
                      {entity.isRSM && <Badge variant="secondary" className="text-xs bg-[#3F9C35] text-white">Our Position</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* RSM Kuwait Position on Instagram (Within our competitor in Kuwait) */}
            <Card className="min-h-[400px] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-[#2D5A2A]">RSM Kuwait Position on Instagram</CardTitle>
                <CardDescription className="text-base text-[#4A5568] font-medium">Within our competitor in Kuwait</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  {competitorData.instagram.map((competitor, index) => (
                    <div key={index} className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                      competitor.isRSM 
                        ? 'bg-[#3F9C35]/20 border-[#3F9C35]/30 hover:bg-[#3F9C35]/30'
                        : 'bg-muted/30 hover:bg-muted/50'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                            competitor.isRSM ? "bg-[#3F9C35] text-white" : "bg-[#E2E8F0] text-[#4A5568]"
                          }`}
                        >
                          {competitor.position}
                        </div>
                        <div>
                          <p className={`font-semibold text-base ${competitor.isRSM ? "text-[#2D5A2A]" : "text-[#2D3748]"}`}>{competitor.name}</p>
                          <p className="text-sm text-[#718096]">{competitor.followers} followers</p>
                        </div>
                      </div>
                      {competitor.isRSM && <Badge variant="secondary" className="text-xs bg-[#3F9C35] text-white">Our Position</Badge>}
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
