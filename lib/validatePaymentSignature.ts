import crypto from 'crypto';

interface ValidationParams {
    signature: string;
    payload: any; // This will vary based on the payment provider
    secret: string;
}

/**
 * Validates a payment signature from a webhook or callback.
 * This is a generic example. Each payment provider will have a specific implementation.
 */
export function validatePaymentSignature({ signature, payload, secret }: ValidationParams): boolean {
    const dataToSign = JSON.stringify(payload); // Or a specific string format required by the provider
    const expectedSignature = crypto
        .createHmac('sha256', secret)
        .update(dataToSign)
        .digest('hex');

    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature));
}
