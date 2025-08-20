import { SocialMediaDashboard } from "@/components/social-media-dashboard"
import { PasswordProtection } from "@/components/password-protection"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <PasswordProtection>
        <SocialMediaDashboard />
      </PasswordProtection>
    </main>
  )
}
