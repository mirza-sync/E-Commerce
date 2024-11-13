'use client';

import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

type CheckoutFormProps = {
  product: any;
  clientSecret: string;
};

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export function CheckoutForm({ product, clientSecret }: CheckoutFormProps) {
  return (
    <div>
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <Form />
      </Elements>
    </div>
  );
}

function Form() {
  const stripe = useStripe();
  const element = useElements();

  return <PaymentElement />;
}
