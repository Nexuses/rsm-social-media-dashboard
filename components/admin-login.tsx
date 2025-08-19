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
      setError("Invalid credentials. Use admin/admin123")
    }
  }

  const handleLogout = () => {
    logout()
  }

  if (isAdmin) {
    return (
      <div className="flex items-center gap-2">
        <Shield className="h-4 w-4 text-green-600" />
        <span className="text-sm text-green-600 font-medium">Admin</span>
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
          <DialogTitle>Admin Login</DialogTitle>
          <DialogDescription>
            Enter your admin credentials to access data management features.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label htmlFor="username" className="text-sm font-medium">
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
            <label htmlFor="password" className="text-sm font-medium">
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
            <Button onClick={handleLogin}>Login</Button>
          </div>
          <div className="text-xs text-muted-foreground bg-muted p-2 rounded">
            <strong>Demo credentials:</strong><br />
            Username: admin<br />
            Password: admin123
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
