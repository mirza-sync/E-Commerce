import db from '@/db';
import { notFound } from 'next/navigation';
import Stripe from 'stripe';
import { CheckoutForm } from './_components/CheckoutForm';

export default async function PurchasePage({ params: { id } }: { params: { id: string } }) {
  const product = await db.product.findUnique({ where: { id } });
  if (product == null) return notFound();

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: product.priceInCents,
    currency: 'USD',
    metadata: { product: product.id },
  });

  if (paymentIntent.client_secret == null) {
    throw Error('Stripe failed to create payment intent');
  }

  return <CheckoutForm product={product} clientSecret={paymentIntent.client_secret} />;
}
