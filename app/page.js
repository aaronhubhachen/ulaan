'use client'

import Link from 'next/link'
import Image from 'next/image'
import CountdownTimer from './components/CountdownTimer'

export default function Home() {
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
            <Link href="/" className="text-[#5d6ea1]">HOME</Link>
            <Link href="/products" className="hover:text-[#5d6ea1] transition-colors">SHOP</Link>
            <Link href="/about" className="hover:text-[#5d6ea1] transition-colors">ABOUT</Link>
          </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient updated to Ulaan Blue/Black */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-[#5d6ea1]/10"></div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="text-[#5d6ea1] text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in">
            Est. 2025
          </p>
          <h1 className="font-serif text-6xl md:text-9xl font-medium mb-6 tracking-tight text-white">
            MODERN <br />
            NOMADIC <br />
            LUXURY
          </h1>
          <p className="text-lg md:text-xl text-[#cac1b0]/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Bridging the gap between the craftsmanship of the Mongolian Steppe 
            and the streetwear aesthetic of SoHo.
          </p>
          <Link 
            href="/products"
            className="inline-block border border-[#5d6ea1] text-[#5d6ea1] px-10 py-4 
            text-sm tracking-widest uppercase hover:bg-[#5d6ea1] hover:text-white transition-all duration-300"
          >
            Enter The Shop
          </Link>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-32 px-6 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              THE DROP
            </h2>
            <Link href="/products" className="hidden md:block text-[#5d6ea1] text-sm tracking-widest uppercase hover:text-white transition-colors">
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Product 1 - Quiet Cashmere [cite: 49] */}
            <Link href="/products" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#111] mb-6 border border-white/5">
                <Image
                  src="/cash.png"
                  alt="Quiet Cashmere Zip Up Hoodie"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-xl text-white mb-1 group-hover:text-[#5d6ea1] transition-colors">Quiet Cashmere Zip Up</h3>
                  <p className="text-[#cac1b0]/60 text-xs tracking-widest uppercase">100% Mongolian Cashmere</p>
                </div>
                <span className="text-[#5d6ea1] font-serif">$430</span>
              </div>
            </Link>

            {/* Product 2 - Loud Fur [cite: 56] */}
            <Link href="/products" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#111] mb-6 border border-white/5">
                <Image
                  src="/fur.png"
                  alt="Loud Fur Zip Up Hoodie"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-xl text-white mb-1 group-hover:text-[#5d6ea1] transition-colors">Loud Fur Zip Up</h3>
                  <p className="text-[#cac1b0]/60 text-xs tracking-widest uppercase">Ethical Wolf Fur / Cotton</p>
                </div>
                <span className="text-[#5d6ea1] font-serif">$410</span>
              </div>
            </Link>

            {/* Product 3 - Beanie [cite: 57] */}
            <Link href="/products" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#111] mb-6 border border-white/5">
                <Image
                  src="/beanier.png"
                  alt="Mongolian Cashmere Beanie"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-xl text-white mb-1 group-hover:text-[#5d6ea1] transition-colors">Heritage Beanie</h3>
                  <p className="text-[#cac1b0]/60 text-xs tracking-widest uppercase">Wool Blend Knit</p>
                </div>
                <span className="text-[#5d6ea1] font-serif">$59</span>
              </div>
            </Link>
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link href="/products" className="text-[#5d6ea1] text-sm tracking-widest uppercase hover:text-white transition-colors">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Section - "The Steppe to SoHo"  */}
      <section className="py-32 px-6 bg-[#050505] border-t border-white/5 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5d6ea1]/50 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[#5d6ea1] text-sm tracking-[0.2em] uppercase mb-6 block">
            Our Mission
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-8">
            FROM THE STEPPE <br /> TO SOHO
          </h2>
          <p className="text-xl text-[#cac1b0]/80 leading-relaxed mb-8 font-light">
            Ulaan is positioned between traditional luxury and hype-driven streetwear. 
            We offer the raw, authentic heritage of the Mongolian landscape combined 
            with the modern aesthetic of urban city life.
          </p>
          <p className="text-lg text-[#cac1b0]/60 leading-relaxed mb-12 max-w-2xl mx-auto">
            This isn't just clothing. It's a bridge between two worlds.
          </p>
          <Link 
            href="/about"
            className="inline-block bg-white text-black px-10 py-4 
            text-sm tracking-widest uppercase hover:bg-[#5d6ea1] hover:text-white transition-all duration-300"
          >
            Read Our Story
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-serif text-2xl font-bold text-white">ULAAN</div>
            <div className="text-[#cac1b0]/40 text-xs tracking-widest uppercase text-center">
              © 2025 ULAAN. St. Louis / Ulaanbaatar.
            </div>
            <div className="flex gap-8 text-xs tracking-widest uppercase">
              <Link href="/products" className="text-[#cac1b0] hover:text-[#5d6ea1] transition-colors">Shop</Link>
              <Link href="/about" className="text-[#cac1b0] hover:text-[#5d6ea1] transition-colors">About</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}