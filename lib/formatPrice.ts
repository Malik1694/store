export function formatPrice(price: number, currency: string = 'PKR') {
    return `${currency} ${price.toLocaleString()}`;
}
