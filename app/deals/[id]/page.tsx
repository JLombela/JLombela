import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { FileText, Download, Users, Briefcase, DollarSign, Calendar } from "lucide-react"
import Link from "next/link"

const dealStages = ["Initiation", "KYC/AML Review", "Contract Negotiation", "Financing", "Execution", "Closed"]
const currentStageIndex = 2 // Contract Negotiation

const linkedContracts = [
  { id: "C-125", title: "Master Sales Agreement", status: "Executed" },
  { id: "C-126", title: "Non-Disclosure Agreement", status: "Executed" },
  { id: "C-129", title: "Financing Agreement", status: "Terminated" },
]

const documents = {
  pop: [{ name: "Proof of Product - Batch 7A.pdf", date: "2024-07-12" }],
  invoices: [{ name: "Invoice INV-001.pdf", date: "2024-07-16" }],
  compliance: [{ name: "AML Report - Global PetroCorp.pdf", date: "2024-07-11" }],
  shipping: [{ name: "Bill of Lading - Vessel 'Oceanic'.pdf", date: "2024-07-18" }],
}

export default function DealViewPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6 p-6">
      {/* Deal Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="font-mono">Deal ID: {params.id}</CardTitle>
          <CardDescription>Sale of 1,000,000 Barrels of Jet Fuel A1</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center gap-3">
            <Users className="h-6 w-6 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Buyer</p>
              <p className="font-semibold">Axalio</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Seller</p>
              <p className="font-semibold">Global PetroCorp</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <DollarSign className="h-6 w-6 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Amount</p>
              <p className="font-semibold">$75,000,000 USD</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="h-6 w-6 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Closing Date</p>
              <p className="font-semibold">2024-08-30</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progress Tracker */}
      <Card>
        <CardHeader>
          <CardTitle>Deal Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Progress value={((currentStageIndex + 1) / dealStages.length) * 100} className="w-full" />
            <div className="flex justify-between text-xs text-muted-foreground">
              {dealStages.map((stage, index) => (
                <div
                  key={stage}
                  className={`text-center ${index <= currentStageIndex ? "font-semibold text-foreground" : ""}`}
                >
                  {stage}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Linked Contracts */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Linked Contracts</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {linkedContracts.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell className="font-mono">
                      <Link href={`/contracts/${c.id}`} className="text-axalio-green hover:underline">
                        {c.id}
                      </Link>
                    </TableCell>
                    <TableCell>{c.title}</TableCell>
                    <TableCell>
                      <Badge variant={c.status === "Executed" ? "default" : "destructive"}>{c.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Documents */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="pop">
              <TabsList>
                <TabsTrigger value="pop">Proof of Product</TabsTrigger>
                <TabsTrigger value="invoices">Invoices</TabsTrigger>
                <TabsTrigger value="compliance">Compliance</TabsTrigger>
                <TabsTrigger value="shipping">Shipping</TabsTrigger>
              </TabsList>
              <TabsContent value="pop" className="mt-4">
                {documents.pop.map((doc) => (
                  <div key={doc.name} className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-xs text-muted-foreground">Uploaded: {doc.date}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="invoices" className="mt-4">
                {documents.invoices.map((doc) => (
                  <div key={doc.name} className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-xs text-muted-foreground">Uploaded: {doc.date}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="compliance" className="mt-4">
                {documents.compliance.map((doc) => (
                  <div key={doc.name} className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-xs text-muted-foreground">Uploaded: {doc.date}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="shipping" className="mt-4">
                {documents.shipping.map((doc) => (
                  <div key={doc.name} className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-xs text-muted-foreground">Uploaded: {doc.date}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
