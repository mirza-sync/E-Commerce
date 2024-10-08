"use client"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { useTransition } from "react"
import { toggleProductAvailability } from "../../_actions/products"

type ActiveToggleDropdownItemProps = {
  id: string,
  isAvailableForPurchase: boolean
}

export function ActiveToggleDropdownItem({ id, isAvailableForPurchase }: ActiveToggleDropdownItemProps) {
  const [isPending, startTransition] = useTransition()
  return (
    <DropdownMenuItem
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await toggleProductAvailability(id, !isAvailableForPurchase)
        })
      }}>
      {isAvailableForPurchase ? "Deactivate" : "Activate"}
    </DropdownMenuItem>
  )
}