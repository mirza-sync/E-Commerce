import { Button } from "@/components/ui/button"
import { Table, TableBody, TableHead, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { ReactNode } from "react"

type PageHeaderProps = {
  children: ReactNode
}

export function PageHeader({ children }: PageHeaderProps) {
  return (
    <>
      <div className="flex justify-between gap-4">
        <h1 className="text-4xl mb-4">{children}</h1>
        <Button asChild>
          <Link href="/admin/product/new">Add Product</Link>
        </Button>
      </div>
      <ProductTable />
    </>
  )
}

function ProductTable() {
  return (
    <Table>
      <TableRow>
        <TableHead className="w-0">
          <span className="sr-only">Available For Purchase</span>
        </TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Price</TableHead>
        <TableHead>Orders</TableHead>
        <TableHead className="w-0">
          <span className="sr-only">Actions</span>
        </TableHead>
      </TableRow>
      <TableBody />
    </Table>
  )
}