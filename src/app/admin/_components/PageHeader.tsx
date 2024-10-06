import { Button } from "@/components/ui/button"
import { Table, TableBody, TableHead, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { ReactNode } from "react"

type PageHeaderProps = {
  children: ReactNode
}

export function PageHeader({ children }: PageHeaderProps) {
  return <h1 className="text-4xl mb-4">{children}</h1>
}