"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  Store,
  Handshake,
  ShieldCheck,
  FileText,
  DollarSign,
  Shield,
  Server,
  User,
  Package,
  ChevronRight,
} from "lucide-react"
import { usePathname } from "next/navigation"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const NAV_ITEMS = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    subItems: [
      { title: "Main", href: "/dashboard", icon: LayoutDashboard },
      { title: "User", href: "/dashboard/user", icon: User },
      { title: "Seller", href: "/dashboard/seller", icon: Package },
      { title: "Broker", href: "/dashboard/broker", icon: Handshake },
      { title: "KYC/AML", href: "/dashboard/kyc-aml", icon: ShieldCheck },
    ],
  },
  { title: "Deals", href: "/deals", icon: ClipboardList },
  { title: "Buyers", href: "/buyers", icon: Users },
  { title: "Sellers", href: "/sellers", icon: Store },
  { title: "Brokers", href: "/brokers", icon: Handshake },
  { title: "KYC/KYB", href: "/kyc-kyb", icon: ShieldCheck },
  { title: "Onboarding", href: "/onboarding", icon: Users },
  { title: "Documents", href: "/documents", icon: FileText },
  { title: "Commissions", href: "/commissions", icon: DollarSign },
  { title: "Admin", href: "/admin", icon: Shield },
  { title: "Systems", href: "/systems", icon: Server },
] as const

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs text-neutral-400 tracking-wider font-mono">
            NAVIGATION
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV_ITEMS.map((item) => (
                <SidebarMenuItem key={item.href}>
                  {item.subItems ? (
                    <Collapsible defaultOpen={pathname.startsWith("/dashboard")} className="group/collapsible">
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="font-mono tracking-wider">
                          <item.icon />
                          <span className="uppercase">{item.title}</span>
                          <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.subItems.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.href}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={pathname === subItem.href}
                                className="font-mono tracking-wider"
                              >
                                <a href={subItem.href}>
                                  <subItem.icon />
                                  <span className="uppercase">{subItem.title}</span>
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild isActive={pathname === item.href} className="font-mono tracking-wider">
                      <a href={item.href}>
                        <item.icon />
                        <span className="uppercase">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
