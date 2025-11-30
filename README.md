# Woo Commerce Store - Next.js E-commerce Application

This is a production-ready Next.js e-commerce application for an accessories and jewellery based store.

## Folder Structure

Here is a brief overview of the folder structure:

- **/app**: Contains the core application logic, using the Next.js App Router.
    - **/api**: API routes for backend functionality.
    - **/admin**: Admin dashboard/CMS panel.
    - **/cart**: Shopping cart page.
    - **/checkout**: Checkout page.
    - **/orders**: Order tracking pages.
    - **/products**: Product listing and detail pages.
    - **page.tsx**: The home page.
    - **layout.tsx**: The main app layout.

- **/components**: Reusable React components.
    - **/shared**: Components shared across the app (e.g., Navbar, Footer).
    - **/ui**: Generic UI elements (e.g., Button, Modal, SearchBar).
    - **/skeletons**: Loading skeletons for better UX.

- **/lib**: Utility functions and libraries.
    - **/payments**: Payment gateway integrations.
        - **/jazzcash**: JazzCash specific logic.
        - **/easypaisa**: EasyPaisa specific logic.
        - **/payfast**: PayFast specific logic.
        - **/stripe**: Stripe specific logic.
    - **db.ts**: Prisma client instance.
    - **constants.ts**: Application-wide constants.
    - **...**: Other utility functions.

- **/prisma**: Database schema and migrations.
    - **schema.prisma**: Defines the database models.
    - **seeds.ts**: Script for seeding the database with initial data.

- **/public**: Static assets like images and fonts.

- **/config**: Site-wide configuration.
    - **site.ts**: General site settings (name, currency, etc.).
    - **payments.ts**: Configuration for payment gateways.

- **/styles**: Global styles and TailwindCSS configuration.

## Environment Variables

Sensitive information and environment-specific settings should be stored in a `.env.local` file in the root of the project. **This file should not be committed to version control.**

Create a `.env.local` file and add the following variables:

```
# Database
DATABASE_URL="postgresql://user:password@host:port/database"

# Authentication (NextAuth.js)
# Generate a secret: `openssl rand -base64 32`
NEXTAUTH_SECRET="your_nextauth_secret"
NEXTAUTH_URL="http://localhost:3000"
GITHUB_ID="your_github_oauth_client_id"
GITHUB_SECRET="your_github_oauth_client_secret"

# Payment Gateways - PAKISTAN
JAZZCASH_MERCHANT_ID="your_jazzcash_merchant_id"
JAZZCASH_PASSWORD="your_jazzcash_password"
JAZZCASH_INTEGRITY_SALT="your_jazzcash_salt"
JAZZCASH_RETURN_URL="http://localhost:3000/api/payments/callback/jazzcash"

EASYPAISA_STORE_ID="your_easypaisa_store_id"
EASYPAISA_AUTH_KEY="your_easypaisa_auth_key"
EASYPAISA_RETURN_URL="http://localhost:3000/api/payments/callback/easypaisa"

PAYFAST_MERCHANT_ID="your_payfast_merchant_id"
PAYFAST_MERCHANT_KEY="your_payfast_merchant_key"
PAYFAST_PASSPHRASE="your_payfast_passphrase"
PAYFAST_NOTIFY_URL="http://localhost:3000/api/payments/webhook/payfast"
PAYFAST_RETURN_URL="http://localhost:3000/orders/success"
PAYFAST_CANCEL_URL="http://localhost:3000/orders/cancelled"


# Payment Gateways - INTERNATIONAL
STRIPE_SECRET_KEY="your_stripe_secret_key"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="your_stripe_public_key"

```

## Getting Started

1.  Install dependencies: `npm install`
2.  Set up your `.env.local` file.
3.  Run database migrations: `npx prisma migrate dev`
4.  Seed the database: `npx prisma db seed`
5.  Start the development server: `npm run dev`

```
This provides a solid foundation. You'll need to implement the detailed logic within each file, especially for payment integrations, as they have very specific requirements.
```
