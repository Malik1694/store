import { prisma } from './db';
import { validatePaymentSignature } from './validatePaymentSignature';

interface WebhookParams {
    provider: string;
    request: Request;
    secret: string;
}

/**
 * Handles incoming webhooks from payment providers.
 */
export async function handleWebhook({ provider, request, secret }: WebhookParams) {
    const payload = await request.json();
    const signature = request.headers.get('x-signature'); // Or whatever header the provider uses

    // 1. Log the incoming request for debugging
    await prisma.transactionLog.create({
        data: {
            provider,
            payload,
            status: 'RECEIVED'
        }
    });

    // 2. Validate the signature
    const isValid = validatePaymentSignature({
        signature: signature || '',
        payload,
        secret
    });

    if (!isValid) {
        // Log invalid signature attempt
        return { success: false, message: 'Invalid signature.' };
    }

    // 3. Process the webhook based on the event type
    const eventType = payload.event; // e.g., 'payment.success', 'payment.failed'

    switch (eventType) {
        case 'payment.success':
            // Update order status, grant access to product, etc.
            // const orderId = payload.data.order_id;
            // await prisma.order.update({ where: { id: orderId }, data: { status: 'COMPLETED' } });
            break;
        case 'payment.failed':
            // Update order status, send notification, etc.
            break;
        default:
            // Handle unknown event types
    }

    return { success: true, message: 'Webhook processed successfully.' };
}
