// lib/payments/stripe/handler.ts

import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20',
});

/**
 * Creates a Stripe Payment Intent.
 */
export async function createPaymentIntent(amount: number) {
  return await stripe.paymentIntents.create({
    amount: amount * 100, // Stripe expects amount in cents
    currency: 'usd', // Or another supported currency for international
  });
}

/**
 * Mocks a Stripe payment for testing.
 */
export function mockStripePayment(amount: number) {
    return {
        success: true,
        transactionId: `mock_stripe_${Date.now()}`,
        message: 'Mock payment successful.'
    };
}
