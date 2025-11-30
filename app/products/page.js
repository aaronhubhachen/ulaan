'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import CountdownTimer from '../components/CountdownTimer'

const products = [
  {
    id: 1,
    name: "Quiet Cashmere Zip Up Hoodie",
    description: "Sourced directly from the steppe. 100% organic fiber with a modern oversized cut.",
    material: "100% Cashmere",
    origin: "Ulaanbaatar, Mongolia",
    price: "$430",
    colors: [
      { name: "Natural Tan", image: "/cash.png", value: "tan" },
      { name: "Black", image: "/cashb.png", value: "black" },
      { name: "Ulaan Red", image: "/cashr.png", value: "red" }
    ],
    defaultColor: "tan"
  },
  {
    id: 2,
    name: "Loud Fur Zip Up Hoodie",
    description: "Heavyweight architectural fleece lined with ethically sourced synthetic wolf fur.",
    material: "Faux Fur / Cotton Blend",
    origin: "Ulaanbaatar, Mongolia",
    price: "$410",
    colors: [
      { name: "Mongol Blue", image: "/fur.png", value: "charcoal" },
      { name: "Natural Tan", image: "/furc.png", value: "tan" },
      { name: "Ulaan Red", image: "/furr.png", value: "red" }
    ],
    defaultColor: "charcoal"
  },
  {
    id: 3,
    name: "Mongolian Cashmere Beanie",
    description: "Ribbed knit construction designed for harsh winters. Features embroidered Ulaan logo.",
    material: "Wool Blend",
    origin: "Ulaanbaatar, Mongolia",
    price: "$59",
    colors: [
      { name: "Ulaan Red", image: "/beanier.png", value: "red" },
      { name: "Black", image: "/beanieb.png", value: "black" },
      { name: "Mongol Blue", image: "/beaniebl.png", value: "blue" }
    ],
    defaultColor: "red"
  }
]

export default function Products() {
  const [selectedColors, setSelectedColors] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = product.defaultColor
      return acc
    }, {})
  )

  const handleColorChange = (productId, colorValue) => {
    setSelectedColors(prev => ({
      ...prev,
      [productId]: colorValue
    }))
  }

  const getCurrentImage = (product) => {
    const selectedColor = selectedColors[product.id]
    const colorOption = product.colors.find(c => c.value === selectedColor)
    return colorOption ? colorOption.image : product.colors[0].image
  }

  const getCurrentColorName = (product) => {
    const selectedColor = selectedColors[product.id]
    const colorOption = product.colors.find(c => c.value === selectedColor)
    return colorOption ? colorOption.name : product.colors[0].name
  }

  return (
    <main className="min-h-screen bg-[#050505] text-[#cac1b0]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-white">
            ulaan
          </Link>
          <div className="flex items-center gap-8">
            <CountdownTimer />
            <div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-widest">
              <Link href="/" className="hover:text-[#5d6ea1] transition-colors">HOME</Link>
              <Link href="/products" className="text-[#5d6ea1]">SHOP</Link>
              <Link href="/about" className="hover:text-[#5d6ea1] transition-colors">ABOUT</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="pt-24 pb-8 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-medium mb-3 tracking-tight text-white">
            THE COLLECTION
          </h1>
          <p className="text-sm md:text-base text-[#cac1b0]/80 max-w-2xl mx-auto font-light">
            Authentic Mongolian craftsmanship meets contemporary streetwear design
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#111] mb-6 border border-white/5">
                  <Image
                    src={getCurrentImage(product)}
                    alt={`${product.name} - ${getCurrentColorName(product)}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                
                {/* Product Info */}
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="font-serif text-xl text-white mb-1 group-hover:text-[#5d6ea1] transition-colors">
                        {product.name}
                      </h2>
                      <p className="text-[#cac1b0]/60 text-xs tracking-widest uppercase">
                        {product.material}
                      </p>
                    </div>
                    <span className="text-[#5d6ea1] font-serif text-xl">{product.price}</span>
                  </div>
                  
                  <p className="text-[#cac1b0]/80 leading-relaxed font-light text-sm">
                    {product.description}
                  </p>

                  {/* Color Selector */}
                  {product.colors.length > 1 && (
                    <div className="pt-4 border-t border-white/5">
                      <div className="text-xs text-[#cac1b0]/60 mb-3 tracking-widest uppercase">
                        Color: {getCurrentColorName(product)}
                      </div>
                      <div className="flex gap-3">
                        {product.colors.map((color) => (
                          <button
                            key={color.value}
                            onClick={() => handleColorChange(product.id, color.value)}
                            className={`relative w-12 h-12 border-2 transition-all duration-300 ${
                              selectedColors[product.id] === color.value
                                ? 'border-[#5d6ea1] scale-110'
                                : 'border-white/30 hover:border-white/60'
                            }`}
                            aria-label={`Select ${color.name}`}
                          >
                            <Image
                              src={color.image}
                              alt={color.name}
                              fill
                              className="object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Product Details */}
                  <div className="pt-4 border-t border-white/5 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-[#cac1b0]/60">Material</span>
                      <span className="text-[#cac1b0]">{product.material}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[#cac1b0]/60">Origin</span>
                      <span className="text-[#cac1b0]">{product.origin}</span>
                    </div>
                  </div>
                  
                  {/* Add to Cart Button */}
                  <button className="w-full border border-[#5d6ea1] text-[#5d6ea1] py-3 
                    text-sm tracking-widest uppercase hover:bg-[#5d6ea1] hover:text-white transition-all duration-300 mt-6">
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-2xl font-bold text-white">ULAAN</div>
          <div className="text-[#cac1b0]/40 text-xs tracking-widest uppercase text-center">
            © 2025 ULAAN. St. Louis / Ulaanbaatar.
          </div>
          <div className="flex gap-8 text-xs tracking-widest uppercase">
            <Link href="/products" className="text-[#cac1b0] hover:text-[#5d6ea1] transition-colors">Shop</Link>
            <Link href="/about" className="text-[#cac1b0] hover:text-[#5d6ea1] transition-colors">About</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}