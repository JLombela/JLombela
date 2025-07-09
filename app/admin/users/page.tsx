"use client"

import { useState, useMemo } from "react"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

type User = {
  id: string
  name: string
  email: string
  role: "Buyer" | "Seller" | "Broker" | "Admin" | "Compliance"
  status: "Active" | "Pending" | "Blocked"
  registrationDate: string
  lastActivity: string
  avatar: string
}

const mockUsers: User[] = [
  {
    id: "usr_1",
    name: "John Lombela",
    email: "john@axalio.com",
    role: "Admin",
    status: "Active",
    registrationDate: "2023-01-15",
    lastActivity: "2 hours ago",
    avatar: "/images/john-lombela.jpg",
  },
  {
    id: "usr_2",
    name: "Golden Mining Co.",
    email: "contact@goldenmining.co",
    role: "Seller",
    status: "Active",
    registrationDate: "2023-02-20",
    lastActivity: "5 hours ago",
    avatar: "/placeholder.svg?width=32&height=32",
  },
  {
    id: "usr_3",
    name: "Swiss Refinery AG",
    email: "kyc@swissrefinery.ch",
    role: "Buyer",
    status: "Pending",
    registrationDate: "2023-03-10",
    lastActivity: "1 day ago",
    avatar: "/placeholder.svg?width=32&height=32",
  },
  {
    id: "usr_4",
    name: "Mining Brokers Ltd",
    email: "deals@miningbrokers.com",
    role: "Broker",
    status: "Active",
    registrationDate: "2023-04-05",
    lastActivity: "3 days ago",
    avatar: "/placeholder.svg?width=32&height=32",
  },
  {
    id: "usr_5",
    name: "Jane Doe",
    email: "jane.doe@axalio.com",
    role: "Compliance",
    status: "Active",
    registrationDate: "2023-01-20",
    lastActivity: "Just now",
    avatar: "/placeholder.svg?width=32&height=32",
  },
  {
    id: "usr_6",
    name: "Blocked Buyer Inc.",
    email: "blocked@buyer.com",
    role: "Buyer",
    status: "Blocked",
    registrationDate: "2023-05-01",
    lastActivity: "1 week ago",
    avatar: "/placeholder.svg?width=32&height=32",
  },
  {
    id: "usr_7",
    name: "Pending Seller LLC",
    email: "wait@seller.com",
    role: "Seller",
    status: "Pending",
    registrationDate: "2023-06-12",
    lastActivity: "2 weeks ago",
    avatar: "/placeholder.svg?width=32&height=32",
  },
]

export default function UserManagementPage() {
  const [users, setUsers] = useState<User[]>(mockUsers)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortConfig, setSortConfig] = useState<{ key: keyof User; direction: "ascending" | "descending" } | null>(null)
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set())

  const filteredAndSortedUsers = useMemo(() => {
    let sortableUsers = [...users]
    if (searchTerm) {
      sortableUsers = sortableUsers.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }
    if (sortConfig !== null) {
      sortableUsers.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1
        }
        return 0
      })
    }
    return sortableUsers
  }, [users, searchTerm, sortConfig])

  const requestSort = (key: keyof User) => {
    let direction: "ascending" | "descending" = "ascending"
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending"
    }
    setSortConfig({ key, direction })
  }

  const getStatusBadge = (status: User["status"]) => {
    switch (status) {
      case "Active":
        return "bg-axalio-green text-black hover:bg-axalio-green/90"
      case "Pending":
        return "bg-yellow-500 text-black hover:bg-yellow-500/90"
      case "Blocked":
        return "bg-red-600 text-white hover:bg-red-600/90"
    }
  }

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(new Set(filteredAndSortedUsers.map((u) => u.id)))
    } else {
      setSelectedRows(new Set())
    }
  }

  const handleSelectRow = (id: string, checked: boolean) => {
    const newSelectedRows = new Set(selectedRows)
    if (checked) {
      newSelectedRows.add(id)
    } else {
      newSelectedRows.delete(id)
    }
    setSelectedRows(newSelectedRows)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="w-full sm:max-w-xs">
          <Input
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="font-mono"
          />
        </div>
        <div className="flex gap-2">
          {/* Add filter dropdowns here if needed */}
          <Button className="bg-axalio-green hover:bg-axalio-green/90 text-black font-mono uppercase">Add User</Button>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]">
                <Checkbox
                  checked={selectedRows.size > 0 && selectedRows.size === filteredAndSortedUsers.length}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => requestSort("name")}>
                <div className="flex items-center gap-2 font-mono uppercase">
                  User <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => requestSort("role")}>
                <div className="flex items-center gap-2 font-mono uppercase">
                  Role <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => requestSort("status")}>
                <div className="flex items-center gap-2 font-mono uppercase">
                  Status <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer hidden md:table-cell"
                onClick={() => requestSort("registrationDate")}
              >
                <div className="flex items-center gap-2 font-mono uppercase">
                  Registered <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead className="cursor-pointer hidden lg:table-cell" onClick={() => requestSort("lastActivity")}>
                <div className="flex items-center gap-2 font-mono uppercase">
                  Last Activity <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead className="text-right font-mono uppercase">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedRows.has(user.id)}
                    onCheckedChange={(checked) => handleSelectRow(user.id, !!checked)}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-mono font-bold text-foreground">{user.name}</div>
                      <div className="font-mono text-xs text-muted-foreground">{user.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="font-mono text-sm">{user.role}</span>
                </TableCell>
                <TableCell>
                  <Badge className={`${getStatusBadge(user.status)} font-mono`}>{user.status}</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <span className="font-mono text-sm">{user.registrationDate}</span>
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  <span className="font-mono text-sm">{user.lastActivity}</span>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="font-mono">
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Reset Password</DropdownMenuItem>
                      <DropdownMenuItem>Assign Role</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-500">
                        {user.status === "Blocked" ? "Enable Account" : "Disable Account"}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
