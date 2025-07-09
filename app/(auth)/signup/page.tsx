"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to login page since we handle signup through the login form
    router.push("/auth/login")
  }, [router])

  return null
}
