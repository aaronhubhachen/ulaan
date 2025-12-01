import Link from 'next/link'
import Image from 'next/image'
import CountdownTimer from '../components/CountdownTimer'
export default function About() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#cac1b0]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo Font from PDF */}
          <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-white">
            ulaan
          </Link>
          <div className="flex items-center gap-8">
            <CountdownTimer />
          <div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-widest">
            <Link href="/" className="hover:text-[#5d6ea1] transition-colors">HOME</Link>
            <Link href="/products" className="hover:text-[#5d6ea1] transition-colors">SHOP</Link>
            <Link href="/about" className="text-[#5d6ea1]">ABOUT</Link>
          </div>
          </div>
        </div>
      </nav>


      {/* The Mission Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-serif text-4xl text-white">THE STEPPE TO SOHO</h2>
            <div className="space-y-6 text-lg font-light leading-relaxed text-[#cac1b0]/90">
              <p>
                Ulaan isn't a traditional luxury house, and we aren't a hype-driven logo brand. 
                We exist in the middle.
              </p>
              <p>
                Our mission is to create elevated apparel that honors our roots. We define 
                "Modern Nomadic Luxury" as the intersection where the craftsmanship of the 
                Mongolian steppe meets the streetwear aesthetic of city life.
              </p>
              <p>
                Designed for the modern nomad—the customer who moves seamlessly between 
                comfort and style, nature and the city.
              </p>
            </div>
          </div>
          {/* Placeholder for Image: Ideally the 'Eagle Hunter' or 'Steppe' image from Page 6 */}
          <div className="bg-[#1a1a1a] border border-white/10 relative overflow-hidden">
            <Image
              src="https://cals.cornell.edu/sites/default/files/styles/article_hero_wide/public/2025-06/mongolian-landscape-photo_1.png?h=a6c55029&itok=gwZEHN4T"
              alt="Mongolian Landscape"
              width={800}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* The Process/Sourcing Section */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="font-serif text-4xl text-white">UNCOMPROMISING QUALITY</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-[#5d6ea1] font-sans tracking-widest uppercase text-sm">Sourcing</h3>
              <p className="font-light">
                We utilize direct partnerships with Mongolian herders for raw cashmere and sheepskin, 
                ensuring ethical sourcing and authentic material heritage.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-[#5d6ea1] font-sans tracking-widest uppercase text-sm">Production</h3>
              <p className="font-light">
                Small-batch production in Ulaanbaatar. We utilize a vertical integration approach, 
                inspecting professional patterns and materials before they ever leave Mongolia.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-[#5d6ea1] font-sans tracking-widest uppercase text-sm">Philosophy</h3>
              <p className="font-light">
                No massive drops. No fast fashion. We utilize a scarcity model not for hype, 
                but to ensure every piece is crafted with intention and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Vision Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">
            "People, when they say 'streetwear,' they miss the central component, which is that it's real people; it's clothes that are worn on the street" - Virgil Abloh
          </h2>
          <p className="text-[#cac1b0]/60 mb-12">
            Redefining quiet luxury for a new generation.
          </p>
          <Link 
            href="/products"
            className="inline-block border border-[#5d6ea1] text-[#5d6ea1] px-10 py-4 
            hover:bg-[#5d6ea1] hover:text-white transition-all duration-300 tracking-widest uppercase text-sm"
          >
            View The Collection
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-2xl font-bold text-white">ULAAN</div>
          <div className="text-[#cac1b0]/40 text-xs tracking-widest uppercase">
            © 2025 Ulaan. St. Louis / Ulaanbaatar.
          </div>
        </div>
      </footer>
    </main>
  )
}