"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, ArrowLeft, Mail, CheckCircle } from "lucide-react"

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate password reset process
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 2000)
  }

  if (isSubmitted) {
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
        </div>

        {/* Success Message */}
        <Card className="bg-neutral-900 border-neutral-700">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 bg-axalio-green/20 rounded-full flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-axalio-green" />
            </div>
            <CardTitle className="text-xl text-white font-mono">Check Your Email</CardTitle>
            <CardDescription className="text-neutral-400 font-mono text-sm">
              We've sent password reset instructions to your email address
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="bg-neutral-800 border border-neutral-600 rounded-lg p-4">
              <Mail className="h-8 w-8 text-axalio-green mx-auto mb-2" />
              <p className="text-sm text-neutral-300 font-mono">
                If you don't see the email in your inbox, check your spam folder
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/auth/login" className="w-full">
              <Button
                variant="outline"
                className="w-full border-neutral-600 text-neutral-300 hover:bg-neutral-800 font-mono bg-transparent"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Sign In
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    )
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
        <h1 className="text-2xl font-bold text-white mb-2">Reset Password</h1>
        <p className="text-neutral-400 font-mono text-sm">Enter your email to receive reset instructions</p>
      </div>

      {/* Reset Form */}
      <Card className="bg-neutral-900 border-neutral-700">
        <CardHeader className="space-y-1">
          <CardTitle className="text-xl text-white font-mono">Forgot Password</CardTitle>
          <CardDescription className="text-neutral-400 font-mono text-sm">
            We'll send you a link to reset your password
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
                  Sending...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Send Reset Link
                </div>
              )}
            </Button>

            <Link href="/auth/login" className="w-full">
              <Button
                variant="outline"
                className="w-full border-neutral-600 text-neutral-300 hover:bg-neutral-800 font-mono bg-transparent"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Sign In
              </Button>
            </Link>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
