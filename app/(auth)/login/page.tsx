"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Globe, Eye, EyeOff, Shield, Lock } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to dashboard
      window.location.href = "/dashboard"
    }, 2000)
  }

  return (
    <div className="w-full max-w-md space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-12 w-12 bg-axalio-green rounded-xl flex items-center justify-center">
            <Globe className="h-7 w-7 text-black font-bold" />
          </div>
          <div className="flex flex-col items-start">
            <span className="font-mono text-2xl font-bold text-white">AXALIO</span>
            <span className="font-mono text-sm text-neutral-400">Command Interface</span>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
        <p className="text-neutral-400 font-mono text-sm">Access your tactical command interface</p>
      </div>

      {/* Login Form */}
      <Card className="bg-neutral-900 border-neutral-700">
        <CardHeader className="space-y-1">
          <CardTitle className="text-xl text-white font-mono">Sign In</CardTitle>
          <CardDescription className="text-neutral-400 font-mono text-sm">
            Enter your credentials to access the platform
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-neutral-300 font-mono text-sm">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@axalio.com"
                required
                className="bg-neutral-800 border-neutral-600 text-white placeholder:text-neutral-500 focus:border-axalio-green font-mono"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-neutral-300 font-mono text-sm">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  className="bg-neutral-800 border-neutral-600 text-white placeholder:text-neutral-500 focus:border-axalio-green font-mono pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-neutral-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-neutral-400" />
                  )}
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-neutral-600 bg-neutral-800 text-axalio-green focus:ring-axalio-green"
                />
                <Label htmlFor="remember" className="text-sm text-neutral-400 font-mono">
                  Remember me
                </Label>
              </div>
              <Link
                href="/auth/forgot-password"
                className="text-sm text-axalio-green hover:text-axalio-green/80 font-mono"
              >
                Forgot password?
              </Link>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="w-full bg-axalio-green hover:bg-axalio-green/90 text-black font-mono font-semibold"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  Authenticating...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Sign In
                </div>
              )}
            </Button>

            <Separator className="bg-neutral-700" />

            <div className="text-center">
              <p className="text-sm text-neutral-400 font-mono">
                Need access?{" "}
                <Link href="/auth/signup" className="text-axalio-green hover:text-axalio-green/80">
                  Request Account
                </Link>
              </p>
            </div>
          </CardFooter>
        </form>
      </Card>

      {/* Security Notice */}
      <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4">
        <div className="flex items-center gap-3">
          <Lock className="h-5 w-5 text-axalio-green" />
          <div>
            <p className="text-sm font-semibold text-white font-mono">Secure Access</p>
            <p className="text-xs text-neutral-400 font-mono">
              All connections are encrypted and monitored for security
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
