"use client"

import type React from "react"
import { useState, useCallback } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, AlertCircle } from "lucide-react"

// Validation utilities
export const validators = {
  required: (value: string) => {
    return value.trim().length > 0 ? null : "This field is required"
  },

  email: (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(value) ? null : "Please enter a valid email address"
  },

  minLength: (min: number) => (value: string) => {
    return value.length >= min ? null : `Must be at least ${min} characters`
  },

  maxLength: (max: number) => (value: string) => {
    return value.length <= max ? null : `Must be no more than ${max} characters`
  },

  password: (value: string) => {
    if (value.length < 8) return "Password must be at least 8 characters"
    if (!/(?=.*[a-z])/.test(value)) return "Password must contain at least one lowercase letter"
    if (!/(?=.*[A-Z])/.test(value)) return "Password must contain at least one uppercase letter"
    if (!/(?=.*\d)/.test(value)) return "Password must contain at least one number"
    return null
  },

  confirmPassword: (originalPassword: string) => (value: string) => {
    return value === originalPassword ? null : "Passwords do not match"
  },
}

// Form field component with validation
interface FormFieldProps {
  label: string
  name: string
  type?: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
  validators?: Array<(value: string) => string | null>
  touched?: boolean
  multiline?: boolean
  rows?: number
  className?: string
}

export function FormField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  validators = [],
  touched = false,
  multiline = false,
  rows = 3,
  className = "",
}: FormFieldProps) {
  const [isFocused, setIsFocused] = useState(false)

  // Run validation
  const errors = validators.map((validator) => validator(value)).filter(Boolean)
  const hasError = touched && errors.length > 0
  const isValid = touched && value.length > 0 && errors.length === 0

  const InputComponent = multiline ? Textarea : Input

  return (
    <div className={`space-y-2 ${className}`}>
      <Label htmlFor={name} className="text-sm font-medium text-foreground font-mono tracking-wider">
        {label}
      </Label>
      <div className="relative">
        <InputComponent
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows={multiline ? rows : undefined}
          className={`
            ${hasError ? "border-red-500 focus:border-red-500" : ""}
            ${isValid ? "border-axalio-green focus:border-axalio-green" : ""}
            ${isFocused ? "ring-2 ring-offset-2" : ""}
            ${hasError ? "ring-red-500/20" : ""}
            ${isValid ? "ring-axalio-green/20" : ""}
          `}
        />
        {isValid && <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-axalio-green" />}
        {hasError && <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-red-500" />}
      </div>
      {hasError && <p className="text-xs text-red-500 font-mono">{errors[0]}</p>}
      {isValid && <p className="text-xs text-axalio-green font-mono">✓ Valid</p>}
    </div>
  )
}

// Form validation hook
interface UseFormValidationOptions<T> {
  initialValues: T
  validators: Partial<Record<keyof T, Array<(value: string) => string | null>>>
  onSubmit: (values: T) => void | Promise<void>
}

export function useFormValidation<T extends Record<string, string>>({
  initialValues,
  validators,
  onSubmit,
}: UseFormValidationOptions<T>) {
  const [values, setValues] = useState<T>(initialValues)
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const setValue = useCallback((name: keyof T, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }))
  }, [])

  const setFieldTouched = useCallback((name: keyof T) => {
    setTouched((prev) => ({ ...prev, [name]: true }))
  }, [])

  const validateField = useCallback(
    (name: keyof T, value: string) => {
      const fieldValidators = validators[name] || []
      return fieldValidators.map((validator) => validator(value)).filter(Boolean)
    },
    [validators],
  )

  const validateForm = useCallback(() => {
    const errors: Partial<Record<keyof T, string[]>> = {}
    let hasErrors = false

    Object.keys(values).forEach((key) => {
      const fieldErrors = validateField(key as keyof T, values[key as keyof T])
      if (fieldErrors.length > 0) {
        errors[key as keyof T] = fieldErrors
        hasErrors = true
      }
    })

    return { errors, hasErrors }
  }, [values, validateField])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()

      // Mark all fields as touched
      const allTouched = Object.keys(values).reduce(
        (acc, key) => {
          acc[key as keyof T] = true
          return acc
        },
        {} as Record<keyof T, boolean>,
      )
      setTouched(allTouched)

      const { hasErrors } = validateForm()
      if (hasErrors) return

      setIsSubmitting(true)
      try {
        await onSubmit(values)
      } finally {
        setIsSubmitting(false)
      }
    },
    [values, validateForm, onSubmit],
  )

  return {
    values,
    touched,
    isSubmitting,
    setValue,
    setFieldTouched,
    validateField,
    validateForm,
    handleSubmit,
  }
}
