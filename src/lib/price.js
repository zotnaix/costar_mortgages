export default function formatPrice(price, frequency){
  if (!price) return '$0'
  if (frequency === 'monthly'){
    return `$${Number(price).toLocaleString()}/mo`
  }
  return `$${Number(price).toLocaleString()}`
}
