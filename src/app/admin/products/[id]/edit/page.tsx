import db from "@/db";
import { PageHeader } from "../../../_components/PageHeader";
import { ProductForm } from "../../_components/ProductForm";

type EditProductPageProps = {
  params: {
    id: string
  }
}

export default async function EditProductPage({ params: { id } }: EditProductPageProps) {
  const product = await db.product.findUnique({ where: { id } })

  return <>
    <PageHeader>Edit Product</PageHeader>
    <ProductForm product={product} />
  </>
}