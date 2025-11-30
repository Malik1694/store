// lib/payments/payfast/handler.ts

export const payFastConfig = {
    merchantId: process.env.PAYFAST_MERCHANT_ID,
    merchantKey: process.env.PAYFAST_MERCHANT_KEY,
    passphrase: process.env.PAYFAST_PASSPHRASE, // Optional
    notifyUrl: process.env.PAYFAST_NOTIFY_URL,
    returnUrl: process.env.PAYFAST_RETURN_URL,
    cancelUrl: process.env.PAYFAST_CANCEL_URL,
};

/**
 * Generates the signature for a PayFast request.
 */
export function generatePayFastSignature(data: any): string {
    // Implement PayFast's specific signature generation logic
    return 'payfast_signature';
}

/**
 * Mocks a PayFast payment for testing.
 */
export function mockPayFastPayment(amount: number) {
    return {
        success: true,
        transactionId: `mock_pf_${Date.now()}`,
        message: 'Mock payment successful.'
    };
}
