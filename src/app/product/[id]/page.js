'use client'

import { useParams } from 'next/navigation'
import products from '@/data/product'
import { useCart } from '@/context/cartcontext'

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))
  const { addToCart } = useCart()

  if (!product) return <p>Product not found</p>

  return (
    <div className="p-6">
      <img src={product.image} alt={product.name} className="w-50 h-64 object-cover mb-4" />
      <h1 className="text-2xl font-semibold">{product.name}</h1>
      <p className="text-gray-600 my-2">${product.price}</p>
      <p className="mb-4">{product.description}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add to Cart
      </button>
    </div>
  )
}
