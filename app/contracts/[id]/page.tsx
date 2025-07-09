import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Printer, Send, Expand } from "lucide-react"

export default function ContractViewPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col h-[calc(100vh-65px)]">
      <header className="sticky top-[65px] z-10 flex items-center justify-between border-b bg-background/95 px-6 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div>
          <h2 className="text-lg font-semibold font-mono">Contract: C-125</h2>
          <p className="text-sm text-muted-foreground">Master Sales Agreement - Jet Fuel A1</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Printer className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Send className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Expand className="h-4 w-4" />
          </Button>
          <Button>Request Signature</Button>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-6 bg-muted/20">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardContent className="p-12 font-serif text-sm leading-relaxed">
            <h3 className="text-2xl font-bold text-center mb-8">MASTER SALES AGREEMENT</h3>
            <p className="mb-6">
              This Master Sales Agreement ("Agreement") is made and entered into as of July 15, 2024 ("Effective Date"),
              by and between Global PetroCorp, a corporation organized and existing under the laws of Delaware, with its
              principal office at 123 Energy Plaza, Houston, TX ("Seller"), and Axalio, a corporation organized and
              existing under the laws of New York, with its principal office at 456 Finance Avenue, New York, NY
              ("Buyer").
            </p>
            <h4 className="font-bold text-lg mt-8 mb-4">1. SCOPE OF AGREEMENT</h4>
            <p className="mb-4">
              This Agreement shall govern all sales of petroleum products, including but not limited to Jet Fuel A1
              ("Products"), by Seller to Buyer. Each transaction shall be evidenced by a separate purchase order
              ("Purchase Order") issued by Buyer and accepted by Seller.
            </p>
            <h4 className="font-bold text-lg mt-8 mb-4">2. PRICE AND PAYMENT TERMS</h4>
            <p className="mb-4">
              2.1. The price for the Products shall be determined based on the Platts index for the relevant Product on
              the date of the Purchase Order, plus or minus a differential to be mutually agreed upon in writing for
              each transaction.
            </p>
            <p className="mb-4">
              2.2. Payment shall be made in United States Dollars (USD) via wire transfer within thirty (30) days from
              the date of the invoice. Invoices shall be issued upon successful delivery of the Product.
            </p>
            <h4 className="font-bold text-lg mt-8 mb-4">3. DELIVERY AND TRANSFER OF TITLE</h4>
            <p className="mb-4">
              3.1. Delivery of the Products shall be made FOB (Free on Board) at the port specified in the Purchase
              Order.
            </p>
            <p className="mb-4">
              3.2. Title and risk of loss for the Products shall pass from Seller to Buyer once the Products have passed
              the ship's rail at the port of loading.
            </p>
            <p className="mt-12 text-muted-foreground">
              [... The remainder of the contract document continues with sections on quality assurance, force majeure,
              confidentiality, term and termination, governing law, and signatures ...]
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
