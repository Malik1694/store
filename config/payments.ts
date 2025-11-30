// config/payments.ts

export const paymentGatewayConfig = {
    jazzcash: {
        enabled: true,
        merchantId: process.env.JAZZCASH_MERCHANT_ID,
        // Do NOT store secrets here. This file is for non-sensitive config.
    },
    easypaisa: {
        enabled: true,
        storeId: process.env.EASYPAISA_STORE_ID,
    },
    payfast: {
        enabled: false,
        merchantId: process.env.PAYFAST_MERCHANT_ID,
    },
    stripe: {
        enabled: true, // For international customers
        publicKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    },
    cod: { // Cash on Delivery
        enabled: true,
    }
};
