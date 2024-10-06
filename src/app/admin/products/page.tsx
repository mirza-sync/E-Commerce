import { Button } from "@/components/ui/button";
import { TableRow, TableHead, TableBody, Table, TableHeader } from "@/components/ui/table";
import { PageHeader } from "../_components/PageHeader";
import Link from "next/link";

export default function AdminProductsPage() {
  return (
    <>
      <div className="flex justify-between gap-4">
        <PageHeader>Product</PageHeader>
        <Button asChild>
          <Link href="/admin/products/new">Add Product</Link>
        </Button>
      </div>
      <ProductTable />
    </>
  )
}

function ProductTable() {
  return (
    <Table>
      <TableHeader>
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
      </TableHeader>
      <TableBody />
    </Table>
  )
}