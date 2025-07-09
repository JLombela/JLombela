import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileSignature, Search } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"

const contracts = [
  {
    id: "C-125",
    title: "Master Sales Agreement - Jet Fuel A1",
    dealId: "D-001",
    status: "Executed",
    parties: "Global PetroCorp & Axalio",
    date: "2024-07-15",
  },
  {
    id: "C-126",
    title: "Non-Disclosure Agreement",
    dealId: "D-001",
    status: "Executed",
    parties: "Global PetroCorp & Axalio",
    date: "2024-07-10",
  },
  {
    id: "C-127",
    title: "Service Level Agreement - Crude Oil",
    dealId: "D-002",
    status: "Draft",
    parties: "National Oil Co. & Axalio",
    date: "2024-07-20",
  },
  {
    id: "C-128",
    title: "Logistics & Shipping Contract",
    dealId: "D-003",
    status: "In Review",
    parties: "Oceanic Freight & Axalio",
    date: "2024-07-22",
  },
  {
    id: "C-129",
    title: "Financing Agreement",
    dealId: "D-001",
    status: "Terminated",
    parties: "Global PetroCorp & Axalio",
    date: "2024-06-30",
  },
]

const statusColors: { [key: string]: string } = {
  Executed: "bg-green-500/20 text-green-400 border-green-500/30",
  Draft: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  "In Review": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Terminated: "bg-red-500/20 text-red-400 border-red-500/30",
}

export default function ContractsPage() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search contracts..." className="pl-10" />
        </div>
        <Button>
          <FileSignature className="mr-2 h-4 w-4" />
          New Contract
        </Button>
      </div>
      <div className="border rounded-lg bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Contract ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Parties</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Associated Deal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contracts.map((contract) => (
              <TableRow key={contract.id} className="hover:bg-muted/50">
                <TableCell className="font-mono">
                  <Link href={`/contracts/${contract.id}`} className="text-axalio-green hover:underline">
                    {contract.id}
                  </Link>
                </TableCell>
                <TableCell className="font-medium">{contract.title}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={statusColors[contract.status]}>
                    {contract.status}
                  </Badge>
                </TableCell>
                <TableCell>{contract.parties}</TableCell>
                <TableCell>{contract.date}</TableCell>
                <TableCell className="font-mono">
                  <Link href={`/deals/${contract.dealId}`} className="text-blue-400 hover:underline">
                    {contract.dealId}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
