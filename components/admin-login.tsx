"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useAdmin } from "./admin-context"
import { LogIn, LogOut, Shield } from "lucide-react"

export function AdminLogin() {
  const { isAdmin, login, logout } = useAdmin()
  const [open, setOpen] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = () => {
    setError("")
    if (login(username, password)) {
      setOpen(false)
      setUsername("")
      setPassword("")
    } else {
      setError("Invalid credentials. Use RSM-Admin/RSMkuwaitNex")
    }
  }

  const handleLogout = () => {
    logout()
  }

  if (isAdmin) {
    return (
      <div className="flex items-center gap-2">
        <Shield className="h-4 w-4 text-[#3F9C35]" />
        <span className="text-sm text-[#3F9C35] font-medium">Admin</span>
        <Button size="sm" variant="outline" onClick={handleLogout}>
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          <LogIn className="h-4 w-4 mr-2" />
          Admin Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="text-[#2D3748]">Admin Login</DialogTitle>
          <DialogDescription className="text-[#4A5568]">
            Enter your admin credentials to access data management features.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label htmlFor="username" className="text-sm font-medium text-[#2D3748]">
              Username
            </label>
            <Input
              id="username"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-[#2D3748]">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            />
          </div>
          {error && (
            <p className="text-sm text-red-600 bg-red-50 p-2 rounded">
              {error}
            </p>
          )}
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleLogin} className="bg-[#3F9C35] hover:bg-[#2D5A2A] text-white">Login</Button>
          </div>
          <div className="text-xs text-[#718096] bg-[#F7FAFC] p-2 rounded">
            <strong className="text-[#2D3748]">Demo credentials:</strong><br />
            Username: RSM-Admin<br />
            Password: RSMkuwaitNex
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
