"use client"

import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "@/lib/theme-context"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const themes = [
    {
      name: "Light",
      value: "light" as const,
      icon: Sun,
    },
    {
      name: "Dark",
      value: "dark" as const,
      icon: Moon,
    },
    {
      name: "System",
      value: "system" as const,
      icon: Monitor,
    },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="w-full justify-start text-neutral-300 dark:text-neutral-300 light:text-neutral-700 hover:bg-neutral-800 dark:hover:bg-neutral-800 light:hover:bg-neutral-200 hover:text-white dark:hover:text-white light:hover:text-neutral-900 py-2.5 px-4"
        >
          <Sun className="mr-3 h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute mr-3 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span>Theme Settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="right"
        align="start"
        className="w-48 bg-neutral-900 dark:bg-neutral-900 light:bg-white border-neutral-700 dark:border-neutral-700 light:border-neutral-300 font-mono"
      >
        {themes.map((themeOption) => {
          const Icon = themeOption.icon
          const isSelected = theme === themeOption.value

          return (
            <DropdownMenuItem
              key={themeOption.value}
              onClick={() => setTheme(themeOption.value)}
              className="text-neutral-300 dark:text-neutral-300 light:text-neutral-700 focus:bg-neutral-800 dark:focus:bg-neutral-800 light:focus:bg-neutral-200 focus:text-white dark:focus:text-white light:focus:text-neutral-900 cursor-pointer py-2.5 px-4"
            >
              <Icon className="mr-3 h-4 w-4" />
              <span className="flex-1">{themeOption.name}</span>
              {isSelected && <div className="ml-2 h-2 w-2 bg-axalio-green rounded-full" />}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
