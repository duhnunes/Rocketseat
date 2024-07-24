import Stripe from 'stripe'

const stripeSecretKey = process.env.STRIPE_SECRET_KEY

if (!stripeSecretKey) {
  throw new Error('Stripe secret key is not defined in environment variables.')
}

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2024-06-20',
  appInfo: {
    name: 'Ignite Shop',
  },
})
