"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock } from "lucide-react"

interface PasswordProtectionProps {
  children: React.ReactNode
}

export function PasswordProtection({ children }: PasswordProtectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [showError, setShowError] = useState(false)

  const CORRECT_PASSWORD = "NEX#RSM2025#"

  useEffect(() => {
    // Check if user is already authenticated (stored in localStorage)
    const authStatus = localStorage.getItem("dashboard_authenticated")
    if (authStatus === "true") {
      setIsAuthenticated(true)
    }
  }, [])

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPassword = e.target.value
    setPassword(inputPassword)
    setShowError(false)

    // Check if password is correct
    if (inputPassword === CORRECT_PASSWORD) {
      setIsAuthenticated(true)
      localStorage.setItem("dashboard_authenticated", "true")
    } else if (inputPassword.length === CORRECT_PASSWORD.length) {
      // Show error only when password length matches but is incorrect
      setShowError(true)
      setPassword("")
    }
  }

  if (isAuthenticated) {
    return <>{children}</>
  }

  return (
    <div className="relative">
      {/* Blurred Dashboard */}
      <div className="filter blur-sm pointer-events-none select-none">
        {children}
      </div>

      {/* Password Overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <Card className="w-[400px] mx-4">
          <CardHeader className="text-center space-y-2">
            <div className="mx-auto w-16 h-16 bg-[#3F9C35]/10 rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-[#3F9C35]" />
            </div>
            <CardTitle className="text-xl text-[#2D3748]">Password Protected</CardTitle>
            <p className="text-sm text-[#4A5568]">
              Enter the password to access the dashboard
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
              className={`text-center text-lg tracking-wider ${
                showError ? "border-red-500 focus:border-red-500" : ""
              }`}
              autoFocus
            />
            {showError && (
              <p className="text-sm text-red-500 text-center">
                Incorrect password. Please try again.
              </p>
            )}
            <p className="text-xs text-[#718096] text-center">
              Type the correct password and it will automatically unlock
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
